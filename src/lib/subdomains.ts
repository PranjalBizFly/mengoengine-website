/**
 * The subdomain ecosystem: model, registry and URL architecture.
 *
 * Twelve destinations sit alongside the main site — support, partners, vendors,
 * affiliates, developers, docs, status, careers, about, investors, media and
 * sustainability. They are separate destinations with their own information
 * architecture, navigation and visual register, and they share this repository's
 * brand system rather than re-implementing it.
 *
 * They are not twelve codebases. One application answers for every host: the
 * middleware reads the `Host` header, resolves it to a site key and rewrites
 * into `/s/<key>/…`, which is where these pages live. That keeps a single
 * deployment, a single design system and a single set of accessibility and SEO
 * primitives, while letting each site declare its own pages, navigation and
 * page compositions.
 *
 * The main site is untouched by all of this. Nothing here renders on the apex.
 */

import type { Bullet, Faq, Step } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Domain configuration                                                */
/* ------------------------------------------------------------------ */

/**
 * The apex the ecosystem hangs from.
 *
 * Deliberately an environment variable rather than a constant. The production
 * apex is a deployment decision, and hard-coding one here would mean a code
 * change to move the ecosystem — and would silently emit canonicals for the
 * wrong host on any preview or staging deployment. The fallback is the value
 * already declared in `site.ts`, so a checkout with no environment set behaves
 * exactly as the repository always has.
 */
export const MAIN_DOMAIN =
  process.env.NEXT_PUBLIC_MAIN_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/$/, "") ||
  "mengoengine.com";

/** Internal path prefix the middleware rewrites a subdomain request into. */
export const SITE_PREFIX = "/s";

export type SiteKey =
  | "support"
  | "partners"
  | "vendors"
  | "affiliates"
  | "developers"
  | "docs"
  | "status"
  | "careers"
  | "about"
  | "investors"
  | "media"
  | "sustainability";

/* ------------------------------------------------------------------ */
/* Page composition                                                    */
/*                                                                     */
/* A page is a hero plus an ordered list of blocks. The block is a      */
/* discriminated union rather than a free-form rich text field, because */
/* twelve sites sharing one renderer is what stops the ecosystem        */
/* becoming twelve variations on the same landing page — and because a  */
/* typed block cannot silently become an unstyled div.                  */
/* ------------------------------------------------------------------ */

export interface SiteLink {
  label: string;
  href: string;
  blurb?: string;
  /** Set when the destination is on another host in the ecosystem. */
  external?: boolean;
}

export type SiteBlock =
  /** Continuous explanation. The workhorse. */
  | { type: "prose"; heading?: string; intro?: string; body: string[] }
  /** Heading-beside-prose. For a page that argues rather than lists. */
  | { type: "editorial"; heading?: string; intro?: string; sections: { heading: string; body: string }[] }
  /** Label + explanation, as the ruled index the design system already owns. */
  | { type: "definitions"; heading?: string; intro?: string; items: Bullet[]; columns?: 1 | 2 }
  /** An ordered process. Rendered on the numbered rail. */
  | { type: "steps"; heading?: string; intro?: string; steps: Step[] }
  /** A flat enumeration where order does not carry meaning. */
  | { type: "checklist"; heading?: string; intro?: string; items: string[] }
  /** Genuinely tabular material — comparisons, requirements, matrices. */
  | { type: "table"; heading?: string; intro?: string; columns: string[]; rows: string[][]; caption?: string }
  /** Native disclosure list. */
  | { type: "faq"; heading?: string; intro?: string; items: Faq[] }
  /** Dated or sequenced entries: a changelog, a process with elapsed time. */
  | { type: "timeline"; heading?: string; intro?: string; entries: { when: string; title: string; body: string }[] }
  /** A list of destinations. The primary navigation device on hub pages. */
  | { type: "index"; heading?: string; intro?: string; links: SiteLink[] }
  /** A pull statement. One per page at most. */
  | { type: "statement"; text: string; attribution?: string }
  /** A bordered aside carrying one instruction or one warning. */
  | { type: "callout"; heading: string; body: string; action?: SiteLink }
  /** The operational board on the status site. */
  | { type: "statusBoard"; heading?: string; intro?: string; services: { name: string; blurb: string }[] }
  /**
   * An empty state that is honest about being empty.
   *
   * Used where the destination is real but the content behind it is not ours to
   * write: commission rates, financial statements, incident history, open
   * roles, certifications. Inventing any of it would be worse than an empty
   * section, and a section that merely goes missing tells a reader nothing. So
   * the region renders, says plainly what belongs there and who has to supply
   * it, and gives the reader somewhere to go in the meantime.
   */
  | { type: "pending"; heading: string; body: string; needs: string[]; action?: SiteLink };

/** How the page opens. Chosen per page, not per site. */
export type SiteHero =
  /** Wide statement over the site's ground. For a site or section front page. */
  | { kind: "editorial"; eyebrow?: string; title: string; lead: string; actions?: SiteLink[]; facts?: { label: string; value: string }[] }
  /** Compact opening for an inner article. */
  | { kind: "document"; eyebrow?: string; title: string; lead: string }
  /** A search field is the first thing on the page. */
  | { kind: "search"; eyebrow?: string; title: string; lead: string; placeholder: string }
  /** The operational summary strip. */
  | { kind: "board"; eyebrow?: string; title: string; lead: string }
  /** Title beside a fact column. For corporate and reference pages. */
  | { kind: "split"; eyebrow?: string; title: string; lead: string; facts: { label: string; value: string }[] };

export interface SitePage {
  /** Path within the site. "" is the site's front page. */
  path: string;
  title: string;
  navLabel?: string;
  /** <title>. Every page in the ecosystem carries its own. */
  seoTitle: string;
  /** Meta description, unique per page. */
  seoDescription: string;
  hero: SiteHero;
  blocks: SiteBlock[];
  /** Grouping for the documentation-style sidebar. */
  group?: string;
  /** Contextual links, rendered as the closing rail. */
  related?: { heading: string; links: SiteLink[] }[];
  updated?: string;
}

/**
 * The visual register a site works in.
 *
 * Every site uses the same palette, type scale and spacing; the register
 * decides the default ground, how dense the composition runs and which
 * treatment the chrome takes. A support centre that looks like an investor
 * deck is a worse support centre.
 */
export type SiteRegister =
  /** Clarity first: light ground, search-led, wide gutters. */
  | "utility"
  /** Precise and dense: mono accents, sidebar navigation, tight rhythm. */
  | "technical"
  /** Human and editorial: photography, long measure, statements. */
  | "editorial"
  /** Structured and formal: fact columns, tables, restrained motion. */
  | "corporate"
  /** Calm and legible at a glance: board layout, minimal ornament. */
  | "operational"
  /** Commercial: process-led, application flows, clear qualification. */
  | "commercial";

export interface SubSite {
  key: SiteKey;
  /** Human name used in <title> and in structured data, e.g. "Mengo Support". */
  name: string;
  /** The name beside the lockup in the header, e.g. "Support". */
  shortName: string;
  /** One line under the wordmark in the site header. */
  tagline: string;
  /** Site-level meta description fallback. */
  description: string;
  register: SiteRegister;
  /** This site's own primary navigation. Never shared between sites. */
  nav: { label: string; path: string }[];
  /** Whether inner pages render the documentation sidebar. */
  sidebar?: boolean;
  pages: SitePage[];
}

/* ------------------------------------------------------------------ */
/* URL architecture                                                    */
/* ------------------------------------------------------------------ */

/** Absolute URL of a site's front page, e.g. https://docs.example.com/ */
export function siteOrigin(key: SiteKey): string {
  return `https://${key}.${MAIN_DOMAIN}`;
}

/** Absolute URL of a page within a site. `path` is the in-site path. */
export function siteUrl(key: SiteKey, path = ""): string {
  const clean = path.replace(/^\/|\/$/g, "");
  return clean ? `${siteOrigin(key)}/${clean}/` : `${siteOrigin(key)}/`;
}

/** Absolute URL on the main site. */
export function mainUrl(path = "/"): string {
  return `https://${MAIN_DOMAIN}${path}`;
}

/**
 * The href used inside a site's own pages.
 *
 * Rendered as the internal rewrite path so that in-site navigation is a client
 * transition rather than a full document load to the same host. The middleware
 * makes `/s/docs/api/` and `docs.example.com/api/` the same page; links within
 * docs use the second form only when they leave for another site.
 */
export function sitePath(key: SiteKey, path = ""): string {
  const clean = path.replace(/^\/|\/$/g, "");
  return clean ? `${SITE_PREFIX}/${key}/${clean}/` : `${SITE_PREFIX}/${key}/`;
}

/** Every host label the ecosystem answers for. */
export const SITE_KEYS: SiteKey[] = [
  "support",
  "partners",
  "vendors",
  "affiliates",
  "developers",
  "docs",
  "status",
  "careers",
  "about",
  "investors",
  "media",
  "sustainability",
];

/**
 * Resolve a `Host` header to a site key.
 *
 * Handles the production form (`docs.example.com`), the local development form
 * (`docs.localhost:4311`, which browsers resolve without any hosts-file entry)
 * and preview deployments where the apex differs from the configured one — a
 * preview host still ends in something, and the leading label is what identifies
 * the site. Returns null for the apex and for anything unrecognised, which is
 * what leaves the main site untouched.
 */
export function siteFromHost(host: string | null | undefined): SiteKey | null {
  if (!host) return null;
  const label = host.split(":")[0].toLowerCase().split(".")[0];
  return (SITE_KEYS as string[]).includes(label) ? (label as SiteKey) : null;
}
