"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { EVENTS, track } from "@/lib/analytics";

/**
 * Scroll reveal for the whole site, in one observer.
 *
 * Content ships visible. The hidden state is only introduced once this mounts
 * and confirms IntersectionObserver support, so crawlers, no-JS visitors and
 * the pre-hydration paint always see the full page. Reduced-motion users get
 * the CSS override in globals.css, and we skip observing entirely for them.
 */
export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || typeof IntersectionObserver === "undefined") return;

    root.classList.add("js-reveal");

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

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)");
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
