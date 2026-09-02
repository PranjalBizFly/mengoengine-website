import type { Depth, EntityKind } from "@/lib/types";
import { link, type LinkRef } from "@/lib/registry";
import { routes } from "@/lib/site";

/**
 * Rendering helpers for the depth layer.
 *
 * `relatedGroups` is the important one. Before the depth layer existed, several
 * templates carried a hand-picked list of three slugs in the JSX — which meant
 * all seventy-three glossary terms, or all seventy-two asset formats, shipped
 * with the same "related" rail. These groups are built from the record's own
 * `depth.related`, so the rail differs per page or does not render at all.
 */

interface GroupSpec {
  key: keyof NonNullable<Depth["related"]>;
  kind: EntityKind;
  heading: string;
  seeAll?: { label: string; href: string };
}

/** Priority order. A page rarely declares more than three of these. */
const GROUPS: GroupSpec[] = [
  { key: "products", kind: "product", heading: "Engines involved", seeAll: { label: "Platform overview", href: routes.platform() } },
  { key: "features", kind: "feature", heading: "Capabilities used", seeAll: { label: "All capabilities", href: routes.features() } },
  { key: "solutions", kind: "solution", heading: "Related situations", seeAll: { label: "All solutions", href: routes.solutions() } },
  { key: "industries", kind: "industry", heading: "Common in", seeAll: { label: "All industries", href: routes.industries() } },
  { key: "useCases", kind: "use-case", heading: "Related jobs", seeAll: { label: "All use cases", href: routes.useCases() } },
  { key: "channels", kind: "channel", heading: "Channels", seeAll: { label: "All channels", href: routes.channels() } },
  { key: "assetTypes", kind: "asset-type", heading: "Formats", seeAll: { label: "Asset library", href: routes.assetTypes() } },
  { key: "comparisons", kind: "comparison", heading: "Compare", seeAll: { label: "All comparisons", href: routes.compare() } },
  { key: "guides", kind: "guide", heading: "Go deeper", seeAll: { label: "All resources", href: routes.resources() } },
  { key: "articles", kind: "article", heading: "Related reading", seeAll: { label: "All articles", href: routes.blog() } },
  { key: "glossary", kind: "glossary", heading: "Terms", seeAll: { label: "Full glossary", href: routes.glossary() } },
];

export interface RailGroup {
  heading: string;
  links: LinkRef[];
  seeAll?: { label: string; href: string };
}

/**
 * Build rail groups from a record's declared cross-references.
 *
 * `limit` caps the number of groups because `RelatedRail` lays out three
 * columns; a fourth group wraps into a lonely row that reads as a mistake.
 */
export function relatedGroups(depth: Depth | undefined, limit = 3): RailGroup[] {
  const related = depth?.related;
  if (!related) return [];
  const out: RailGroup[] = [];
  for (const spec of GROUPS) {
    const slugs = related[spec.key];
    if (!slugs || slugs.length === 0) continue;
    const links = link(spec.kind, slugs);
    if (links.length === 0) continue;
    out.push({ heading: spec.heading, links, seeAll: spec.seeAll });
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Merge template-derived groups with the record's own, keeping the derived
 * ones first and dropping any that would duplicate a heading.
 */
export function mergeGroups(derived: RailGroup[], fromDepth: RailGroup[], limit = 3): RailGroup[] {
  const seen = new Set(derived.filter((g) => g.links.length > 0).map((g) => g.heading));
  const out = derived.filter((g) => g.links.length > 0);
  for (const group of fromDepth) {
    if (seen.has(group.heading)) continue;
    out.push(group);
    seen.add(group.heading);
  }
  return out.slice(0, limit);
}
