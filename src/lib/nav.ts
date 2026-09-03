import { siteUrl } from "@/lib/subdomains";
import { routes } from "@/lib/site";
import { products } from "@/data/products";
import { features } from "@/data/features";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { channels } from "@/data/channels";
import { guides } from "@/data/guides";
import { articleCategories } from "@/data/articles";
import type { Industry, Solution } from "@/lib/types";

/**
 * Navigation is derived from the content, not hand-maintained.
 *
 * A mega menu for a 500-page site fails in one of two ways: it lists everything
 * and overwhelms, or it is hand-written and goes stale. This builds the menu
 * from the data, and caps each column at a readable length with an explicit
 * "see all" route carrying the rest.
 */

export interface NavLink {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  links: NavLink[];
  seeAll?: NavLink;
}

export interface NavGroup {
  /** Top-level label in the header bar. */
  label: string;
  href: string;
  /** Absent for simple links; present for mega-menu items. */
  columns?: NavColumn[];
  /** Optional promoted panel shown at the end of the mega menu. */
  feature?: { eyebrow: string; title: string; body: string; href: string; cta: string };
}

const SECTOR_LABELS: Record<Industry["sector"], string> = {
  b2b: "B2B & technology",
  services: "Professional services",
  regulated: "Regulated sectors",
  commerce: "Commerce & consumer",
  local: "Local & trades",
  creator: "Creators & studios",
};

export const SECTOR_ORDER: Industry["sector"][] = [
  "b2b",
  "services",
  "regulated",
  "commerce",
  "local",
  "creator",
];

const AXIS_LABELS: Record<Solution["axis"], string> = {
  goal: "By goal",
  team: "By team",
  stage: "By stage",
};

export const AXIS_ORDER: Solution["axis"][] = ["goal", "team", "stage"];

export function sectorLabel(sector: Industry["sector"]): string {
  return SECTOR_LABELS[sector];
}

export function axisLabel(axis: Solution["axis"]): string {
  return AXIS_LABELS[axis];
}

/** Featured feature slugs, chosen to represent each engine in the menu. */
const MENU_FEATURES = [
  "annual-calendar",
  "voice-profile",
  "asset-library",
  "sequence-builder",
  "objection-mapping",
  "metric-selection",
];

export const primaryNav: NavGroup[] = [
  {
    label: "Platform",
    href: routes.platform(),
    columns: [
      {
        heading: "The five engines",
        headingHref: routes.platform(),
        links: products.map((p) => ({
          label: p.title,
          href: routes.product(p.slug),
          blurb: p.tagline,
        })),
      },
      {
        heading: "Popular capabilities",
        headingHref: routes.features(),
        links: MENU_FEATURES.map((slug) => {
          const f = features.find((x) => x.slug === slug)!;
          return { label: f.title, href: routes.feature(f.slug), blurb: f.short };
        }),
        seeAll: { label: `All ${features.length} capabilities`, href: routes.features() },
      },
      {
        heading: "Work with what you have",
        links: [
          { label: "Channels", href: routes.channels(), blurb: "How Mengo plans each platform" },
          { label: "Asset library", href: routes.assetTypes(), blurb: "Every format, with its anatomy" },
          { label: "Compare approaches", href: routes.compare(), blurb: "Agency, hire, tool or nothing" },
          { label: "Responsible AI", href: routes.company("responsible-ai"), blurb: "What the system will not claim" },
        ],
      },
    ],
    feature: {
      eyebrow: "Start here",
      title: "How Mengo works",
      body: "A guided questionnaire, then a strategy layer, a year of calendar, the assets and the follow-up.",
      href: routes.company("how-it-works"),
      cta: "See the five steps",
    },
  },
  {
    label: "Solutions",
    href: routes.solutions(),
    columns: AXIS_ORDER.map((axis) => ({
      heading: AXIS_LABELS[axis],
      headingHref: `${routes.solutions()}#${axis}`,
      links: solutions
        .filter((s) => s.axis === axis)
        .slice(0, 8)
        .map((s) => ({ label: s.title, href: routes.solution(s.slug) })),
    })),
    feature: {
      eyebrow: "Most common",
      title: "Marketing keeps stopping when you get busy",
      body: "The systems fix for the pattern almost every small business runs into.",
      href: routes.solution("build-a-marketing-system"),
      cta: "Build a marketing system",
    },
  },
  {
    label: "Industries",
    href: routes.industries(),
    columns: chunkSectors(),
    feature: {
      eyebrow: "Why industry matters",
      title: "Buying cycles change the whole plan",
      body: "Channel ranking, nurture cadence and content formats are all derived from how your market actually buys.",
      href: routes.industries(),
      cta: "Browse all industries",
    },
  },
  {
    label: "Resources",
    href: routes.resources(),
    columns: [
      {
        heading: "Playbooks & frameworks",
        headingHref: routes.resources(),
        links: guides.slice(0, 6).map((g) => ({ label: g.title, href: routes.guide(g.slug) })),
        seeAll: { label: `All ${guides.length} resources`, href: routes.resources() },
      },
      {
        heading: "Writing",
        headingHref: routes.blog(),
        links: articleCategories.map((c) => ({
          label: c.label,
          href: routes.blogCategory(c.slug),
          blurb: c.blurb,
        })),
      },
      {
        heading: "Reference",
        links: [
          { label: "Marketing glossary", href: routes.glossary(), blurb: "Plain definitions, no jargon defence" },
          { label: "FAQ", href: routes.faq(), blurb: "Every question, answered in context" },
          { label: "Use cases", href: routes.useCases(), blurb: "One job, start to finish" },
          { label: "Channel guides", href: routes.channels(), blurb: "Mechanics that decide what works" },
          {
            label: "Explore all pages",
            href: routes.sitemapPage(),
            blurb: "Every page on the site, searchable",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: routes.company("about"),
    columns: [
      {
        heading: "About Mengo",
        links: [
          { label: "About", href: routes.company("about") },
          { label: "How it works", href: routes.company("how-it-works") },
          { label: "Who it is for", href: routes.company("who-its-for") },
          { label: "The founder", href: routes.company("founder") },
          { label: "Responsible AI", href: routes.company("responsible-ai") },
          { label: "Invest in Mengo", href: routes.invest() },
        ],
      },
      {
        heading: "Talk to us",
        links: [
          { label: "Contact", href: routes.contact(), blurb: "Questions, partnerships, press" },
          { label: "Join our waitlist", href: routes.waitlist(), blurb: "Early access as it opens" },
        ],
      },
    ],
  },
];

function chunkSectors(): NavColumn[] {
  const bySector = new Map<Industry["sector"], typeof industries>();
  for (const industry of industries) {
    const bucket = bySector.get(industry.sector);
    if (bucket) bucket.push(industry);
    else bySector.set(industry.sector, [industry]);
  }
  // Three columns, two sectors each, so the menu stays two rows deep at 1280px.
  const pairs: Industry["sector"][][] = [
    ["b2b", "services"],
    ["regulated", "commerce"],
    ["local", "creator"],
  ];
  return pairs.map(([a, b]) => ({
    heading: `${SECTOR_LABELS[a]} & ${SECTOR_LABELS[b].toLowerCase()}`,
    links: [...(bySector.get(a) ?? []), ...(bySector.get(b) ?? [])]
      .slice(0, 9)
      .map((i) => ({ label: i.title, href: routes.industry(i.slug) })),
  }));
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: routes.platform() },
      ...products.map((p) => ({ label: p.title, href: routes.product(p.slug) })),
      { label: "All capabilities", href: routes.features() },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "All solutions", href: routes.solutions() },
      ...solutions.filter((s) => s.axis === "goal").slice(0, 6).map((s) => ({ label: s.title, href: routes.solution(s.slug) })),
      { label: "For solo founders", href: routes.solution("solo-founders") },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "All industries", href: routes.industries() },
      ...["saas", "professional-services", "ecommerce", "home-services", "healthcare", "real-estate"].map((slug) => {
        const i = industries.find((x) => x.slug === slug)!;
        return { label: i.title, href: routes.industry(i.slug) };
      }),
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Playbooks & frameworks", href: routes.resources() },
      { label: "Blog", href: routes.blog() },
      { label: "Marketing glossary", href: routes.glossary() },
      { label: "FAQ", href: routes.faq() },
      { label: "Channel guides", href: routes.channels() },
      { label: "Asset library", href: routes.assetTypes() },
      { label: "Use cases", href: routes.useCases() },
      { label: "Comparisons", href: routes.compare() },
      { label: "Explore all pages", href: routes.sitemapPage() },
    ],
  },
  {
    /**
     * "About" and "Invest in Mengo" are deliberately absent.
     *
     * Both have a dedicated host in the ecosystem — about. and investors. —
     * and the footer's rule is one destination, one location. Listing them
     * here as well made the same two things appear twice within a screen of
     * each other, once as a page and once as a subdomain, which reads as a
     * mistake rather than as emphasis. The pages themselves are untouched and
     * still reachable from the company pages, the sitemap and search.
     */
    heading: "Company",
    links: [
      { label: "How it works", href: routes.company("how-it-works") },
      { label: "Who it is for", href: routes.company("who-its-for") },
      { label: "The founder", href: routes.company("founder") },
      { label: "Responsible AI", href: routes.company("responsible-ai") },
      { label: "Contact", href: routes.contact() },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy", href: routes.legal("privacy-policy") },
  { label: "Terms", href: routes.legal("terms-of-service") },
  { label: "Cookies", href: routes.legal("cookie-policy") },
  { label: "Acceptable use", href: routes.legal("acceptable-use") },
  { label: "Sitemap", href: routes.sitemapPage() },
];

/* ------------------------------------------------------------------ */
/* The subdomain ecosystem                                             */
/*                                                                     */
/* Twelve destinations that are not pages on this site: support, docs,  */
/* status, careers and the rest each live on their own host. They are   */
/* grouped by who the reader is rather than by what the destination is  */
/* called, because a visitor looking for help does not know whether the */
/* answer is in "support" or "docs" — they know they are a customer.    */
/*                                                                     */
/* Hrefs are built from the ecosystem's own URL helper so the apex is   */
/* configurable rather than hard-coded here.                            */
/* ------------------------------------------------------------------ */

export interface EcosystemColumn {
  heading: string;
  links: NavLink[];
}

export const ecosystemColumns: EcosystemColumn[] = [
  {
    heading: "Customer",
    links: [{ label: "Support", href: siteUrl("support") }],
  },
  {
    heading: "Business",
    links: [
      { label: "Partners", href: siteUrl("partners") },
      { label: "Vendors", href: siteUrl("vendors") },
      { label: "Affiliates", href: siteUrl("affiliates") },
    ],
  },
  {
    heading: "Technical",
    links: [
      { label: "Developers", href: siteUrl("developers") },
      { label: "Documentation", href: siteUrl("docs") },
      { label: "Status", href: siteUrl("status") },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Careers", href: siteUrl("careers") },
      { label: "About", href: siteUrl("about") },
      { label: "Investors", href: siteUrl("investors") },
      { label: "Media", href: siteUrl("media") },
      { label: "Sustainability", href: siteUrl("sustainability") },
    ],
  },
];
