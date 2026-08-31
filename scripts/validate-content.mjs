/**
 * Content-layer validation.
 *
 * The post-build audit checks rendered HTML. This checks the data *before* it
 * renders, which catches the failure class the audit cannot see: a slug
 * reference that points at nothing. `link()` drops unknown slugs silently, so a
 * typo in a `related` array does not break the build or the page — it just
 * quietly removes a link that was supposed to be there.
 *
 * Run with: npm run validate
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register("./ts-loader.mjs", pathToFileURL("./scripts/"));

const { content } = await import("../src/lib/registry.ts");
const { routes } = await import("../src/lib/site.ts");

const problems = [];
const add = (severity, kind, where, detail) => problems.push({ severity, kind, where, detail });

/* ------------------------------------------------------------------ */
/* Index every record by kind and slug                                 */
/* ------------------------------------------------------------------ */

const KIND_OF_LIST = {
  products: "product",
  features: "feature",
  solutions: "solution",
  industries: "industry",
  useCases: "use-case",
  channels: "channel",
  assetTypes: "asset-type",
  comparisons: "comparison",
  glossary: "glossary",
  guides: "guide",
  articles: "article",
  caseStudies: "case-study",
  campaigns: "campaign",
  companyPages: "company",
  legalPages: "legal",
};

/** slug -> Set of kinds that use it. */
const slugOwners = new Map();
/** kind -> Set of slugs. */
const byKind = new Map();
const all = [];

for (const [listName, list] of Object.entries(content)) {
  const kind = KIND_OF_LIST[listName];
  if (!kind) {
    add("error", "unknown-list", listName, "content list has no kind mapping in the validator");
    continue;
  }
  byKind.set(kind, new Set());
  for (const record of list) {
    all.push({ kind, listName, record });
    byKind.get(kind).add(record.slug);
    const owners = slugOwners.get(record.slug) ?? new Set();
    owners.add(kind);
    slugOwners.set(record.slug, owners);
  }
}

/* ------------------------------------------------------------------ */
/* 1. Slugs                                                            */
/* ------------------------------------------------------------------ */

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const { kind, record } of all) {
  const where = `${kind}:${record.slug}`;
  if (!record.slug) add("error", "missing-slug", where, "");
  else if (!SLUG_RE.test(record.slug)) {
    add("error", "slug-format", where, "must be lowercase, hyphen-separated, no leading/trailing hyphen");
  }
  if (record.slug && record.slug.length > 60) {
    add("warn", "slug-length", where, `${record.slug.length} chars`);
  }
}

// Duplicate slugs within a kind would collide on the same route.
for (const [kind, slugs] of byKind) {
  const list = all.filter((a) => a.kind === kind).map((a) => a.record.slug);
  const seen = new Set();
  for (const slug of list) {
    if (seen.has(slug)) add("error", "duplicate-slug", `${kind}:${slug}`, "two records share a slug in the same kind");
    seen.add(slug);
  }
  void slugs;
}

/* ------------------------------------------------------------------ */
/* 2. Required content fields                                          */
/* ------------------------------------------------------------------ */

for (const { kind, record } of all) {
  const where = `${kind}:${record.slug}`;
  if (!record.title?.trim()) add("error", "missing-title", where, "");
  if (!record.summary?.trim()) add("error", "missing-summary", where, "used as the H1 lead and the meta description");
  if (!record.updated || !/^\d{4}-\d{2}-\d{2}$/.test(record.updated)) {
    add("error", "bad-updated", where, `${record.updated ?? "missing"} — drives sitemap lastmod`);
  }
  // Derived descriptions are clamped to 165 chars, so a short summary produces a
  // thin meta description rather than a broken one. Flag it as a content task.
  const description = record.seoDescription ?? record.summary ?? "";
  if (description.length < 70) {
    add("warn", "thin-description", where, `${description.length} chars`);
  }
}

/* ------------------------------------------------------------------ */
/* 3. Internal references                                              */
/* ------------------------------------------------------------------ */

/** Every field on every kind that holds slugs, and the kind those slugs belong to. */
const REFERENCES = {
  product: [
    ["features", "feature"],
    ["related.solutions", "solution"],
    ["related.industries", "industry"],
    ["related.useCases", "use-case"],
  ],
  feature: [
    ["product", "product"],
    ["relatedFeatures", "feature"],
  ],
  solution: [
    ["products", "product"],
    ["features", "feature"],
    ["related.industries", "industry"],
    ["related.useCases", "use-case"],
  ],
  industry: [
    ["channels", "channel"],
    ["useCases", "use-case"],
    ["solutions", "solution"],
  ],
  "use-case": [
    ["products", "product"],
    ["features", "feature"],
    ["industries", "industry"],
  ],
  channel: [
    ["assets", "asset-type"],
    ["industries", "industry"],
  ],
  "asset-type": [["channel", "channel"]],
  guide: [
    ["related.features", "feature"],
    ["related.industries", "industry"],
    ["related.channels", "channel"],
  ],
  glossary: [["seeAlso", "glossary"]],
  "case-study": [
    ["industry", "industry"],
    ["products", "product"],
    ["features", "feature"],
    ["related.solutions", "solution"],
    ["related.useCases", "use-case"],
  ],
};

function read(record, path) {
  return path.split(".").reduce((value, key) => (value == null ? value : value[key]), record);
}

for (const { kind, record } of all) {
  for (const [path, targetKind] of REFERENCES[kind] ?? []) {
    const value = read(record, path);
    if (value == null) continue;
    const slugs = Array.isArray(value) ? value : [value];
    for (const slug of slugs) {
      if (!byKind.get(targetKind)?.has(slug)) {
        add("error", "dangling-reference", `${kind}:${record.slug}`, `${path} -> ${targetKind}:${slug} does not exist`);
      }
    }
  }
}

// Articles reference across kinds without naming one, so they resolve against
// everything. A slug matching nothing anywhere is a genuine dead reference.
for (const article of content.articles) {
  for (const slug of article.related ?? []) {
    if (!slugOwners.has(slug)) {
      add("error", "dangling-reference", `article:${article.slug}`, `related -> ${slug} matches no record of any kind`);
    }
  }
}

/* ------------------------------------------------------------------ */
/* 4. Reachability — a page nothing links to is a page nobody finds    */
/* ------------------------------------------------------------------ */

const referenced = new Set();
for (const { kind, record } of all) {
  for (const [path, targetKind] of REFERENCES[kind] ?? []) {
    const value = read(record, path);
    if (value == null) continue;
    for (const slug of Array.isArray(value) ? value : [value]) referenced.add(`${targetKind}:${slug}`);
  }
}
for (const article of content.articles) {
  for (const slug of article.related ?? []) {
    for (const owner of slugOwners.get(slug) ?? []) referenced.add(`${owner}:${slug}`);
  }
}

// Kinds reachable through a hub listing rather than through cross-references.
const HUB_LISTED = new Set(["article", "guide", "comparison", "glossary", "company", "legal", "campaign", "case-study", "asset-type", "channel", "product", "solution", "industry", "feature", "use-case"]);
for (const { kind, record } of all) {
  if (referenced.has(`${kind}:${record.slug}`)) continue;
  if (HUB_LISTED.has(kind)) continue;
  add("warn", "unreferenced", `${kind}:${record.slug}`, "no other record links to it");
}

/* ------------------------------------------------------------------ */
/* 5. Duplicate copy — the find-and-replace smell                      */
/* ------------------------------------------------------------------ */

const summaries = new Map();
for (const { kind, record } of all) {
  const key = record.summary?.trim().toLowerCase();
  if (!key) continue;
  const bucket = summaries.get(key) ?? [];
  bucket.push(`${kind}:${record.slug}`);
  summaries.set(key, bucket);
}
for (const [, owners] of summaries) {
  if (owners.length > 1) add("error", "duplicate-summary", owners.join(", "), "identical summary text");
}

// Repetition within one kind is a mistake; across kinds it is by design — a
// glossary term and a capability may share a name because they answer different
// questions at different URLs, and the metadata builder differentiates them.
const titles = new Map();
for (const { kind, record } of all) {
  const key = `${kind}::${record.title?.trim().toLowerCase()}`;
  const bucket = titles.get(key) ?? [];
  bucket.push(`${kind}:${record.slug}`);
  titles.set(key, bucket);
}
for (const [key, owners] of titles) {
  if (owners.length > 1) add("error", "repeated-title", owners.join(", "), `"${key.split("::")[1]}" repeats within one kind`);
}

/* ------------------------------------------------------------------ */
/* 6. Placeholder text must never reach a public page                  */
/* ------------------------------------------------------------------ */

const FORBIDDEN = [/lorem ipsum/i, /\byour headline here\b/i, /\bsample text\b/i, /\bdata\.[a-z]+\b/i, /\bTODO\b/, /\bFIXME\b/, /\bXXX\b/];

for (const { kind, record } of all) {
  const text = JSON.stringify(record);
  for (const pattern of FORBIDDEN) {
    if (pattern.test(text)) {
      add("error", "placeholder-text", `${kind}:${record.slug}`, String(pattern));
    }
  }
}

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

void routes;

const LIMIT = process.env.VERBOSE ? 200 : 8;
const errors = problems.filter((p) => p.severity === "error");
const warnings = problems.filter((p) => p.severity === "warn");

console.log(`Validated ${all.length} content records across ${byKind.size} kinds.\n`);

for (const [label, list] of [
  ["Errors", errors],
  ["Warnings", warnings],
]) {
  if (list.length === 0) continue;
  const grouped = new Map();
  for (const problem of list) {
    const bucket = grouped.get(problem.kind) ?? [];
    bucket.push(problem);
    grouped.set(problem.kind, bucket);
  }
  console.log(`${label} (${list.length})`);
  for (const [kind, items] of grouped) {
    console.log(`  ${kind} — ${items.length}`);
    for (const item of items.slice(0, LIMIT)) {
      console.log(`    ${item.where}${item.detail ? ` — ${item.detail}` : ""}`);
    }
    if (items.length > LIMIT) console.log(`    …and ${items.length - LIMIT} more`);
  }
  console.log("");
}

if (errors.length === 0 && warnings.length === 0) console.log("No problems found.");
process.exit(errors.length > 0 ? 1 : 0);
