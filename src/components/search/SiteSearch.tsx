"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { EVENTS, track } from "@/lib/analytics";

/**
 * Site-wide search for a 500-page ecosystem.
 *
 * The index is a static JSON file generated at build time from the same route
 * index that produces the sitemap, so it can never drift from what the site
 * actually publishes. It is fetched on the first open rather than bundled: 77 kB
 * of index has no business on the critical path of every page when most visits
 * never open search.
 *
 * Matching is deliberately simple — prefix, word-boundary, substring, then
 * all-tokens-present — because the corpus is small, the titles are the query
 * most of the time, and a fuzzy matcher on 500 entries mostly produces
 * confident nonsense.
 */

interface Entry {
  /** Title. */
  t: string;
  /** Href. */
  h: string;
  /** Kind label. */
  k: string;
  /** Blurb. */
  b?: string;
}

interface Index {
  order: string[];
  entries: Entry[];
}

/** Module-level cache: one fetch per page load, however often search is opened. */
let cached: Index | null = null;
let inFlight: Promise<Index> | null = null;

function loadIndex(): Promise<Index> {
  if (cached) return Promise.resolve(cached);
  if (inFlight) return inFlight;
  inFlight = fetch("/search-index.json")
    .then((r) => {
      if (!r.ok) throw new Error(`search index ${r.status}`);
      return r.json() as Promise<Index>;
    })
    .then((data) => {
      cached = data;
      inFlight = null;
      return data;
    })
    .catch((error) => {
      inFlight = null;
      throw error;
    });
  return inFlight;
}

/* ------------------------------------------------------------------ */
/* Matching                                                            */
/* ------------------------------------------------------------------ */

/** Kinds nudged up on a tie, so an engine outranks an asset format. */
const KIND_WEIGHT: Record<string, number> = {
  Engine: 40,
  Capability: 30,
  Solution: 28,
  Industry: 26,
  "Use case": 24,
  Section: 22,
  Channel: 18,
  Resource: 16,
  Comparison: 12,
  Article: 10,
  "Channel guide": 6,
  Format: 4,
  Term: 2,
};

function score(entry: Entry, needle: string, tokens: string[]): number {
  const title = entry.t.toLowerCase();
  const blurb = entry.b?.toLowerCase() ?? "";
  const bonus = KIND_WEIGHT[entry.k] ?? 0;

  if (title === needle) return 1000 + bonus;
  if (title.startsWith(needle)) return 800 - Math.min(title.length, 60) + bonus;
  // Word-boundary hit reads as a real match; mid-word does not.
  if (new RegExp(`\\b${escapeRe(needle)}`).test(title)) return 600 + bonus;
  if (title.includes(needle)) return 420 + bonus;
  if (blurb.startsWith(needle) || new RegExp(`\\b${escapeRe(needle)}`).test(blurb)) return 300 + bonus;
  if (blurb.includes(needle)) return 200 + bonus;
  // Multi-word query whose words are all present, in any order or field.
  if (tokens.length > 1) {
    const haystack = `${title} ${blurb}`;
    if (tokens.every((token) => haystack.includes(token))) return 120 + bonus;
  }
  return 0;
}

function escapeRe(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const MAX_RESULTS = 40;

function rank(index: Index | null, query: string): Entry[] {
  if (!index) return [];
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];
  const tokens = needle.split(/\s+/).filter(Boolean);

  const scored: { entry: Entry; value: number }[] = [];
  for (const entry of index.entries) {
    const value = score(entry, needle, tokens);
    if (value > 0) scored.push({ entry, value });
  }
  scored.sort((a, b) => b.value - a.value || a.entry.t.localeCompare(b.entry.t));
  return scored.slice(0, MAX_RESULTS).map((s) => s.entry);
}

/** Group ranked results by kind, preserving overall rank order between groups. */
function group(results: Entry[], order: string[]): { kind: string; items: Entry[] }[] {
  const buckets = new Map<string, Entry[]>();
  for (const entry of results) {
    const bucket = buckets.get(entry.k);
    if (bucket) bucket.push(entry);
    else buckets.set(entry.k, [entry]);
  }
  return [...buckets.entries()]
    .map(([kind, items]) => ({ kind, items }))
    .sort((a, b) => {
      const ia = order.indexOf(a.kind);
      const ib = order.indexOf(b.kind);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
}

/* ------------------------------------------------------------------ */
/* Trigger                                                             */
/* ------------------------------------------------------------------ */

/**
 * The header search affordance. Two shapes: a labelled field-alike on desktop
 * that also advertises the shortcut, and an icon button on small screens where
 * the bar has no room for it.
 */
export function SearchButton({
  onOpen,
  variant = "bar",
  className = "",
}: {
  onOpen: () => void;
  variant?: "bar" | "icon";
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={`flex h-11 w-11 items-center justify-center rounded-full text-graphite transition-colors hover:text-lime-deep ${className}`}
      >
        <span className="sr-only">Search this site</span>
        <SearchIcon />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group flex h-9 items-center gap-2 rounded-full border border-paper-line bg-paper-warm/60 pl-3 pr-2 text-graphite-soft transition-colors hover:border-lime-deep/50 hover:text-graphite ${className}`}
    >
      <SearchIcon />
      <span className="type-nav text-fine">Search</span>
      <kbd className="ml-1 hidden rounded border border-paper-line bg-paper px-1.5 py-0.5 font-sans text-eyebrow leading-none tracking-normal text-graphite-soft xl:inline-block">
        /
      </kbd>
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="6.5" cy="6.5" r="4.5" />
      <path d="M10 10l3 3" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hotkey                                                              */
/* ------------------------------------------------------------------ */

/**
 * Opens search on ⌘K / Ctrl+K, or on a bare "/" the way documentation sites do.
 * Both are suppressed while the caret is in a field, so typing a slash into the
 * contact form does not launch a dialog over it.
 */
export function useSearchHotkey(onOpen: () => void, active: boolean) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!active) onOpen();
        return;
      }
      if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        if (!active) onOpen();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onOpen, active]);
}

/* ------------------------------------------------------------------ */
/* Dialog                                                              */
/* ------------------------------------------------------------------ */

/** Shown before anything is typed. Real destinations, not invented ones. */
const STARTING_POINTS: { label: string; href: string }[] = [
  { label: "Platform overview", href: "/platform/" },
  { label: "All capabilities", href: "/features/" },
  { label: "All solutions", href: "/solutions/" },
  { label: "All industries", href: "/industries/" },
  { label: "Resources", href: "/resources/" },
  { label: "Everything on this site", href: "/sitemap/" },
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [index, setIndex] = useState<Index | null>(cached);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const listboxId = useId();
  const titleId = useId();

  /* Fetch the index the first time the dialog is opened. */
  useEffect(() => {
    if (!open || cached) return;
    let cancelled = false;
    loadIndex()
      .then((data) => {
        if (!cancelled) setIndex(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  /* Focus in on open, and back to whatever opened it on close. */
  useEffect(() => {
    if (open) {
      restoreTo.current = document.activeElement as HTMLElement | null;
      // The panel animates in; focusing on the next frame avoids the browser
      // scrolling to a not-yet-positioned element.
      const frame = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(frame);
    }
    setQuery("");
    setActive(0);
    restoreTo.current?.focus?.();
  }, [open]);

  /* The page behind is locked by the host (the header), which is also the
     owner of the mobile-menu lock. Two overlays managing `body.overflow`
     independently deadlock each other, so this component deliberately does
     not touch it. */

  const results = useMemo(() => rank(index, query), [index, query]);
  const grouped = useMemo(() => group(results, index?.order ?? []), [results, index]);
  /* Flat order matches what the arrow keys walk through. */
  const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = useCallback(
    (href: string) => {
      track(EVENTS.navOpen, { label: `search → ${href}`, source: window.location.pathname });
      onClose();
      router.push(href);
    },
    [onClose, router],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if (flat.length === 0) return;
        event.preventDefault();
        setActive((current) => {
          const next = event.key === "ArrowDown" ? current + 1 : current - 1;
          return (next + flat.length) % flat.length;
        });
        return;
      }
      if (event.key === "Enter" && flat[active]) {
        event.preventDefault();
        go(flat[active].h);
        return;
      }
      // Only the input and the close button are tabbable, so the trap is a
      // two-stop cycle rather than a full sweep of the subtree.
      if (event.key === "Tab") {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          "input, button:not([disabled])",
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    },
    [flat, active, go, onClose],
  );

  /* Keep the highlighted row in view while arrowing through a long list. */
  useEffect(() => {
    if (!open || flat.length === 0) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-result="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open, flat.length]);

  if (!open) return null;

  const needle = query.trim();
  const searching = needle.length >= 2;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pb-8 pt-[10vh] sm:pt-[12vh]"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        aria-hidden
        className="fixed inset-0 bg-forest/45 backdrop-blur-[3px] motion-safe:animate-[search-veil_240ms_var(--ease-out-expo)_both]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={onKeyDown}
        className="relative flex max-h-[78vh] w-full max-w-[42rem] flex-col overflow-hidden rounded-2xl border border-paper-line bg-paper shadow-[0_40px_90px_-40px_rgb(2_32_24/0.7)] motion-safe:animate-[search-panel_320ms_var(--ease-out-expo)_both]"
      >
        <h2 id={titleId} className="sr-only">
          Search MengoEngine
        </h2>

        <div className="flex items-center gap-3 border-b border-paper-line px-4 sm:px-5">
          <span className="text-graphite-soft" aria-hidden>
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={searching}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={flat[active] ? `${listboxId}-${active}` : undefined}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search capabilities, industries, resources…"
            aria-label="Search this site"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="h-14 min-w-0 flex-1 bg-transparent text-body text-graphite outline-none placeholder:text-graphite-soft/70 [&::-webkit-search-cancel-button]:appearance-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 flex h-9 shrink-0 items-center rounded-full px-3 text-fine font-semibold text-graphite-soft transition-colors hover:text-lime-deep"
          >
            Esc
          </button>
        </div>

        <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3 sm:px-3">
          {failed ? (
            <Message>
              Search could not load. The{" "}
              <Link href="/sitemap/" onClick={onClose} className="underline decoration-lime-deep underline-offset-2">
                sitemap
              </Link>{" "}
              lists every page on this site.
            </Message>
          ) : !searching ? (
            <>
              <p className="px-3 pb-2 pt-1 eyebrow">Start here</p>
              <ul>
                {STARTING_POINTS.map((point) => (
                  <li key={point.href}>
                    <Link
                      href={point.href}
                      onClick={onClose}
                      className="flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-body text-graphite transition-colors hover:bg-paper-warm hover:text-lime-deep"
                    >
                      {point.label}
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="px-3 pb-1 pt-4 text-fine text-graphite-soft">
                {index ? `Searching ${index.entries.length} pages.` : "Loading the index…"} Use ↑ ↓ to move, Enter to
                open.
              </p>
            </>
          ) : flat.length === 0 ? (
            <Message>
              Nothing matches “{needle}”. Try a broader word, or browse the{" "}
              <Link href="/sitemap/" onClick={onClose} className="underline decoration-lime-deep underline-offset-2">
                full sitemap
              </Link>
              .
            </Message>
          ) : (
            <div id={listboxId} role="listbox" aria-label="Search results">
              {(() => {
                let cursor = -1;
                return grouped.map((section) => (
                  <div key={section.kind} className="mb-1 last:mb-0">
                    <p className="px-3 pb-1 pt-2 eyebrow">{section.kind}</p>
                    <ul>
                      {section.items.map((entry) => {
                        cursor += 1;
                        const position = cursor;
                        const selected = position === active;
                        return (
                          <li key={entry.h}>
                            <Link
                              id={`${listboxId}-${position}`}
                              data-result={position}
                              role="option"
                              aria-selected={selected}
                              href={entry.h}
                              onClick={onClose}
                              onMouseMove={() => setActive(position)}
                              className={`flex items-start justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors ${
                                selected ? "bg-paper-warm" : ""
                              }`}
                            >
                              <span className="min-w-0">
                                <span
                                  className={`block text-body font-medium ${
                                    selected ? "text-lime-deep" : "text-graphite"
                                  }`}
                                >
                                  {entry.t}
                                </span>
                                {entry.b ? (
                                  <span className="mt-0.5 block truncate text-fine text-graphite-soft">
                                    {entry.b}
                                  </span>
                                ) : null}
                              </span>
                              <span className="mt-1 shrink-0 opacity-0 transition-opacity data-[on=true]:opacity-100" data-on={selected}>
                                <Arrow />
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ));
              })()}
            </div>
          )}
        </div>

        {searching && flat.length > 0 ? (
          <p className="border-t border-paper-line px-5 py-2.5 text-fine text-graphite-soft">
            {flat.length === MAX_RESULTS ? `Top ${MAX_RESULTS} matches` : `${flat.length} ${flat.length === 1 ? "match" : "matches"}`} · ↑ ↓ to move · Enter to open
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Message({ children }: { children: ReactNode }) {
  return <p className="px-3 py-8 text-center text-body text-graphite-soft">{children}</p>;
}

function Arrow() {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="text-lime-deep"
    >
      <path d="M1 5.5h10M7.5 1.5l4 4-4 4" />
    </svg>
  );
}
