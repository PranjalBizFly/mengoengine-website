import type { Metadata } from "next";
import { absolute, site } from "@/lib/site";
import type { Entity } from "@/lib/types";
import { urlFor } from "@/lib/registry";

/**
 * The site's single metadata builder.
 *
 * Every page — entity-driven or hand-built — goes through `pageMetadata`, which
 * guarantees a canonical, an Open Graph record and a unique title/description
 * pair. Entities may override the derived values via `seoTitle`/`seoDescription`.
 */

const TITLE_SUFFIX = ` | ${site.name}`;
const MAX_DESCRIPTION = 165;

export interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Defaults to "website"; long-form pages pass "article". */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
  /** Small label printed above the title on the generated OG image. */
  ogKicker?: string;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const title = withSuffix(input.title);
  const description = clamp(input.description);
  const url = absolute(input.path);
  const image = absolute(ogImagePath(input.title, input.ogKicker));

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: input.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      type: input.type ?? "website",
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
      ...(input.section ? { section: input.section } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
      title,
      description,
      images: [image],
    },
  };
}

/** Metadata for any content entity. Derives from the entity when SEO fields are absent. */
export function entityMetadata(
  e: Entity,
  opts: { type?: "website" | "article"; section?: string } = {},
): Metadata {
  return pageMetadata({
    title: e.seoTitle ? stripSuffix(e.seoTitle) : derivedTitle(e),
    description: e.seoDescription ?? derivedDescription(e),
    path: urlFor(e),
    type: opts.type,
    section: opts.section,
    ogKicker: opts.section ?? kindLabel(e),
    modifiedTime: e.updated,
    ...(e.kind === "article" ? { publishedTime: e.published } : {}),
    noindex: e.status === "draft",
  });
}

/**
 * Derived titles are kind-aware so that, for example, every feature page reads
 * as a feature rather than as a bare noun. This is what keeps 500 titles unique
 * and descriptive without hand-writing 500 strings.
 */
function derivedTitle(e: Entity): string {
  switch (e.kind) {
    case "feature":
      return `${e.title} — ${e.short}`;
    case "industry":
      return `Marketing for ${e.title}`;
    case "solution":
      return e.title;
    case "use-case":
      return `${e.title} with AI`;
    case "channel":
      return `${e.title} Marketing, planned and written`;
    case "asset-type":
      return `${e.title} — format, anatomy and spec`;
    case "comparison":
      return e.title;
    case "guide":
      return e.title;
    case "article":
      return e.title;
    case "glossary":
      return `${e.title} — definition and why it matters`;
    default:
      return e.title;
  }
}

function derivedDescription(e: Entity): string {
  return clamp(e.summary);
}

function withSuffix(title: string): string {
  return title.endsWith(site.name) || title.includes(TITLE_SUFFIX) ? title : `${title}${TITLE_SUFFIX}`;
}

function stripSuffix(title: string): string {
  return title.endsWith(TITLE_SUFFIX) ? title.slice(0, -TITLE_SUFFIX.length) : title;
}

function clamp(text: string): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= MAX_DESCRIPTION) return flat;
  const cut = flat.slice(0, MAX_DESCRIPTION);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : MAX_DESCRIPTION).trimEnd()}…`;
}

/**
 * Open Graph images are rendered on demand by `/api/og`. Query parameters are
 * fine here: the image URL is never an indexable page, and this gives every one
 * of the site's pages a distinct social card without 500 image files.
 */
function ogImagePath(title: string, kicker?: string): string {
  const params = new URLSearchParams({ t: title });
  if (kicker) params.set("k", kicker);
  return `/api/og?${params.toString()}`;
}

const KIND_LABELS: Record<Entity["kind"], string> = {
  product: "Platform",
  feature: "Feature",
  solution: "Solution",
  industry: "Industry",
  "use-case": "Use case",
  channel: "Channel",
  "asset-type": "Asset format",
  comparison: "Comparison",
  guide: "Resource",
  article: "Article",
  glossary: "Glossary",
  company: "Company",
  legal: "Legal",
};

export function kindLabel(e: Entity): string {
  return KIND_LABELS[e.kind];
}
