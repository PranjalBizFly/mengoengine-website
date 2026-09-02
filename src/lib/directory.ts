import { routeGroups } from "@/lib/route-index";
import { allSubsites } from "@/data/subdomains";
import { siteUrl } from "@/lib/subdomains";

/**
 * The page directory model.
 *
 * Built entirely from `routeGroups()` — the same index that generates the XML
 * sitemap — so the directory cannot list a page that does not exist, cannot
 * miss one that does, and updates itself when content is added. Nothing here
 * enumerates pages by hand.
 *
 * Two things are added on top of the route index, both for search:
 *
 *  - a lowercased haystack per entry, so a query matches the page title, the
 *    category it sits in, and the words in its own URL. "b2b" finds the
 *    channel-by-industry pages even though no title contains it, because the
 *    slug does.
 *  - a stable anchor slug per category.
 */

export interface DirectoryEntry {
  href: string;
  label: string;
  /** Lowercased corpus: label + category + the words in the URL. */
  keywords: string;
  /** Set when the destination is on another host in the ecosystem. */
  external?: boolean;
}

export interface DirectoryCategory {
  heading: string;
  /** Anchor and filter identity. */
  slug: string;
  /** The category's own hub page, where it has one. */
  href?: string;
  entries: DirectoryEntry[];
}

/** Anchor-safe identity for a category heading. */
export function categorySlug(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Words a reader might type that are in the URL but not in the title.
 *
 * A page called "LinkedIn for B2B Services" carries both already, but plenty do
 * not: the glossary term "CAC" lives at `/glossary/customer-acquisition-cost/`,
 * and somebody searching for the long form should find it.
 */
function urlWords(href: string): string {
  return href.replace(/[/-]+/g, " ").trim();
}

export function pageDirectory(): DirectoryCategory[] {
  return routeGroups().map((group) => ({
    heading: group.heading,
    slug: categorySlug(group.heading),
    href: group.href,
    entries: group.entries.map((entry) => ({
      href: entry.href,
      label: entry.label,
      keywords: `${entry.label} ${group.heading} ${urlWords(entry.href)}`.toLowerCase(),
    })),
  }));
}

/**
 * The twelve ecosystem destinations, as one closing category.
 *
 * Their pages are not listed individually here. Each runs on its own host with
 * its own directory and its own sitemap, and folding a hundred and thirty-six
 * cross-host URLs into this page would make the counts on it mean two different
 * things at once. What belongs here is the door to each one, with its size.
 */
export function ecosystemCategory(): DirectoryCategory {
  return {
    heading: "Elsewhere in the ecosystem",
    slug: "ecosystem",
    entries: allSubsites.map((subsite) => ({
      href: siteUrl(subsite.key),
      label: `${subsite.shortName} — ${subsite.pages.length} pages`,
      keywords: `${subsite.name} ${subsite.shortName} ${subsite.tagline} ${subsite.description}`.toLowerCase(),
      external: true,
    })),
  };
}

/**
 * Total pages in the directory.
 *
 * Counts the site's own categories only. The ecosystem band is rendered beside
 * them but never counted with them: those are twelve destinations on other
 * hosts, and folding them into the total made this page state two different
 * page counts within a screen of each other.
 */
export function directoryPageCount(): number {
  return pageDirectory().reduce((total, category) => total + category.entries.length, 0);
}
