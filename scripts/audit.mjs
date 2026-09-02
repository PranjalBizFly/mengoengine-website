/**
 * Post-build audit.
 *
 * Reads the prerendered HTML in .next/server/app and checks the things that
 * silently break on a site this size: duplicate metadata, missing or multiple
 * H1s, absent canonicals, internal links that point at pages we never built,
 * and design-system violations in the source.
 *
 * Run with: npm run audit  (after npm run build)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Honours NEXT_DIST_DIR so this gate can read an isolated build rather than a
// .next that a running dev server is rewriting underneath it.
const APP_DIR = join(process.cwd(), process.env.NEXT_DIST_DIR || ".next", "server", "app");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

function routeFor(file) {
  const rel = relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  if (rel === "index") return "/";
  return `/${rel}/`;
}

function extract(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim() : null;
}

const files = walk(APP_DIR);
if (files.length === 0) {
  console.error(`No prerendered pages under ${APP_DIR}. Run the build first.`);
  process.exit(1);
}
const pages = new Map();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const route = routeFor(file);
  pages.set(route, {
    title: extract(html, /<title>([^<]*)<\/title>/),
    description: extract(html, /<meta name="description" content="([^"]*)"/),
    canonical: extract(html, /<link rel="canonical" href="([^"]*)"/),
    ogImage: extract(html, /<meta property="og:image" content="([^"]*)"/),
    h1s: (html.match(/<h1[\s>]/g) || []).length,
    jsonLd: (html.match(/type="application\/ld\+json"/g) || []).length,
    links: [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]),
  });
}

const problems = [];
const known = new Set(pages.keys());
// Routes served by handlers rather than prerendered HTML.
for (const extra of ["/sitemap.xml", "/robots.txt", "/icon.png", "/apple-icon.png"]) known.add(extra);

function report(kind, route, detail) {
  problems.push({ kind, route, detail });
}

// 1. Duplicate titles and descriptions
const byTitle = new Map();
const byDescription = new Map();
for (const [route, page] of pages) {
  if (route === "/_not-found/") continue;
  if (!page.title) report("missing-title", route, "");
  else {
    const bucket = byTitle.get(page.title) ?? [];
    bucket.push(route);
    byTitle.set(page.title, bucket);
  }
  if (!page.description) report("missing-description", route, "");
  else {
    const bucket = byDescription.get(page.description) ?? [];
    bucket.push(route);
    byDescription.set(page.description, bucket);
  }
  if (!page.canonical) report("missing-canonical", route, "");
  if (!page.ogImage) report("missing-og-image", route, "");
  if (page.h1s !== 1) report("h1-count", route, `${page.h1s} h1 elements`);
  if (page.jsonLd < 2) report("thin-structured-data", route, `${page.jsonLd} blocks`);
}

for (const [title, routes] of byTitle) {
  if (routes.length > 1) report("duplicate-title", routes.join(", "), title);
}
for (const [description, routes] of byDescription) {
  if (routes.length > 1) report("duplicate-description", routes.join(", "), description.slice(0, 60));
}

// 2. Internal links that point nowhere
const broken = new Map();
for (const [route, page] of pages) {
  for (const href of new Set(page.links)) {
    if (href.startsWith("/_next/") || href.startsWith("/api/")) continue;
    const normalised = href.endsWith("/") || href.includes(".") ? href : `${href}/`;
    if (known.has(normalised)) continue;
    const bucket = broken.get(normalised) ?? new Set();
    bucket.add(route);
    broken.set(normalised, bucket);
  }
}
for (const [href, sources] of broken) {
  report("broken-link", [...sources].slice(0, 3).join(", "), href);
}

// 3. Design-system rule: every font size must be a named token.
//    Checked against source, not output, because that is where it regresses.
function walkSrc(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkSrc(full, out);
    else if (/\.tsx?$/.test(name)) out.push(full);
  }
  return out;
}
try {
  for (const file of walkSrc(join(process.cwd(), "src"))) {
    const source = readFileSync(file, "utf8");
    for (const hit of source.match(/text-\[[0-9.]+rem\]/g) ?? []) {
      report("arbitrary-font-size", relative(process.cwd(), file), hit);
    }
  }
} catch {
  // src/ unavailable (e.g. auditing a deployed bundle) — skip this check.
}

// Report
const grouped = new Map();
for (const problem of problems) {
  const bucket = grouped.get(problem.kind) ?? [];
  bucket.push(problem);
  grouped.set(problem.kind, bucket);
}

console.log(`Audited ${pages.size} prerendered pages.\n`);

if (problems.length === 0) {
  console.log("No problems found.");
  process.exit(0);
}

for (const [kind, items] of grouped) {
  console.log(`${kind} (${items.length})`);
  for (const item of items.slice(0, 12)) {
    console.log(`  ${item.route}${item.detail ? ` — ${item.detail}` : ""}`);
  }
  if (items.length > 12) console.log(`  … and ${items.length - 12} more`);
  console.log("");
}

const fatal = ["arbitrary-font-size", "broken-link", "duplicate-title", "duplicate-description", "missing-title", "missing-canonical", "h1-count"];
process.exit(problems.some((p) => fatal.includes(p.kind)) ? 1 : 0);
