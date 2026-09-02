/**
 * Internal link graph analysis.
 *
 * The content validator checks references in the data. The audit checks that
 * rendered links resolve. Neither answers the questions that decide whether a
 * 500-page site actually gets crawled:
 *
 *   - Which pages are reachable only from the sitemap? (contextual orphans)
 *   - How many clicks from the homepage is each page? (crawl depth)
 *   - Which anchors say nothing? ("read more", "learn more")
 *   - Which informative images have no alt text?
 *
 * Global navigation is excluded from the graph on purpose: a link that appears
 * in the header or footer of every page proves nothing about whether a page is
 * contextually connected. Depth is measured on contextual links only.
 *
 * Run with: npm run seo:graph
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Honours NEXT_DIST_DIR so this gate can read an isolated build rather than a
// .next that a running dev server is rewriting underneath it.
const APP_DIR = join(process.cwd(), process.env.NEXT_DIST_DIR || ".next", "server", "app");
const MAX_DEPTH_TARGET = 4;

/** Anchors that carry no information about the destination. */
const WEAK_ANCHORS = new Set([
  "read more",
  "learn more",
  "click here",
  "more",
  "here",
  "find out more",
  "see more",
  "this page",
  "link",
]);

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
  return rel === "index" ? "/" : `/${rel}/`;
}

/**
 * Strip the shared chrome so only the page's own links remain.
 * The header and footer are the last <header>/<footer> wrappers around <main>.
 */
function contextualBody(html) {
  const mainStart = html.indexOf('<main id="main"');
  if (mainStart === -1) return html;
  // Everything after <main> up to the site footer.
  const rest = html.slice(mainStart);
  const footerStart = rest.lastIndexOf('<footer');
  return footerStart === -1 ? rest : rest.slice(0, footerStart);
}

const files = walk(APP_DIR);
const pages = new Map();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const route = routeFor(file);
  const body = contextualBody(html);

  const anchors = [...body.matchAll(/<a\b[^>]*href="(\/[^"?#]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({
    href: m[1].endsWith("/") || m[1].includes(".") ? m[1] : `${m[1]}/`,
    text: m[2].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
  }));

  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);

  pages.set(route, {
    anchors,
    images,
    noindex: /<meta name="robots" content="[^"]*noindex/.test(html),
  });
}

/* ------------------------------------------------------------------ */
/* Crawl depth from the homepage, contextual links only                */
/* ------------------------------------------------------------------ */

const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const current = queue.shift();
  const node = pages.get(current);
  if (!node) continue;
  for (const { href } of node.anchors) {
    if (!pages.has(href) || depth.has(href)) continue;
    depth.set(href, depth.get(current) + 1);
    queue.push(href);
  }
}

/* ------------------------------------------------------------------ */
/* Inbound links, excluding the sitemap page                           */
/* ------------------------------------------------------------------ */

const SITEMAP_PAGE = "/sitemap/";
const inbound = new Map();
for (const route of pages.keys()) inbound.set(route, new Set());

for (const [route, node] of pages) {
  if (route === SITEMAP_PAGE) continue; // links from the sitemap do not count
  for (const { href } of node.anchors) {
    if (href === route) continue;
    inbound.get(href)?.add(route);
  }
}

/* ------------------------------------------------------------------ */
/* Findings                                                            */
/* ------------------------------------------------------------------ */

const orphans = [];
const deep = [];
for (const [route, node] of pages) {
  // The sitemap page is a footer utility by design, not contextual content.
  if (node.noindex || route === "/" || route === "/_not-found/" || route === SITEMAP_PAGE) continue;
  if ((inbound.get(route)?.size ?? 0) === 0) orphans.push(route);
  const d = depth.get(route);
  if (d === undefined) deep.push([route, "unreachable"]);
  else if (d > MAX_DEPTH_TARGET) deep.push([route, `${d} clicks`]);
}

const weak = [];
for (const [route, node] of pages) {
  for (const anchor of node.anchors) {
    if (WEAK_ANCHORS.has(anchor.text.toLowerCase())) weak.push(`${route} — "${anchor.text}" -> ${anchor.href}`);
  }
}

const altless = [];
for (const [route, node] of pages) {
  for (const tag of node.images) {
    if (!/\salt=/.test(tag)) altless.push(`${route} — ${tag.slice(0, 90)}`);
  }
}

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

const depths = [...depth.values()];
const histogram = depths.reduce((acc, d) => ((acc[d] = (acc[d] ?? 0) + 1), acc), {});

console.log(`Analysed ${pages.size} pages, contextual links only.\n`);
console.log("Crawl depth from the homepage:");
for (const [d, count] of Object.entries(histogram)) {
  console.log(`  ${d} click${d === "1" ? "" : "s"}: ${count} pages`);
}
console.log(`  max depth: ${Math.max(...depths)}\n`);

function section(label, items, limit = 15) {
  if (items.length === 0) return false;
  console.log(`${label} (${items.length})`);
  for (const item of items.slice(0, limit)) console.log(`  ${Array.isArray(item) ? item.join(" — ") : item}`);
  if (items.length > limit) console.log(`  …and ${items.length - limit} more`);
  console.log("");
  return true;
}

let failed = false;
failed = section("Contextual orphans — reachable only from the sitemap", orphans) || failed;
failed = section(`Deeper than ${MAX_DEPTH_TARGET} clicks`, deep) || failed;
failed = section("Uninformative anchor text", weak) || failed;
failed = section("Images with no alt attribute", altless) || failed;

if (!failed) console.log("No problems found.");
process.exit(failed ? 1 : 0);
