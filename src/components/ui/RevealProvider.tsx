"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { EVENTS, track } from "@/lib/analytics";
import { REVEAL_ABORT_ATTR, REVEAL_ARM_ATTR } from "@/lib/reveal-init";

/**
 * Scroll motion for the whole site, in one observer and one rAF loop.
 *
 * Content ships visible. The hidden state exists only under `html.js-reveal`,
 * which is armed by the head script in `@/lib/reveal-init` under exactly the
 * conditions this file needs — JavaScript running, IntersectionObserver
 * available, reduced motion not requested — so crawlers and no-JS visitors
 * always see the full page and this controller can rely on the hidden state
 * already being the painted one. Reduced-motion users additionally get the CSS
 * override in globals.css, and we skip observing entirely for them.
 *
 * Four behaviours share the one pass:
 *
 *  - opening     elements already on screen play the entrance their template
 *                composed, released together on the second frame
 *  - reveal      elements marked `data-reveal` transition in as they enter
 *  - stagger     a container marked `data-reveal-stagger` hands its children
 *                incremental delays, so a grid resolves in sequence without
 *                every template hand-writing delay values
 *  - parallax    elements marked `data-parallax` drift against the scroll
 */
const STAGGER_STEP = 70;
const STAGGER_MAX = 6;
const PARALLAX_RANGE = 44;

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || typeof IntersectionObserver === "undefined") return;
    // The failsafe in the head script has already given up and un-hidden the
    // page. Re-arming now would hide content the reader is looking at.
    if (root.hasAttribute(REVEAL_ABORT_ATTR)) return;

    root.setAttribute(REVEAL_ARM_ATTR, "");
    // Normally a no-op: the head script armed this before first paint. It still
    // has to happen here for a client-side navigation into a page whose reveal
    // targets did not exist when that script ran.
    root.classList.add("js-reveal");

    /* --- Stagger: assign delays before anything is observed ------------- */
    for (const group of document.querySelectorAll<HTMLElement>("[data-reveal-stagger]")) {
      const children = [...group.children] as HTMLElement[];
      children.forEach((child, i) => {
        // A template-authored delay always wins; this only fills the gaps.
        if (child.style.getPropertyValue("--reveal-delay")) return;
        if (!child.hasAttribute("data-reveal")) child.setAttribute("data-reveal", "");
        child.style.setProperty("--reveal-delay", `${Math.min(i, STAGGER_MAX) * STAGGER_STEP}ms`);
      });
    }

    /* An element is only ever revealed through here, so the observer and the
       sweep below can never fight over the same node. */
    const pending = new Set<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      el.classList.add("is-revealed");
      observer.unobserve(el);
      pending.delete(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-revealed), [data-reveal-lines]:not(.is-revealed)",
    );
    const onScreen: HTMLElement[] = [];
    for (const el of targets) {
      // Anything already in view on load never waits for a scroll event that
      // may not come; it plays its entrance on arrival instead.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        onScreen.push(el);
      } else {
        pending.add(el);
        observer.observe(el);
      }
    }

    /* The opening of the page is the one sequence the reader is guaranteed to
       see, so it is the one place the delays authored in the templates matter.
       Releasing on the second frame is what makes them work: the hidden state
       has to be committed to a painted frame before the class that transitions
       out of it lands, or the browser coalesces both into one style
       recalculation and the elements simply appear. */
    const opening = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        for (const el of onScreen) el.classList.add("is-revealed");
      }),
    );

    /* --- Safety sweep --------------------------------------------------
       An IntersectionObserver reports the state of an element at the end of a
       frame, not every position it passed through. A fast scroll — a wheel
       fling, PageDown held down, a scrollbar drag, a jump to an anchor — moves
       a section from below the fold to above it inside one frame, and the
       observer legitimately never sees it intersect. The element then stays at
       `opacity: 0` for the rest of the session: not a missed animation but
       missing content.

       So the observer decides *when* something animates, and this decides that
       it animates at all. Anything still pending whose top edge has gone past
       the bottom of the viewport is revealed regardless of what the observer
       saw. It shares the scroll listener's rhythm rather than adding its own,
       and the set empties as the page is read, so a fully-revealed page costs
       one emptiness check per scroll frame. */
    let queued = false;
    const sweep = () => {
      queued = false;
      if (pending.size === 0) return;
      const limit = window.innerHeight * 0.92;
      for (const el of [...pending]) {
        if (el.getBoundingClientRect().top < limit) reveal(el);
      }
    };
    const onScroll = () => {
      if (queued || pending.size === 0) return;
      queued = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(opening);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  /* --- Parallax and reading progress, one rAF loop --------------------- */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    let layers: HTMLElement[] = [];
    let frame = 0;
    let queued = false;

    function collect() {
      layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    }

    function draw() {
      queued = false;
      const viewport = window.innerHeight;

      for (const layer of layers) {
        const box = layer.getBoundingClientRect();
        if (box.bottom < -200 || box.top > viewport + 200) continue;
        // -1 when the element sits below the fold, +1 when it has passed above.
        const travel = (viewport / 2 - (box.top + box.height / 2)) / (viewport / 2 + box.height / 2);
        layer.style.setProperty("--parallax", `${(travel * PARALLAX_RANGE).toFixed(1)}px`);
      }

      if (progress) {
        const scrollable = document.documentElement.scrollHeight - viewport;
        const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
        progress.style.setProperty("--progress", ratio.toFixed(4));
      }
    }

    function onScroll() {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(draw);
    }

    collect();
    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Routes are client-navigated, so the layer set has to be rebuilt after the
    // new page paints rather than only on mount.
    const settle = window.setTimeout(() => {
      collect();
      draw();
    }, 120);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // One delegated listener for FAQ opens, rather than making every FAQ list a
  // client component. `toggle` fires on the native <details> element.
  useEffect(() => {
    function onToggle(event: Event) {
      const details = event.target as HTMLElement;
      if (!(details instanceof HTMLDetailsElement) || !details.open) return;
      if (!details.closest("[data-faq]")) return;
      const question = details.querySelector("summary")?.textContent?.trim();
      track(EVENTS.faqOpen, { label: question?.slice(0, 120), source: window.location.pathname });
    }
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, []);

  return null;
}
