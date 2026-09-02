"use client";

import Link from "next/link";
import { useDeferredValue, useId, useMemo, useState } from "react";

/**
 * Search over the glossary, on top of the A–Z it already had.
 *
 * The letter jump-list answers "I know the word"; this answers "I know roughly
 * what it does". Both matter on a seventy-term reference, and neither replaces
 * the other, so the letters stay and narrow to what is actually on screen.
 *
 * Every term ships in the HTML — the filter only hides rows — so the page reads
 * and indexes identically with JavaScript off.
 */

export interface GlossaryEntry {
  slug: string;
  title: string;
  definition: string;
  href: string;
}

export function GlossaryBrowser({ entries }: { entries: GlossaryEntry[] }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const inputId = useId();

  const matched = useMemo(() => {
    const needle = deferred.trim().toLowerCase();
    if (!needle) return entries;
    return entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(needle) || entry.definition.toLowerCase().includes(needle),
    );
  }, [entries, deferred]);

  const letters = useMemo(
    () => [...new Set(matched.map((entry) => entry.title[0].toUpperCase()))].sort(),
    [matched],
  );

  const narrowed = matched.length !== entries.length;

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <label htmlFor={inputId} className="sr-only">
          Search the glossary
        </label>
        <div className="relative min-w-0 flex-1 sm:max-w-[26rem]">
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-graphite-soft"
          >
            <svg
              width="15"
              height="15"
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
            placeholder="Search terms and definitions"
            autoComplete="off"
            className="h-12 w-full rounded-full border border-paper-line bg-field pl-11 pr-4 text-body text-graphite outline-none transition-colors placeholder:text-graphite-soft/70 focus-visible:border-lime-deep focus-visible:ring-2 focus-visible:ring-lime-deep/25 [&::-webkit-search-cancel-button]:appearance-none"
          />
        </div>
        <p aria-live="polite" className="eyebrow shrink-0">
          {narrowed ? `${matched.length} of ${entries.length} terms` : `${entries.length} terms`}
        </p>
      </div>

      {matched.length === 0 ? (
        <p className="rule-t py-14 text-center text-lead text-graphite-soft">
          No term matches “{query.trim()}”.{" "}
          <button
            type="button"
            onClick={() => setQuery("")}
            className="underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep"
          >
            Clear the search
          </button>{" "}
          to see all {entries.length}.
        </p>
      ) : (
        <div className="grid gap-12">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-[calc(var(--header-h)+2rem)]">
              <h2 className="text-d4 text-lime-deep">{letter}</h2>
              <dl className="mt-5 grid gap-x-12 lg:grid-cols-2">
                {matched
                  .filter((entry) => entry.title[0].toUpperCase() === letter)
                  .map((entry) => (
                    <div key={entry.slug} className="rule-t py-4">
                      <dt>
                        <Link
                          href={entry.href}
                          className="inline-block py-0.5 type-title text-h7 transition-colors hover:text-lime-deep"
                        >
                          {entry.title}
                        </Link>
                      </dt>
                      <dd className="mt-1.5 text-body leading-relaxed text-graphite-soft">{entry.definition}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
