import Link from "next/link";
import { DirectoryControls, type DirectoryFacet } from "@/components/sections/DirectoryControls";
import type { DirectoryCategory } from "@/lib/directory";

/**
 * Every page on the site, in one browsable index.
 *
 * A server component: the whole list is in the HTML. The client island above it
 * only narrows what is already there, which is why this page is complete for a
 * crawler and for a reader without JavaScript, and why five hundred entries do
 * not appear twice in the response.
 *
 * Each row carries its own search corpus in `data-keywords`. Putting the
 * haystack on the element rather than in a client-side index is what lets the
 * filter run without the data being shipped a second time — the string is
 * already needed for nothing else, so it costs one attribute per row.
 *
 * Categories can be collapsed, which hides rows from view and from nothing
 * else: the entries stay in the document and stay searchable, and a query
 * re-opens whatever it matches. Collapsing is never allowed to change what the
 * directory contains or what it counts.
 */

const LIST_ID = "page-directory";

export function PageDirectory({
  categories,
  ecosystem,
}: {
  categories: DirectoryCategory[];
  /**
   * Cross-host destinations, rendered after the directory and deliberately
   * outside it — they are neither counted with the site's pages nor filtered
   * with them, because they are not pages of this site.
   */
  ecosystem?: DirectoryCategory;
}) {
  const facets: DirectoryFacet[] = categories.map((category) => ({
    heading: category.heading,
    slug: category.slug,
    count: category.entries.length,
  }));
  const total = categories.reduce((sum, category) => sum + category.entries.length, 0);

  return (
    <div>
      {/* The control bar sticks under the header. At this length a filter that
          scrolls away is a filter you stop using — you have to go back up to
          change your mind, which is exactly when you want it. */}
      <div className="sticky top-(--header-h) z-30 -mx-(--spacing-gutter) mb-14 border-b border-paper-line bg-paper/92 px-(--spacing-gutter) py-5 backdrop-blur-xl md:-mx-10 md:px-10 xl:-mx-14 xl:px-14">
        <DirectoryControls facets={facets} total={total} listId={LIST_ID} />
      </div>

      <div id={LIST_ID} className="grid gap-16">
        {categories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            data-category={category.slug}
            className="scroll-mt-[calc(var(--header-h)+7rem)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 rule-b pb-4">
              <h2 className="text-d4">
                {category.href ? (
                  <Link href={category.href} className="transition-colors hover:text-lime-deep">
                    {category.heading}
                  </Link>
                ) : (
                  category.heading
                )}
              </h2>
              <div className="flex shrink-0 items-baseline gap-3">
                {/* The count is rewritten in place as the filter narrows, so the
                    total it started from has to travel with it. */}
                <p className="eyebrow tnum" data-category-count={category.entries.length}>
                  {category.entries.length} pages
                </p>
                {/* Rendered collapsed-capable but inert until the controls
                    island marks the list filterable — a disclosure button that
                    cannot disclose is worse than no button, so without
                    JavaScript this never appears and every row stays open. */}
                <button
                  type="button"
                  data-toggle={category.slug}
                  aria-expanded="true"
                  aria-controls={`${category.slug}-entries`}
                  className="hidden h-6 w-6 items-center justify-center rounded-full text-graphite-soft transition-colors hover:bg-paper-warm hover:text-lime-deep [[data-filterable=true]_&]:inline-flex [&[aria-expanded=false]_svg]:-rotate-90"
                >
                  <span className="sr-only">Show or hide {category.heading}</span>
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
                    className="transition-transform duration-300 ease-[var(--ease-out-expo)]"
                  >
                    <path d="M2.5 4.25 6 7.75l3.5-3.5" />
                  </svg>
                </button>
              </div>
            </div>

            <ul
              id={`${category.slug}-entries`}
              data-entries
              className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {category.entries.map((entry) => (
                <li key={entry.href} data-entry data-keywords={entry.keywords}>
                  {entry.external ? (
                    <a
                      href={entry.href}
                      rel="noopener"
                      className="group flex items-baseline gap-2 rounded-lg py-1.5 text-body leading-snug text-graphite-soft transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime-deep motion-safe:hover:translate-x-1"
                    >
                      <span className="min-w-0">{entry.label}</span>
                      <svg
                        aria-hidden
                        width="9"
                        height="9"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        className="mt-0.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
                      >
                        <path d="M2.5 7.5 7.5 2.5M3.6 2.5h3.9v3.9" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={entry.href}
                      className="block rounded-lg py-1.5 text-body leading-snug text-graphite-soft transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime-deep motion-safe:hover:translate-x-1"
                    >
                      {entry.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {ecosystem ? (
        <section className="mt-20 rule-t pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="text-d4">{ecosystem.heading}</h2>
            <p className="eyebrow shrink-0">{ecosystem.entries.length} destinations</p>
          </div>
          <p className="mt-4 max-w-[58ch] text-body leading-relaxed text-graphite-soft">
            Twelve destinations on their own hosts, each with its own directory. They are listed
            here but not counted above, because they are not pages of this site.
          </p>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.entries.map((entry) => (
              <li key={entry.href}>
                <a
                  href={entry.href}
                  rel="noopener"
                  className="group flex items-baseline gap-2 rounded-lg py-1.5 text-body leading-snug text-graphite-soft transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime-deep motion-safe:hover:translate-x-1"
                >
                  <span className="min-w-0">{entry.label}</span>
                  <svg
                    aria-hidden
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    className="mt-0.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M2.5 7.5 7.5 2.5M3.6 2.5h3.9v3.9" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
