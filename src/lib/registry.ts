import { routes } from "@/lib/site";
import type { Entity, EntityKind, Slug } from "@/lib/types";

import { products, productBySlug } from "@/data/products";
import { features, featureBySlug } from "@/data/features";
import { solutions, solutionBySlug } from "@/data/solutions";
import { industries, industryBySlug } from "@/data/industries";
import { useCases, useCaseBySlug } from "@/data/use-cases";
import { channels, channelBySlug } from "@/data/channels";
import { assetTypes, assetTypeBySlug } from "@/data/asset-types";
import { comparisons, comparisonBySlug } from "@/data/comparisons";
import { glossary, glossaryBySlug } from "@/data/glossary";
import { guides, guideBySlug } from "@/data/guides";
import { articles, articleBySlug } from "@/data/articles";
import { companyPages, legalPages } from "@/data/company";
import { caseStudies, caseStudyBySlug } from "@/data/case-studies";
import { campaigns, campaignBySlug } from "@/data/campaigns";

/**
 * One place that knows every entity, its URL and its human label.
 *
 * Templates and navigation resolve cross-references through `link()` rather
 * than constructing paths, so a change to the URL architecture is a single edit.
 */

export const content = {
  products,
  features,
  solutions,
  industries,
  useCases,
  channels,
  assetTypes,
  comparisons,
  glossary,
  guides,
  articles,
  caseStudies,
  campaigns,
  companyPages,
  legalPages,
};

const urlByKind: Record<EntityKind, (slug: Slug) => string> = {
  product: routes.product,
  feature: routes.feature,
  solution: routes.solution,
  industry: routes.industry,
  "use-case": routes.useCase,
  channel: routes.channel,
  "asset-type": routes.assetType,
  comparison: routes.comparison,
  guide: routes.guide,
  article: routes.article,
  glossary: routes.glossaryTerm,
  "case-study": routes.caseStudy,
  campaign: routes.campaign,
  company: routes.company,
  legal: routes.legal,
};

const registry = new Map<string, Entity>();
function register(list: Entity[]) {
  for (const e of list) registry.set(`${e.kind}:${e.slug}`, e);
}
register(products);
register(features);
register(solutions);
register(industries);
register(useCases);
register(channels);
register(assetTypes);
register(comparisons);
register(glossary);
register(caseStudies);
register(campaigns);
register(guides);
register(articles);
register(companyPages);
register(legalPages);

export function urlFor(entity: Entity): string {
  return urlByKind[entity.kind](entity.slug);
}

export function entity(kind: EntityKind, slug: Slug): Entity | undefined {
  return registry.get(`${kind}:${slug}`);
}

export interface LinkRef {
  href: string;
  label: string;
  blurb: string;
  kind: EntityKind;
}

/**
 * Resolve a list of slugs of one kind into renderable links.
 *
 * Unknown slugs are dropped rather than throwing, so a typo removes a link
 * silently at runtime. `npm run validate` is what catches that: it checks every
 * slug reference in the data against the registry and fails the build on a
 * reference that points at nothing.
 */
export function link(kind: EntityKind, slugs: Slug[] | undefined): LinkRef[] {
  if (!slugs) return [];
  const out: LinkRef[] = [];
  for (const slug of slugs) {
    const e = registry.get(`${kind}:${slug}`);
    if (!e) continue;
    out.push({
      href: urlFor(e),
      label: e.navLabel ?? e.title,
      blurb: shortBlurb(e),
      kind: e.kind,
    });
  }
  return out;
}

/** A one-line description suitable for a dense list or a mega-menu row. */
export function shortBlurb(e: Entity): string {
  switch (e.kind) {
    case "product":
      return e.tagline;
    case "feature":
      return e.short;
    case "channel":
      return e.cadence;
    case "asset-type":
      return e.spec;
    case "glossary":
      return e.definition;
    case "comparison":
      return `Compared with ${e.against}`;
    case "case-study":
      return e.situation;
    case "campaign":
      return e.audience;
    default:
      return firstSentence(e.summary);
  }
}

export function firstSentence(text: string): string {
  const match = text.match(/^.*?[.?!](?=\s|$)/);
  return (match ? match[0] : text).trim();
}

/** Every entity that should appear in the sitemap, with its lastmod. */
export function indexableEntities(): Entity[] {
  return [...registry.values()].filter((e) => e.status !== "draft");
}

export const dictionaries = {
  productBySlug,
  featureBySlug,
  solutionBySlug,
  industryBySlug,
  useCaseBySlug,
  channelBySlug,
  assetTypeBySlug,
  comparisonBySlug,
  glossaryBySlug,
  guideBySlug,
  articleBySlug,
  caseStudyBySlug,
  campaignBySlug,
};

/* ------------------------------------------------------------------ */
/* Reverse indexes — built once, used by templates for "related" rails */
/* ------------------------------------------------------------------ */

/** Industries that reference a given solution or use case. */
export const industriesBySolution = buildReverse(industries, (i) => i.solutions);
export const industriesByUseCase = buildReverse(industries, (i) => i.useCases);

/** Solutions that reference a given industry. */
export const solutionsByIndustry = buildReverse(solutions, (s) => s.related.industries);
export const useCasesByIndustry = buildReverse(useCases, (u) => u.industries);
export const useCasesByFeature = buildReverse(useCases, (u) => u.features);
export const solutionsByFeature = buildReverse(solutions, (s) => s.features);
export const solutionsByProduct = buildReverse(solutions, (s) => s.products);
export const useCasesByProduct = buildReverse(useCases, (u) => u.products);

function buildReverse<T extends { slug: Slug }>(
  list: T[],
  pick: (item: T) => Slug[],
): Map<Slug, T[]> {
  const map = new Map<Slug, T[]>();
  for (const item of list) {
    for (const key of pick(item)) {
      const bucket = map.get(key);
      if (bucket) bucket.push(item);
      else map.set(key, [item]);
    }
  }
  return map;
}

/** Take at most `n` items, deterministically (no randomness — output must be stable). */
export function take<T>(list: T[] | undefined, n: number): T[] {
  return (list ?? []).slice(0, n);
}
