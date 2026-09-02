/**
 * Search index generator.
 *
 * Writes public/search-index.json — every published URL on the site with the
 * label, kind and one-line blurb the search panel renders. Generated at
 * prebuild from the same route index the sitemap uses, so a new page appears
 * in search without anyone remembering to add it, and a removed page cannot
 * linger as a dead result.
 *
 * The payload is fetched lazily on the first search open rather than bundled,
 * which keeps it off the critical path of all 500 pages.
 *
 * Run with: npm run search:index
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

register("./ts-loader.mjs", pathToFileURL("./scripts/"));

const { indexableEntities, urlFor, shortBlurb } = await import("../src/lib/registry.ts");
const { allRoutes, routeGroups } = await import("../src/lib/route-index.ts");

/**
 * Display label per entity kind. These are the words the site already uses for
 * each page type in its breadcrumbs and eyebrows — "Capability", not "Feature".
 */
const KIND_LABEL = {
  product: "Engine",
  feature: "Capability",
  solution: "Solution",
  industry: "Industry",
  "use-case": "Use case",
  channel: "Channel",
  "asset-type": "Format",
  comparison: "Comparison",
  guide: "Resource",
  article: "Article",
  glossary: "Term",
  "case-study": "Case study",
  campaign: "Campaign",
  company: "Company",
  legal: "Legal",
};

/**
 * Kinds for the routes that are not entities. A hub is a "Section"; the
 * channel-by-industry pages are real guides and are labelled as such rather
 * than being filed under the same word as an index page.
 */
const GROUP_KIND = {
  "Channel guides by industry": "Channel guide",
};

/** Order the result groups appear in. Most navigational kinds first. */
const KIND_ORDER = [
  "Engine",
  "Capability",
  "Solution",
  "Industry",
  "Use case",
  "Channel",
  "Channel guide",
  "Format",
  "Comparison",
  "Resource",
  "Article",
  "Term",
  "Case study",
  "Company",
  "Section",
  "Legal",
];

/* Enrichment: href -> { kind label, blurb } from the entity registry. */
const enrich = new Map();
for (const entity of indexableEntities()) {
  enrich.set(urlFor(entity), {
    k: KIND_LABEL[entity.kind] ?? "Page",
    b: shortBlurb(entity),
  });
}

/* Hub and section pages carry their route-group heading as their kind, so a
   search for "resources" surfaces the hub rather than only its children. */
const groupHeadingByHref = new Map();
for (const group of routeGroups()) {
  for (const entry of group.entries) {
    if (!groupHeadingByHref.has(entry.href)) groupHeadingByHref.set(entry.href, group.heading);
  }
}

const entries = [];
for (const route of allRoutes()) {
  const extra = enrich.get(route.href);
  const heading = groupHeadingByHref.get(route.href);
  // A blurb that only restates the title is noise in a result row, so
  // non-entity routes carry one only where the heading adds something.
  const blurb = extra?.b ?? (heading && !GROUP_KIND[heading] ? heading : "");
  entries.push({
    t: route.label,
    h: route.href,
    k: extra?.k ?? GROUP_KIND[heading] ?? "Section",
    ...(blurb ? { b: blurb } : {}),
  });
}

entries.sort((a, b) => {
  const ka = KIND_ORDER.indexOf(a.k);
  const kb = KIND_ORDER.indexOf(b.k);
  if (ka !== kb) return (ka === -1 ? 99 : ka) - (kb === -1 ? 99 : kb);
  return a.t.localeCompare(b.t);
});

const out = join(process.cwd(), "public", "search-index.json");
mkdirSync(join(process.cwd(), "public"), { recursive: true });
writeFileSync(out, JSON.stringify({ order: KIND_ORDER, entries }));

const bytes = JSON.stringify({ order: KIND_ORDER, entries }).length;
console.log(
  `search-index.json: ${entries.length} entries, ${(bytes / 1024).toFixed(1)} kB` +
    ` across ${new Set(entries.map((e) => e.k)).size} kinds.`,
);
