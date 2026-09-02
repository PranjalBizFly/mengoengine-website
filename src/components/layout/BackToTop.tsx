"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Back-to-top control.
 *
 * Visibility is driven by an IntersectionObserver watching a sentinel at the
 * top of the document rather than a scroll listener, so nothing runs on the
 * scroll thread. Hidden until the visitor is roughly a viewport down, and
 * `inert` while hidden so it never becomes a stray tab stop.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function toTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    // Return focus to the top of the document so keyboard users continue from
    // the start rather than from a control that has just disappeared.
    document.getElementById("main")?.focus({ preventScroll: true });
  }

  return (
    <>
      {/* Marks "one viewport from the top"; the control appears past it. */}
      <div ref={sentinel} aria-hidden className="pointer-events-none absolute top-0 left-0 h-[90vh] w-px" />
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        title="Back to top"
        // Kept out of the tab order and off screen readers while hidden.
        inert={!visible}
        aria-hidden={!visible}
        className={`fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-paper-line bg-paper/90 text-graphite shadow-md backdrop-blur-md transition-[opacity,transform,border-color,color] duration-300 ease-[var(--ease-out-expo)] hover:border-lime-deep hover:text-lime-deep motion-safe:hover:-translate-y-0.5 md:right-6 md:bottom-6 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
        </svg>
      </button>
    </>
  );
}
