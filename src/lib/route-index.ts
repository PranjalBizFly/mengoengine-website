import { routes } from "@/lib/site";
import { content, indexableEntities, urlFor } from "@/lib/registry";
import { channels } from "@/data/channels";
import { articleCategories } from "@/data/articles";
import { SECTOR_ORDER, sectorLabel } from "@/lib/nav";

/**
 * The complete route index.
 *
 * Campaign landing pages and the unpublished case-study index are deliberately
 * absent: campaigns are noindex paid destinations, and the case-study hub is
 * noindex until there is a study to list.
 *
 * One function that knows every URL the site publishes, used by both the XML
 * sitemap and the human-readable sitemap page. Generating both from the same
 * source is what stops them drifting apart.
 */

export interface RouteEntry {
  href: string;
  label: string;
  /** ISO date for sitemap lastmod. */
  updated: string;
  /** Relative priority hint for the XML sitemap. */
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}

export interface RouteGroup {
  heading: string;
  href?: string;
  entries: RouteEntry[];
}

/**
 * Hub pages have no `updated` of their own, so they inherit the most recent
 * update among everything on the site. A hardcoded date here would go stale
 * silently and misreport lastmod to crawlers.
 */
const LATEST_UPDATE = [...Object.values(content)]
  .flat()
  .map((e) => e.updated)
  .filter(Boolean)
  .sort()
  .at(-1) as string;

function hub(href: string, label: string, priority = 0.8): RouteEntry {
  return { href, label, updated: LATEST_UPDATE, priority, changeFrequency: "weekly" };
}

export function routeGroups(): RouteGroup[] {
  const entityEntry = (e: (typeof content.products)[number] | { updated: string; title: string; navLabel?: string; kind: string; slug: string }, priority: number): RouteEntry => ({
    href: urlFor(e as never),
    label: (e as { navLabel?: string; title: string }).navLabel ?? e.title,
    updated: e.updated,
    priority,
    changeFrequency: "monthly",
  });

  return [
    {
      heading: "Main",
      entries: [
        { href: routes.home(), label: "Home", updated: LATEST_UPDATE, priority: 1, changeFrequency: "weekly" },
        hub(routes.waitlist(), "Join our waitlist", 0.9),
        hub(routes.contact(), "Contact", 0.7),
        hub(routes.sitemapPage(), "Sitemap", 0.3),
      ],
    },
    {
      heading: "Platform",
      href: routes.platform(),
      entries: [hub(routes.platform(), "Platform overview", 0.9), ...content.products.map((p) => entityEntry(p, 0.9))],
    },
    {
      heading: "Capabilities",
      href: routes.features(),
      entries: [hub(routes.features(), "All capabilities"), ...content.features.map((f) => entityEntry(f, 0.6))],
    },
    {
      heading: "Solutions",
      href: routes.solutions(),
      entries: [hub(routes.solutions(), "All solutions", 0.9), ...content.solutions.map((s) => entityEntry(s, 0.8))],
    },
    {
      heading: "Industries",
      href: routes.industries(),
      entries: [
        hub(routes.industries(), "All industries", 0.9),
        ...SECTOR_ORDER.flatMap((sector) =>
          content.industries.filter((i) => i.sector === sector).map((i) => ({
            ...entityEntry(i, 0.8),
            label: `${i.title} (${sectorLabel(sector)})`,
          })),
        ),
      ],
    },
    {
      heading: "Use cases",
      href: routes.useCases(),
      entries: [hub(routes.useCases(), "All use cases"), ...content.useCases.map((u) => entityEntry(u, 0.7))],
    },
    {
      heading: "Channels",
      href: routes.channels(),
      entries: [hub(routes.channels(), "All channels"), ...content.channels.map((c) => entityEntry(c, 0.7))],
    },
    {
      heading: "Channel guides by industry",
      entries: channels.flatMap((channel) =>
        channel.industries.map((industrySlug) => ({
          href: routes.channelForIndustry(channel.slug, industrySlug),
          label: `${channel.title} for ${content.industries.find((i) => i.slug === industrySlug)?.title ?? industrySlug}`,
          updated: channel.updated,
          priority: 0.6,
          changeFrequency: "monthly" as const,
        })),
      ),
    },
    {
      heading: "Asset library",
      href: routes.assetTypes(),
      entries: [hub(routes.assetTypes(), "All asset formats"), ...content.assetTypes.map((a) => entityEntry(a, 0.5))],
    },
    {
      heading: "Comparisons",
      href: routes.compare(),
      entries: [hub(routes.compare(), "All comparisons"), ...content.comparisons.map((c) => entityEntry(c, 0.7))],
    },
    {
      heading: "Resources",
      href: routes.resources(),
      entries: [hub(routes.resources(), "All resources"), ...content.guides.map((g) => entityEntry(g, 0.7))],
    },
    {
      heading: "Blog",
      href: routes.blog(),
      entries: [
        hub(routes.blog(), "Blog index"),
        ...articleCategories.map((c) => hub(routes.blogCategory(c.slug), `${c.label} (topic)`, 0.6)),
        ...content.articles.map((a) => entityEntry(a, 0.6)),
      ],
    },
    {
      heading: "Glossary",
      href: routes.glossary(),
      entries: [hub(routes.glossary(), "Glossary index", 0.6), ...content.glossary.map((t) => entityEntry(t, 0.4))],
    },
    {
      heading: "FAQ",
      href: routes.faq(),
      entries: [hub(routes.faq(), "Frequently asked questions", 0.7)],
    },
    {
      heading: "Company",
      entries: content.companyPages.map((p) => entityEntry(p, 0.6)),
    },
    {
      heading: "Legal",
      entries: content.legalPages.map((p) => ({ ...entityEntry(p, 0.3), changeFrequency: "yearly" as const })),
    },
  ];
}

/**
 * Routes the site builds but the directory and the XML sitemap deliberately
 * omit, each with its reason.
 *
 * Declared rather than merely absent. The directory is only trustworthy if the
 * difference between "pages Next builds" and "pages the directory lists" is
 * exactly this list — `npm run audit:routes` asserts that, so a page dropped by
 * accident fails the audit instead of quietly shrinking the count.
 */
export interface ExcludedRoute {
  href: string;
  reason: string;
}

export function excludedRoutes(): ExcludedRoute[] {
  return [
    {
      href: routes.caseStudies(),
      reason: "Case-study hub — noindex until there is at least one study to list.",
    },
    {
      href: "/design-system/",
      reason: "Internal design reference — noindex, deliberately absent from both sitemaps.",
    },
    ...content.campaigns.map((campaign) => ({
      href: routes.campaign(campaign.slug),
      reason: "Paid campaign landing page — noindex/nofollow.",
    })),
  ];
}

/** Flat list of every indexable URL, de-duplicated. */
export function allRoutes(): RouteEntry[] {
  const seen = new Set<string>();
  const out: RouteEntry[] = [];
  for (const group of routeGroups()) {
    for (const entry of group.entries) {
      if (seen.has(entry.href)) continue;
      seen.add(entry.href);
      out.push(entry);
    }
  }
  return out;
}

/** Used in copy so the stated page count can never drift from reality. */
export function totalPageCount(): number {
  return allRoutes().length;
}

/** Sanity check surfaced by `npm run check:seo`. */
export function draftCount(): number {
  return indexableEntities().length;
}
