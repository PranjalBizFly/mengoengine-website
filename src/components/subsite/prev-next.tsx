import { PrevNext } from "@/components/layout/PrevNext";
import { sitePath, type SitePage, type SubSite } from "@/lib/subdomains";

/**
 * Sequential navigation through a site's pages.
 *
 * The order is the order the content file declares, which is also the order the
 * sidebar renders — so "next" means the next page in the documentation, not the
 * next one alphabetically. Suppressed on a site's front page, where the reader
 * has not entered the sequence yet, and on any site with fewer than three inner
 * pages, where a previous/next bar is longer than the thing it navigates.
 */
export function SubSitePrevNext({ subsite, page }: { subsite: SubSite; page: SitePage }) {
  if (page.path === "") return null;

  const ordered = subsite.pages.filter((candidate) => candidate.path !== "");
  if (ordered.length < 3) return null;

  const index = ordered.findIndex((candidate) => candidate.path === page.path);
  if (index === -1) return null;

  const previous = ordered[index - 1];
  const next = ordered[index + 1];
  if (!previous && !next) return null;

  return (
    <PrevNext
      within={subsite.shortName}
      tone="paper"
      {...(previous
        ? {
            previous: {
              label: previous.navLabel ?? previous.title,
              href: sitePath(subsite.key, previous.path),
            },
          }
        : {})}
      {...(next
        ? { next: { label: next.navLabel ?? next.title, href: sitePath(subsite.key, next.path) } }
        : {})}
    />
  );
}
