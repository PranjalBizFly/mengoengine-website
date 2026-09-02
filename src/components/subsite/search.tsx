"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sitePath, type SubSite } from "@/lib/subdomains";

/**
 * In-site search for the search-led registers.
 *
 * Deliberately a filter over this site's own pages rather than a query against
 * a service. There is no search backend to call, and a box that posts somewhere
 * and returns nothing is worse than no box — so this searches what actually
 * exists: every page's title, its section, and the headings and intros of its
 * blocks. That is enough to find "how do I change my billing details" in a help
 * centre of this size, and it is honest about its scope.
 *
 * The index is built once from the site's own content at module evaluation for
 * the page, so typing costs a string comparison rather than a request.
 */

interface Entry {
  path: string;
  title: string;
  group?: string;
  blurb: string;
  haystack: string;
}

function buildIndex(subsite: SubSite): Entry[] {
  return subsite.pages
    .filter((page) => page.path !== "")
    .map((page) => {
      const fragments: string[] = [page.title, page.navLabel ?? "", page.group ?? "", page.hero.lead];
      for (const block of page.blocks) {
        if ("heading" in block && block.heading) fragments.push(block.heading);
        if ("intro" in block && block.intro) fragments.push(block.intro);
        if (block.type === "faq") for (const item of block.items) fragments.push(item.q);
        if (block.type === "definitions") for (const item of block.items) fragments.push(item.label);
        if (block.type === "steps") for (const step of block.steps) fragments.push(step.title);
        if (block.type === "checklist") fragments.push(...block.items);
        if (block.type === "index") for (const link of block.links) fragments.push(link.label);
      }
      return {
        path: page.path,
        title: page.title,
        group: page.group,
        blurb: page.hero.lead,
        haystack: fragments.join(" ").toLowerCase(),
      };
    });
}

export function SubSiteSearch({ subsite, placeholder }: { subsite: SubSite; placeholder: string }) {
  const [query, setQuery] = useState("");
  const index = useMemo(() => buildIndex(subsite), [subsite]);

  const trimmed = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (trimmed.length < 2) return [];
    const terms = trimmed.split(/\s+/);
    return index
      .map((entry) => ({
        entry,
        score: terms.reduce((total, term) => {
          if (entry.title.toLowerCase().includes(term)) return total + 3;
          if (entry.haystack.includes(term)) return total + 1;
          return total;
        }, 0),
      }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((row) => row.entry);
  }, [index, trimmed]);

  const searching = trimmed.length >= 2;

  return (
    <div className="border-b border-paper-line bg-paper">
      <div className="container-page py-8 md:py-10">
        <form role="search" onSubmit={(event) => event.preventDefault()} className="max-w-[44rem]">
          <label htmlFor="subsite-search" className="eyebrow mb-3 block">
            Search {subsite.shortName.toLowerCase()}
          </label>
          <div className="relative">
            <svg
              aria-hidden
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-graphite-soft"
            >
              <circle cx="7.2" cy="7.2" r="5.4" />
              <path d="M11.4 11.4 15.3 15.3" strokeLinecap="round" />
            </svg>
            <input
              id="subsite-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              autoComplete="off"
              className="min-h-13 w-full rounded-full border border-paper-line bg-field py-3.5 pl-13 pr-5 text-body text-graphite transition-colors placeholder:text-graphite-soft/70 focus:border-lime-deep focus:outline-none"
            />
          </div>
        </form>

        {/* The region is always present so a result set arriving does not shift
            the page; it is only announced once there is something to announce. */}
        <div aria-live="polite" className="max-w-[52rem]">
          {searching ? (
            results.length > 0 ? (
              <>
                <p className="eyebrow mt-8">
                  {results.length} {results.length === 1 ? "page" : "pages"}
                </p>
                <ul className="mt-3">
                  {results.map((result) => (
                    <li key={result.path} className="rule-t">
                      <Link
                        href={sitePath(subsite.key, result.path)}
                        className="group -mx-4 block rounded-2xl px-4 py-4 transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-paper-warm/80 motion-safe:hover:translate-x-1"
                      >
                        {result.group ? <span className="eyebrow">{result.group}</span> : null}
                        <span className="type-title mt-1 block text-h7 text-graphite transition-colors group-hover:text-lime-deep">
                          {result.title}
                        </span>
                        <span className="mt-1 block max-w-[62ch] text-small leading-relaxed text-graphite-soft">
                          {result.blurb}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-8 max-w-[52ch] text-body text-graphite-soft">
                Nothing on this site matches “{query.trim()}”. Try a broader word, browse the sections
                below, or{" "}
                <Link
                  href={sitePath(subsite.key, "contact")}
                  className="underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] hover:text-lime-deep"
                >
                  ask us directly
                </Link>
                .
              </p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
