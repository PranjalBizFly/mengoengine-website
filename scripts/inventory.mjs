/**
 * Generates the page inventory and architecture documentation from the actual
 * content data, so docs/ can never drift from what the site ships.
 *
 * Outputs:
 *   docs/page-inventory.csv   — one row per URL, for spreadsheet review
 *   docs/architecture.md      — hierarchy, page-type mapping, priorities
 *
 * Usage: npm run docs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// The data layer is TypeScript; run it through the bundler-independent loader.
register("./ts-loader.mjs", pathToFileURL("./scripts/"));

const { content } = await import("../src/lib/registry.ts");
const { routes } = await import("../src/lib/site.ts");
const { routeGroups } = await import("../src/lib/route-index.ts");
const { sectorLabel } = await import("../src/lib/nav.ts");
const { articleCategories } = await import("../src/data/articles.ts");

/**
 * Per page type: the template it renders through, its search intent, the CTA it
 * closes with, and its launch priority. This table is the page-type mapping the
 * brief asks for, expressed as code rather than as a document that goes stale.
 */
const TYPE_MAP = {
  product: { template: "ProductPage", intent: "Commercial", cta: "Join our waitlist", priority: 1, parent: "Platform" },
  feature: { template: "FeaturePage", intent: "Informational / commercial", cta: "Join our waitlist", priority: 2, parent: "Capabilities" },
  solution: { template: "SolutionPage", intent: "Commercial", cta: "Talk it through", priority: 1, parent: "Solutions" },
  industry: { template: "IndustryPage", intent: "Commercial", cta: "Ask about your case", priority: 2, parent: "Industries" },
  "use-case": { template: "UseCasePage", intent: "Commercial", cta: "Join our waitlist", priority: 3, parent: "Use cases" },
  channel: { template: "ChannelPage", intent: "Informational", cta: "Join our waitlist", priority: 2, parent: "Channels" },
  "asset-type": { template: "AssetTypePage", intent: "Informational", cta: "Join our waitlist", priority: 3, parent: "Asset library" },
  comparison: { template: "ComparisonPage", intent: "Commercial investigation", cta: "Talk to an expert", priority: 2, parent: "Compare" },
  guide: { template: "ResourcePage", intent: "Informational", cta: "Send me the working version", priority: 2, parent: "Resources" },
  article: { template: "BlogPage", intent: "Informational", cta: "Join our waitlist", priority: 3, parent: "Blog" },
  glossary: { template: "GlossaryPage", intent: "Informational", cta: "Join our waitlist", priority: 3, parent: "Glossary" },
  company: { template: "CompanyPage", intent: "Navigational", cta: "Varies by page", priority: 1, parent: "Company" },
  legal: { template: "LegalPage", intent: "Navigational", cta: "None", priority: 1, parent: "Legal" },
};

const HUBS = [
  ["/", "Homepage", "HomePage", "Brand / commercial", "Join our waitlist", 1, "Main"],
  [routes.platform(), "Platform overview", "HubPage", "Commercial", "Join our waitlist", 1, "Platform"],
  [routes.features(), "All capabilities", "HubPage", "Informational", "Join our waitlist", 2, "Capabilities"],
  [routes.solutions(), "All solutions", "HubPage", "Commercial", "Talk to an expert", 1, "Solutions"],
  [routes.industries(), "All industries", "HubPage", "Commercial", "Talk to an expert", 2, "Industries"],
  [routes.useCases(), "All use cases", "HubPage", "Informational", "Join our waitlist", 3, "Use cases"],
  [routes.channels(), "All channels", "HubPage", "Informational", "Join our waitlist", 2, "Channels"],
  [routes.assetTypes(), "Asset library", "HubPage", "Informational", "Join our waitlist", 3, "Asset library"],
  [routes.compare(), "All comparisons", "HubPage", "Commercial investigation", "Talk to an expert", 2, "Compare"],
  [routes.resources(), "All resources", "HubPage", "Informational", "Join our waitlist", 2, "Resources"],
  [routes.blog(), "Blog index", "HubPage", "Informational", "Join our waitlist", 2, "Blog"],
  [routes.glossary(), "Glossary index", "HubPage", "Informational", "Join our waitlist", 3, "Glossary"],
  [routes.contact(), "Contact", "ContactPage", "Navigational / commercial", "Send enquiry", 1, "Main"],
  [routes.waitlist(), "Get started", "ConversionPage", "Transactional", "Join our waitlist", 1, "Main"],
  [routes.sitemapPage(), "Sitemap", "SitemapPage", "Navigational", "None", 3, "Main"],
];

const rows = [];
const seen = new Set();

function push(row) {
  if (seen.has(row.url)) return;
  seen.add(row.url);
  rows.push(row);
}

for (const [url, name, template, intent, cta, priority, parent] of HUBS) {
  push({ name, type: "Hub", template, parent, url, topic: name, intent, status: "Published", related: "", cta, priority });
}

for (const [kind, list] of [
  ["product", content.products],
  ["feature", content.features],
  ["solution", content.solutions],
  ["industry", content.industries],
  ["use-case", content.useCases],
  ["channel", content.channels],
  ["asset-type", content.assetTypes],
  ["comparison", content.comparisons],
  ["guide", content.guides],
  ["article", content.articles],
  ["glossary", content.glossary],
  ["company", content.companyPages],
  ["legal", content.legalPages],
]) {
  const meta = TYPE_MAP[kind];
  for (const entity of list) {
    const url = urlFor(kind, entity.slug);
    push({
      name: entity.title,
      type: label(kind),
      template: meta.template,
      parent: kind === "industry" ? `Industries / ${sectorLabel(entity.sector)}` : meta.parent,
      url,
      topic: topicFor(kind, entity),
      intent: meta.intent,
      status: entity.status === "draft" ? "Draft" : "Published",
      related: relatedFor(kind, entity),
      cta: meta.cta,
      priority: meta.priority,
    });
  }
}

// Blog topic pages and the channel x industry matrix.
for (const category of articleCategories) {
  push({
    name: `${category.label} (blog topic)`,
    type: "Blog topic",
    template: "BlogCategoryPage",
    parent: "Blog",
    url: routes.blogCategory(category.slug),
    topic: category.label,
    intent: "Informational",
    status: "Published",
    related: "Blog index",
    cta: "Join our waitlist",
    priority: 3,
  });
}

for (const channel of content.channels) {
  for (const industrySlug of channel.industries) {
    const industry = content.industries.find((i) => i.slug === industrySlug);
    if (!industry) continue;
    push({
      name: `${channel.title} for ${industry.title}`,
      type: "SEO landing",
      template: "ChannelIndustryPage",
      parent: `Channels / ${channel.title}`,
      url: routes.channelForIndustry(channel.slug, industrySlug),
      topic: `${channel.title} marketing for ${industry.title.toLowerCase()}`,
      intent: "Commercial",
      status: "Published",
      related: `${channel.title}; ${industry.title}`,
      cta: "Ask about your case",
      priority: 3,
    });
  }
}

function urlFor(kind, slug) {
  const map = {
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
    company: routes.company,
    legal: routes.legal,
  };
  return map[kind](slug);
}

function label(kind) {
  return { "use-case": "Use case", "asset-type": "Asset format", glossary: "Glossary term" }[kind] ?? kind[0].toUpperCase() + kind.slice(1);
}

function topicFor(kind, e) {
  switch (kind) {
    case "industry":
      return `Marketing for ${e.title.toLowerCase()}`;
    case "feature":
      return e.short;
    case "channel":
      return `${e.title} marketing`;
    case "asset-type":
      return `${e.title} format`;
    case "glossary":
      return `${e.title} definition`;
    case "comparison":
      return `Mengo vs ${e.against}`;
    default:
      return e.title;
  }
}

function relatedFor(kind, e) {
  const pick = (arr) => (arr ?? []).slice(0, 3).join("; ");
  switch (kind) {
    case "product":
      return pick([...e.related.solutions, ...e.related.industries]);
    case "feature":
      return pick(e.relatedFeatures);
    case "solution":
      return pick([...e.products, ...e.related.industries]);
    case "industry":
      return pick([...e.solutions, ...e.channels]);
    case "use-case":
      return pick([...e.products, ...e.features]);
    case "channel":
      return pick(e.industries);
    case "asset-type":
      return e.channel;
    case "guide":
      return pick([...e.related.features, ...e.related.industries]);
    case "article":
      return pick(e.related);
    case "glossary":
      return pick(e.seeAlso);
    default:
      return "";
  }
}

/* ------------------------------- outputs ------------------------------- */

mkdirSync("docs", { recursive: true });

const HEADERS = ["Page", "Type", "Template", "Parent category", "URL", "Primary topic", "Search intent", "Content status", "Related pages", "CTA", "Priority"];
const csv = [
  HEADERS.join(","),
  ...rows.map((r) =>
    [r.name, r.type, r.template, r.parent, r.url, r.topic, r.intent, r.status, r.related, r.cta, `P${r.priority}`]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(","),
  ),
].join("\n");
writeFileSync("docs/page-inventory.csv", csv);

const byType = new Map();
const byPriority = new Map();
for (const r of rows) {
  byType.set(r.type, (byType.get(r.type) ?? 0) + 1);
  byPriority.set(r.priority, (byPriority.get(r.priority) ?? 0) + 1);
}

const groups = routeGroups();
const md = [];
md.push("# MengoEngine — content architecture");
md.push("");
md.push("> Generated by `npm run docs` from `src/data`. Do not edit by hand.");
md.push("");
md.push(`**${rows.length} pages** across **${byType.size} page types**, rendered by **${new Set(rows.map((r) => r.template)).size} templates**.`);
md.push("");
md.push("## 1. Page count by type");
md.push("");
md.push("| Type | Template | Pages | Priority |");
md.push("| --- | --- | ---: | :---: |");
for (const [type, count] of [...byType.entries()].sort((a, b) => b[1] - a[1])) {
  const sample = rows.find((r) => r.type === type);
  md.push(`| ${type} | \`${sample.template}\` | ${count} | P${sample.priority} |`);
}
md.push("");
md.push("## 2. Launch priority");
md.push("");
md.push("| Priority | Meaning | Pages |");
md.push("| --- | --- | ---: |");
md.push(`| P1 — Core | Required at launch: homepage, platform, products, solutions hub, company, legal, conversion | ${byPriority.get(1) ?? 0} |`);
md.push(`| P2 — Important | Shortly after: capabilities, industries, channels, comparisons, resources | ${byPriority.get(2) ?? 0} |`);
md.push(`| P3 — Scalable SEO | Generated from the page system: use cases, asset formats, glossary, blog, channel x industry | ${byPriority.get(3) ?? 0} |`);
md.push("");
md.push("## 3. Hierarchy");
md.push("");
for (const group of groups) {
  md.push(`### ${group.heading}${group.href ? ` — \`${group.href}\`` : ""} (${group.entries.length})`);
  md.push("");
  for (const entry of group.entries.slice(0, 6)) md.push(`- ${entry.label} — \`${entry.href}\``);
  if (group.entries.length > 6) md.push(`- …and ${group.entries.length - 6} more (see \`page-inventory.csv\`)`);
  md.push("");
}
md.push("## 4. Internal linking graph");
md.push("");
md.push("```");
md.push("Homepage");
md.push("   |");
md.push("   +-- Platform hub --> Product --> Features --> Use cases");
md.push("   |                       |            |");
md.push("   |                       v            v");
md.push("   +-- Solutions -----> Industries --> Channels --> Channel x industry");
md.push("   |        |               |              |");
md.push("   |        v               v              v");
md.push("   +-- Comparisons     Use cases      Asset formats");
md.push("   |");
md.push("   +-- Resources --> Glossary --> Blog --> Blog topic");
md.push("```");
md.push("");
md.push("Every arrow is generated by `link()` in `src/lib/registry.ts` from slug references in the data, and rendered by `RelatedRail`. Breadcrumbs follow the URL hierarchy and are mirrored into `BreadcrumbList` structured data on every page below the homepage.");
md.push("");
writeFileSync("docs/architecture.md", md.join("\n"));

console.log(`docs/page-inventory.csv — ${rows.length} rows`);
console.log(`docs/architecture.md — ${byType.size} page types`);
