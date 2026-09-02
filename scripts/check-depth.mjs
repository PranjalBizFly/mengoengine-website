/**
 * Depth-layer validation.
 *
 * Two failure classes the content validator cannot see:
 *
 *  1. A depth entry keyed by a slug that does not exist — the block is written,
 *     never rendered, and nothing complains.
 *  2. Boilerplate. The whole point of the depth layer is copy written for one
 *     page; a paragraph that appears verbatim on a second page defeats it.
 *
 * Run with: npm run check:depth
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./ts-loader.mjs", pathToFileURL("./scripts/"));

const { content } = await import("../src/lib/registry.ts");
const { channelIndustryDepth } = await import("../src/data/depth/channel-industry.ts");

const problems = [];
const add = (severity, kind, where, detail) => problems.push({ severity, kind, where, detail });

/* ------------------------------------------------------------------ */
/* Coverage and orphaned keys                                          */
/* ------------------------------------------------------------------ */

const DEPTH_SOURCES = {
  products: () => import("../src/data/depth/products.ts").then((m) => m.productDepth),
  features: () => import("../src/data/depth/features.ts").then((m) => m.featureDepth),
  solutions: () => import("../src/data/depth/solutions.ts").then((m) => m.solutionDepth),
  industries: () => import("../src/data/depth/industries.ts").then((m) => m.industryDepth),
  useCases: () => import("../src/data/depth/use-cases.ts").then((m) => m.useCaseDepth),
  channels: () => import("../src/data/depth/channels.ts").then((m) => m.channelDepth),
  assetTypes: () => import("../src/data/depth/asset-types.ts").then((m) => m.assetTypeDepth),
  comparisons: () => import("../src/data/depth/comparisons.ts").then((m) => m.comparisonDepth),
  glossary: () => import("../src/data/depth/glossary.ts").then((m) => m.glossaryDepth),
  guides: () => import("../src/data/depth/guides.ts").then((m) => m.guideDepth),
  articles: () => import("../src/data/depth/articles.ts").then((m) => m.articleDepth),
  companyPages: () => import("../src/data/depth/company.ts").then((m) => m.companyDepth),
};

let covered = 0;
let expected = 0;

for (const [listName, load] of Object.entries(DEPTH_SOURCES)) {
  const map = await load();
  const list = content[listName];
  const slugs = new Set(list.map((e) => e.slug));

  for (const key of Object.keys(map)) {
    if (!slugs.has(key)) add("error", "orphan-depth-key", `${listName}:${key}`, "no record with this slug");
  }
  for (const record of list) {
    expected += 1;
    if (map[record.slug]) covered += 1;
    else add("warn", "no-depth", `${listName}:${record.slug}`, "record has no depth block");
  }
}

/* Channel x industry pages are generated pairs, not records. */
const pairKeys = new Set();
for (const channel of content.channels) {
  for (const industry of channel.industries) pairKeys.add(`${channel.slug}:${industry}`);
}
for (const key of Object.keys(channelIndustryDepth)) {
  if (!pairKeys.has(key)) add("error", "orphan-depth-key", `channel-industry:${key}`, "no such channel/industry pair");
}
for (const key of pairKeys) {
  expected += 1;
  if (channelIndustryDepth[key]) covered += 1;
  else add("warn", "no-depth", `channel-industry:${key}`, "pair has no depth block");
}

/* ------------------------------------------------------------------ */
/* Repetition — the failure this layer exists to prevent               */
/* ------------------------------------------------------------------ */

const seen = new Map();
function record(text, where, field) {
  if (!text || text.length < 40) return;
  const key = text.trim().toLowerCase();
  const bucket = seen.get(key) ?? [];
  bucket.push(`${where}.${field}`);
  seen.set(key, bucket);
}

function walk(depth, where) {
  if (!depth) return;
  record(depth.lead, where, "lead");
  record(depth.intro, where, "intro");
  record(depth.connects, where, "connects");
  record(depth.close?.title, where, "close.title");
  record(depth.close?.body, where, "close.body");
  for (const section of depth.explain ?? []) {
    record(section.body, where, `explain[${section.heading}]`);
    for (const bullet of section.bullets ?? []) record(bullet.body, where, `bullet[${bullet.label}]`);
  }
  for (const item of depth.takeaways ?? []) record(item, where, "takeaway");
}

for (const [listName, list] of Object.entries(content)) {
  for (const entity of list) walk(entity.depth, `${listName}:${entity.slug}`);
}
for (const [key, depth] of Object.entries(channelIndustryDepth)) walk(depth, `channel-industry:${key}`);

for (const [, owners] of seen) {
  if (owners.length > 1) add("error", "duplicate-depth-copy", owners.join(", "), "identical text on more than one page");
}

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

const errors = problems.filter((p) => p.severity === "error");
const warnings = problems.filter((p) => p.severity === "warn");

console.log(`Depth coverage: ${covered}/${expected} pages carry a depth block.\n`);

for (const [label, list] of [
  ["Errors", errors],
  ["Warnings", warnings],
]) {
  if (list.length === 0) continue;
  console.log(`${label} (${list.length})`);
  const grouped = new Map();
  for (const problem of list) {
    const bucket = grouped.get(problem.kind) ?? [];
    bucket.push(problem);
    grouped.set(problem.kind, bucket);
  }
  for (const [kind, items] of grouped) {
    console.log(`  ${kind} — ${items.length}`);
    for (const item of items.slice(0, process.env.VERBOSE ? 500 : 10)) {
      console.log(`    ${item.where}${item.detail ? ` — ${item.detail}` : ""}`);
    }
    if (items.length > 10 && !process.env.VERBOSE) console.log(`    …and ${items.length - 10} more`);
  }
  console.log("");
}

if (errors.length === 0 && warnings.length === 0) console.log("No problems found.");
process.exit(errors.length > 0 ? 1 : 0);
