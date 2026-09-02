import Link from "next/link";
import { sitePath, type SubSite } from "@/lib/subdomains";

/**
 * Documentation sidebar.
 *
 * Grouped by the `group` each page declares, in first-appearance order, so the
 * navigation order is the content order and cannot drift from it. Rendered as a
 * server component: it has no state beyond "which page am I on", which the
 * route already knows.
 *
 * On a narrow viewport it becomes a collapsed disclosure above the article
 * rather than a drawer. A corpus this size does not need a second overlay on
 * top of the one the header already owns, and a native `details` keeps the
 * whole thing keyboard- and screen-reader-correct for free.
 */
export function SubSiteSidebar({ subsite, current }: { subsite: SubSite; current: string }) {
  const groups: { heading: string; pages: { path: string; label: string }[] }[] = [];

  for (const page of subsite.pages) {
    if (page.path === "") continue;
    const heading = page.group ?? "Pages";
    let group = groups.find((candidate) => candidate.heading === heading);
    if (!group) {
      group = { heading, pages: [] };
      groups.push(group);
    }
    group.pages.push({ path: page.path, label: page.navLabel ?? page.title });
  }

  const tree = (
    <nav aria-label={`${subsite.shortName} contents`}>
      {groups.map((group) => (
        <div key={group.heading} className="mb-8 last:mb-0">
          <p className="eyebrow mb-3">{group.heading}</p>
          <ul className="border-l border-paper-line">
            {group.pages.map((page) => {
              const active = page.path === current;
              return (
                <li key={page.path}>
                  <Link
                    href={sitePath(subsite.key, page.path)}
                    aria-current={active ? "page" : undefined}
                    className={`-ml-px block border-l py-2 pl-4 text-body leading-snug transition-[color,border-color] duration-300 ${
                      active
                        ? // The lime rule marks the current page; the label
                          // stays graphite, because lime-deep on paper is
                          // 2.93:1 and this is body-sized text.
                          "border-lime-deep font-semibold text-graphite"
                        : "border-transparent text-graphite-soft hover:border-paper-line hover:text-graphite"
                    }`}
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-[calc(var(--header-h)+2rem)] max-h-[calc(100vh-var(--header-h)-4rem)] overflow-y-auto pr-2">
          {tree}
        </div>
      </aside>

      <details className="group rule-b rule-t py-1 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 type-title text-h7 [&::-webkit-details-marker]:hidden">
          All {subsite.shortName.toLowerCase()} pages
          <span
            aria-hidden
            className="relative h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
          />
        </summary>
        <div className="pb-6 pt-2">{tree}</div>
      </details>
    </>
  );
}
