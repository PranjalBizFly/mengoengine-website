"use client";

import { useEffect, useRef, useState } from "react";
import type { OutlineItem } from "@/lib/outline";

/**
 * Contextual navigation for a long page.
 *
 * Sticks below the site header and tracks the reader's position. The labels are
 * the page's own section headings — this never invents a name for a band, and a
 * page declares the outline in the same place it renders the sections.
 *
 * It degrades correctly: the markup is plain anchors, so it works with no
 * JavaScript at all, and the smooth scroll and the offset both come from
 * `scroll-behavior` / `scroll-padding-top` in globals.css, which the global
 * reduced-motion rule already turns off.
 */



/**
 * Which of `ids` the reader is currently in.
 *
 * A scroll handler rather than an IntersectionObserver band: with sections of
 * wildly different heights, "the last section whose top has passed the reading
 * line" is both trivially correct and cheap at this list length, where a
 * one-pixel observer band leaves gaps with nothing intersecting.
 *
 * `stripHeight` is the height of the navigation doing the tracking, so the
 * reading line clears it.
 */
function useActiveSection(ids: string[], stripHeight: number): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  const queued = useRef(false);
  const key = ids.join("|");

  useEffect(() => {
    const list = key ? key.split("|") : [];
    if (list.length === 0) return;

    function update() {
      queued.current = false;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const headerH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 4.25;
      // Matches `scroll-padding-top` in globals.css, plus a tolerance: an
      // anchor jump lands the section exactly on that offset, and without the
      // slack the section you just clicked sits a fraction below the line and
      // the previous one stays highlighted.
      const line = headerH * rem + stripHeight + 24 + 12;

      let current: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Above the first section, the first entry is still the right answer.
      setActive(current ?? list[0] ?? null);
    }

    function onScroll() {
      if (queued.current) return;
      queued.current = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, stripHeight]);

  return active;
}

export function SectionNav({ items, label = "On this page" }: { items: OutlineItem[]; label?: string }) {
  const [present, setPresent] = useState<OutlineItem[]>(items);
  const listRef = useRef<HTMLUListElement>(null);
  const active = useActiveSection(
    present.map((item) => item.id),
    56,
  );

  /* A drifted id would otherwise render a link that scrolls nowhere. Dropping
     it is the honest failure: the section is genuinely not on this page. */
  useEffect(() => {
    const found = items.filter((item) => document.getElementById(item.id));
    if (found.length !== items.length) setPresent(found);
  }, [items]);

  /* Keep the active chip visible in the strip on a narrow screen, where the
     list scrolls horizontally and the current section can sit off-screen. */
  useEffect(() => {
    if (!active) return;
    const chip = listRef.current?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (!chip || !listRef.current) return;
    const list = listRef.current;
    const overflowing = list.scrollWidth > list.clientWidth + 1;
    if (!overflowing) return;
    const left = chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2;
    list.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [active]);

  if (present.length < 2) return null;

  return (
    <nav
      aria-label={label}
      className="section-nav sticky top-(--header-h) z-40 border-b border-paper-line bg-paper/92 backdrop-blur-xl"
    >
      <div className="container-page">
        <ul
          ref={listRef}
          className="-mx-1 flex h-14 items-center gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {present.map((item) => {
            const current = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-chip={item.id}
                  aria-current={current ? "true" : undefined}
                  className={`relative flex h-9 items-center whitespace-nowrap rounded-full px-3.5 type-nav text-fine transition-colors ${
                    current
                      ? "bg-lime/25 font-semibold text-graphite shadow-[inset_0_0_0_1px_var(--color-lime-deep)]"
                      : "text-graphite-soft hover:bg-paper-warm hover:text-graphite"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/**
 * The contents rail beside a long-form article, with the reader's position
 * tracked. Same numbering and links as before; the only addition is that the
 * entry you are currently reading is marked, which on a fifteen-section
 * playbook is the difference between a list and a position indicator.
 */
export function ContentsRail({
  items,
  label = "Contents",
}: {
  items: OutlineItem[];
  label?: string;
}) {
  const active = useActiveSection(
    items.map((item) => item.id),
    0,
  );

  return (
    <nav aria-label={label} className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
      <p className="eyebrow mb-4">{label}</p>
      <ol className="space-y-2.5">
        {items.map((item, i) => {
          const current = item.id === active;
          return (
            <li key={item.id} className="flex gap-3 py-1">
              <span
                className={`tnum mt-1.5 text-eyebrow font-semibold transition-colors ${
                  current ? "text-lime-deep" : "text-lime-deep/55"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                className={`block py-1 text-small leading-snug transition-colors hover:text-lime-deep ${
                  current ? "font-semibold text-graphite" : "text-graphite-soft"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
