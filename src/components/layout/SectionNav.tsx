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
 * The contents rail beside a long-form article.
 *
 * One component, two presentations of the same list. On a wide screen it is a
 * sticky editorial rail in the left column: numbered entries against a hairline,
 * with the entry you are currently reading marked by weight and by the rule
 * beside it, never by colour alone. Below that breakpoint three columns are a
 * fiction, so the same list collapses into a native disclosure above the
 * article — the pattern the documentation sidebar already uses, rather than a
 * second overlay on top of the one the header owns.
 *
 * Only one of the two is ever in the accessibility tree: the other is
 * `display: none`, so the duplicated landmark label costs nothing.
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

  /* A single entry is not a table of contents, it is a restatement of the
     title. `LongForm` asks the same question before it reserves the column. */
  if (items.length < 2) return null;

  const list = (
    <ol className="border-l border-paper-line">
      {items.map((item, i) => {
        const current = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={current ? "true" : undefined}
              className={`-ml-px flex min-h-11 items-baseline gap-3 border-l py-2.5 pl-4 text-small leading-snug transition-[color,border-color] duration-300 lg:min-h-0 lg:py-2 ${
                current
                  ? // The lime rule and the weight both carry the position, so
                    // it survives greyscale and a colour-blind reader alike.
                    "border-lime-deep font-semibold text-graphite"
                  : "border-transparent text-graphite-soft hover:border-paper-line hover:text-graphite"
              }`}
            >
              {/* Graphite rather than lime: at 12px this is text, and lime-deep
                  on paper resolves to 2.93:1. The lime is spent on the rule
                  beside the entry, where it is a redundant marker rather than
                  the only thing carrying the state. */}
              <span
                className={`tnum shrink-0 text-eyebrow font-semibold transition-colors ${
                  current ? "text-graphite" : "text-graphite-soft"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <nav
        aria-label={label}
        className="rule-t hidden lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:block lg:max-h-[calc(100vh-var(--header-h)-5rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pb-2 lg:pt-5"
      >
        <p className="eyebrow mb-4 pl-4">{label}</p>
        {list}
      </nav>

      <details className="group rule-b rule-t lg:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3.5 type-title text-h7 text-graphite [&::-webkit-details-marker]:hidden">
          {label}
          <span
            aria-hidden
            className="relative h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
          />
        </summary>
        <nav aria-label={label} className="pb-5 pt-1">
          {list}
        </nav>
      </details>
    </>
  );
}
