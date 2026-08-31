"use client";

import Link from "next/link";
import { useDeferredValue, useId, useMemo, useState } from "react";
import type { FaqEntry } from "@/lib/faq";

/**
 * Filter for the FAQ index.
 *
 * Every question ships in the HTML and is filtered client-side, so the page is
 * fully readable without JavaScript and crawlable in one pass. The input only
 * narrows what is already there.
 */
export function FaqBrowser({
  groups,
  total,
}: {
  groups: { topic: string; entries: FaqEntry[] }[];
  total: number;
}) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string>("All");
  const deferred = useDeferredValue(query);
  const inputId = useId();

  const filtered = useMemo(() => {
    const needle = deferred.trim().toLowerCase();
    return groups
      .filter((group) => topic === "All" || group.topic === topic)
      .map((group) => ({
        topic: group.topic,
        entries: needle
          ? group.entries.filter(
              (e) => e.q.toLowerCase().includes(needle) || e.source.toLowerCase().includes(needle),
            )
          : group.entries,
      }))
      .filter((group) => group.entries.length > 0);
  }, [groups, deferred, topic]);

  const shown = filtered.reduce((n, g) => n + g.entries.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="w-full md:max-w-[22rem]">
          <label htmlFor={inputId} className="eyebrow">
            Search questions
          </label>
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="follow-up, pricing, LinkedIn…"
            className="mt-3 min-h-11 w-full rounded-full border border-paper-line bg-white px-5 text-body text-graphite outline-none transition-colors placeholder:text-graphite-soft/60 focus:border-lime-deep"
          />
        </div>
        <p aria-live="polite" className="eyebrow">
          {shown} of {total} questions
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...groups.map((g) => g.topic)].map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={topic === option}
            onClick={() => setTopic(option)}
            className={`inline-flex min-h-10 items-center rounded-full border px-4 text-small font-medium transition-colors ${
              topic === option
                ? "border-lime-deep bg-lime-deep text-paper"
                : "border-paper-line text-graphite-soft hover:border-lime-deep hover:text-lime-deep"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-body text-graphite-soft">
          Nothing matches &ldquo;{query}&rdquo;. Try a broader word, or ask us directly on the{" "}
          <Link href="/contact/" className="underline decoration-lime-deep underline-offset-[3px]">
            contact page
          </Link>
          .
        </p>
      ) : (
        <div className="mt-12 grid gap-12">
          {filtered.map((group) => (
            <section key={group.topic}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 rule-b pb-3">
                <h2 className="text-d4">{group.topic}</h2>
                <span className="eyebrow">{group.entries.length} questions</span>
              </div>
              <ul className="mt-4">
                {group.entries.map((entry) => (
                  <li key={`${entry.href}${entry.q}`}>
                    <Link
                      href={entry.href}
                      className="group grid gap-1 rule-t py-3.5 transition-colors hover:bg-paper-warm/70 sm:grid-cols-[1fr_minmax(0,13rem)] sm:gap-6"
                    >
                      <span className="text-body text-graphite transition-colors group-hover:text-lime-deep">
                        {entry.q}
                      </span>
                      <span className="text-fine text-graphite-soft">Answered on {entry.source}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
