"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { FooterColumn } from "@/lib/nav";

/**
 * The footer's primary navigation.
 *
 * Forty links across five columns is the right density for a five-hundred-page
 * site on a wide screen and the wrong one on a phone, where it becomes a
 * thousand pixels of list under every page. So the columns are a grid from the
 * small breakpoint up and an accordion below it — the same markup either way,
 * with the disclosure state ignored once there is room to show everything.
 *
 * The lists are always in the document. Collapsing hides them from view; it
 * never removes a link from the page, from a crawler, or from the accessibility
 * tree beyond the standard `aria-expanded` contract. Server and client both
 * render the collapsed state, so there is no hydration mismatch and no flash of
 * an open accordion on first paint.
 */
export function FooterColumns({ columns }: { columns: FooterColumn[] }) {
  return (
    <nav
      aria-label="Footer"
      className="grid gap-x-8 md:grid-cols-3 md:gap-y-10 xl:grid-cols-5"
      data-reveal-stagger
    >
      {columns.map((column) => (
        <FooterGroup key={column.heading} column={column} />
      ))}
    </nav>
  );
}

function FooterGroup({ column }: { column: FooterColumn }) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div data-reveal className="border-b border-sage/12 md:border-0">
      {/* A heading that is also the control below `md`, and only a heading
          above it — pointer events are dropped rather than the button being
          swapped for a `<p>`, so the two layouts stay one piece of markup.
          The switch is at `md` rather than `sm` because two columns of
          nine-link lists is taller than the accordion it replaces. */}
      <h2>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={listId}
          className="eyebrow flex w-full items-center justify-between gap-4 py-4 text-left text-sage transition-colors hover:text-lime md:pointer-events-none md:py-0 md:pb-5 md:hover:text-sage"
        >
          {column.heading}
          <svg
            aria-hidden
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 transition-transform duration-300 ease-[var(--ease-out-expo)] md:hidden ${
              open ? "" : "-rotate-90"
            }`}
          >
            <path d="M2.5 4.25 6 7.75l3.5-3.5" />
          </svg>
        </button>
      </h2>

      <ul
        id={listId}
        className={`footer-links space-y-3 pb-5 md:block md:pb-0 ${open ? "block" : "hidden"}`}
      >
        {column.links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-block text-small leading-snug text-sage transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime motion-safe:hover:translate-x-0.5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
