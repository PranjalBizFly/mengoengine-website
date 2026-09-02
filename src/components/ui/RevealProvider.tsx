"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { EVENTS, track } from "@/lib/analytics";

/**
 * Scroll motion for the whole site, in one observer and one rAF loop.
 *
 * Content ships visible. The hidden state is only introduced once this mounts
 * and confirms IntersectionObserver support, so crawlers, no-JS visitors and
 * the pre-hydration paint always see the full page. Reduced-motion users get
 * the CSS override in globals.css, and we skip observing entirely for them.
 *
 * Three behaviours share the one pass:
 *
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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-revealed), [data-reveal-lines]:not(.is-revealed)",
    );
    for (const el of targets) {
      // Anything already in view on load is revealed immediately — an element
      // above the fold must never wait for a scroll event that may not come.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
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
