"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

/**
 * Search and category filtering for the page directory.
 *
 * This component renders the controls and nothing else. The five hundred links
 * it filters are server-rendered by the page above it, and this narrows them by
 * toggling the `hidden` attribute on nodes it finds in the DOM.
 *
 * That is a deliberate choice rather than the obvious one. Passing the whole
 * index into a client component would serialise every entry a second time into
 * the RSC payload — the same five hundred titles and URLs already in the HTML,
 * shipped again as JSON, roughly doubling the weight of the heaviest page on
 * the site. Filtering the rendered DOM costs one attribute per row instead.
 *
 * It also means the directory is complete before this component exists: the
 * unfiltered list is the server render, so a crawler, a reader with JavaScript
 * disabled, and the first paint all see every page. The controls only ever
 * remove rows from view.
 *
 * `hidden` rather than a class, because it removes the row from the
 * accessibility tree as well as the layout — a filtered-out link should not be
 * reachable by a screen reader or by tabbing.
 */

const ALL = "__all__";

export interface DirectoryFacet {
  heading: string;
  slug: string;
  count: number;
}

export function DirectoryControls({
  facets,
  total,
  /** Id of the element wrapping the rendered categories. */
  listId,
}: {
  facets: DirectoryFacet[];
  total: number;
  listId: string;
}) {
  const [query, setQuery] = useState("");
  const [facet, setFacet] = useState(ALL);
  const [shown, setShown] = useState(total);
  const inputId = useId();
  const frame = useRef(0);

  const apply = useCallback(
    (nextQuery: string, nextFacet: string) => {
      const list = document.getElementById(listId);
      if (!list) return;

      const needle = nextQuery.trim().toLowerCase();
      const terms = needle ? needle.split(/\s+/) : [];
      let visible = 0;

      for (const section of list.querySelectorAll<HTMLElement>("[data-category]")) {
        const inFacet = nextFacet === ALL || section.dataset.category === nextFacet;
        let matches = 0;

        for (const row of section.querySelectorAll<HTMLElement>("[data-entry]")) {
          const haystack = row.dataset.keywords ?? "";
          // Every term has to appear somewhere in the row's corpus, so
          // "linkedin b2b" narrows rather than widening the way OR would.
          const hit = inFacet && terms.every((term) => haystack.includes(term));
          row.hidden = !hit;
          if (hit) matches += 1;
        }

        // A category with nothing left in it is hidden entirely, heading and
        // count included — an empty section under a heading reads as a bug.
        section.hidden = matches === 0;
        const counter = section.querySelector<HTMLElement>("[data-category-count]");
        if (counter) {
          const totalInCategory = counter.dataset.categoryCount ?? "0";
          counter.textContent =
            matches === Number(totalInCategory)
              ? `${totalInCategory} pages`
              : `${matches} of ${totalInCategory}`;
        }
        visible += matches;
      }

      setShown(visible);
    },
    [listId],
  );

  // Filtering is scheduled on a frame rather than run on every keystroke: at
  // five hundred rows the synchronous pass is perceptible on a slow machine,
  // and coalescing to one pass per frame keeps typing smooth.
  useEffect(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => apply(query, facet));
    return () => cancelAnimationFrame(frame.current);
  }, [apply, query, facet]);

  // Nothing has been filtered until this mounts, so the rows start visible and
  // stay that way if the component never runs.
  useEffect(() => {
    const list = document.getElementById(listId);
    list?.setAttribute("data-filterable", "true");
  }, [listId]);

  const clear = () => {
    setQuery("");
    setFacet(ALL);
  };

  const narrowed = shown !== total;
  const activeLabel = useMemo(
    () => facets.find((f) => f.slug === facet)?.heading,
    [facets, facet],
  );

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <label htmlFor={inputId} className="sr-only">
          Search pages
        </label>
        <div className="relative min-w-0 flex-1 sm:max-w-[30rem]">
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-graphite-soft"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l3 3" />
            </svg>
          </span>
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages..."
            autoComplete="off"
            className="h-12 w-full rounded-full border border-paper-line bg-field pl-11 pr-4 text-body text-graphite outline-none transition-colors placeholder:text-graphite-soft/70 focus-visible:border-lime-deep focus-visible:ring-2 focus-visible:ring-lime-deep/25 [&::-webkit-search-cancel-button]:appearance-none"
          />
        </div>

        <p aria-live="polite" className="eyebrow shrink-0 tnum">
          {narrowed ? `${shown} of ${total} pages` : `${total} pages`}
          {narrowed && activeLabel ? ` · ${activeLabel}` : ""}
        </p>

        {narrowed ? (
          <button
            type="button"
            onClick={clear}
            className="eyebrow shrink-0 underline decoration-lime-deep decoration-[1.5px] underline-offset-[4px] transition-colors hover:text-lime-deep"
          >
            Clear
          </button>
        ) : null}
      </div>

      {/* Seventeen chips wrap to seven rows on a phone, and this bar is sticky
          — that would leave a third of the viewport for the list it filters. On
          a narrow screen the row scrolls sideways instead and stays one line
          high; from the small breakpoint up there is room to wrap. */}
      <div className="-mx-(--spacing-gutter) flex items-center gap-1.5 overflow-x-auto px-(--spacing-gutter) pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        <Chip label="All" active={facet === ALL} onClick={() => setFacet(ALL)} />
        {facets.map((item) => (
          <Chip
            key={item.slug}
            label={item.heading}
            count={item.count}
            active={facet === item.slug}
            onClick={() => setFacet(facet === item.slug ? ALL : item.slug)}
          />
        ))}
      </div>

      {shown === 0 ? (
        <p className="rule-t mt-4 py-12 text-center text-lead text-graphite-soft">
          Nothing matches “{query.trim()}”.{" "}
          <button
            type="button"
            onClick={clear}
            className="underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep"
          >
            Clear the search
          </button>{" "}
          to see all {total} pages.
        </p>
      ) : null}
    </div>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-fine font-medium transition-[background-color,border-color,color] duration-300 ease-[var(--ease-out-expo)] ${
        active
          ? "border-lime-deep bg-lime/20 text-graphite"
          : "border-paper-line text-graphite-soft hover:border-lime-deep/50 hover:text-graphite"
      }`}
    >
      {label}
      {typeof count === "number" ? (
        <span className={`tnum text-[0.7rem] ${active ? "text-graphite/70" : "text-graphite-soft/70"}`}>
          {count}
        </span>
      ) : null}
    </button>
  );
}
