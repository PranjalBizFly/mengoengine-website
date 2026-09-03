/**
 * Route audit for the page directory.
 *
 * Answers one question with evidence rather than assertion: does "Explore all
 * pages" list every page this site builds?
 *
 * It discovers routes from two independent places — the file-system routes under
 * src/app for static pages, and the content registry for every dynamic segment —
 * then reconciles that set against what `pageDirectory()` actually renders. Any
 * route that is neither listed nor declared in `excludedRoutes()` fails the
 * audit, so a page can never fall out of the directory quietly.
 *
 * Run with: npm run audit:routes
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

register("./ts-loader.mjs", pathToFileURL("./scripts/"));

const { content, urlFor } = await import("@/lib/registry.ts");
const { routes } = await import("@/lib/site.ts");
const { allRoutes, excludedRoutes } = await import("@/lib/route-index.ts");
const { pageDirectory, directoryPageCount } = await import("@/lib/directory.ts");
const { channels } = await import("@/data/channels.ts");
const { articleCategories } = await import("@/data/articles.ts");

const APP_DIR = join(process.cwd(), "src", "app");

/* ------------------------------------------------------------------ */
/* Discovery                                                           */
/* ------------------------------------------------------------------ */

/**
 * Static routes, straight off the file system.
 *
 * Dynamic segments are skipped here and recovered from the registry below —
 * the data layer is the only thing that knows how many pages `[feature]`
 * stands for. `api` is not a page.
 */
function staticRoutes(dir = APP_DIR, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === "api" || name.startsWith("[") || name.startsWith("_")) continue;
      staticRoutes(full, out);
    } else if (name === "page.tsx") {
      const rel = relative(APP_DIR, dir).split(sep).join("/");
      out.push(rel ? `/${rel}/` : "/");
    }
  }
  return out;
}

/** Every URL the content layer expands a dynamic segment into. */
function dynamicRoutes() {
  const out = [];
  for (const list of Object.values(content)) {
    for (const entity of list) out.push(urlFor(entity));
  }
  for (const channel of channels) {
    for (const industry of channel.industries) {
      out.push(routes.channelForIndustry(channel.slug, industry));
    }
  }
  for (const category of articleCategories) out.push(routes.blogCategory(category.slug));
  return out;
}

const discovered = [...new Set([...staticRoutes(), ...dynamicRoutes()])].sort();

/* ------------------------------------------------------------------ */
/* Reconciliation                                                      */
/* ------------------------------------------------------------------ */

const categories = pageDirectory();
const listed = [];
for (const category of categories) for (const entry of category.entries) listed.push(entry.href);

const listedSet = new Set(listed);
const excluded = excludedRoutes();
const excludedSet = new Set(excluded.map((e) => e.href));

const duplicates = listed.filter((href, i) => listed.indexOf(href) !== i);
const unlisted = discovered.filter((href) => !listedSet.has(href) && !excludedSet.has(href));
const phantom = [...listedSet].filter((href) => !discovered.includes(href));
const staleExclusions = excluded.filter((e) => !discovered.includes(e.href));

/* ------------------------------------------------------------------ */
/* Report                                                              */
/* ------------------------------------------------------------------ */

console.log("Route audit\n===========\n");
console.log(`Total discovered routes:  ${discovered.length}`);
console.log(`Total valid pages:        ${listedSet.size}  (listed in the directory)`);
console.log(`Total excluded routes:    ${excluded.length}\n`);

console.log("Excluded routes and why");
console.log("-----------------------");
for (const item of excluded) console.log(`  ${item.href.padEnd(34)} ${item.reason}`);

console.log("\nDirectory categories");
console.log("--------------------");
for (const category of categories) {
  console.log(`  ${String(category.entries.length).padStart(4)}  ${category.heading}`);
}
console.log(`  ${String(directoryPageCount()).padStart(4)}  TOTAL`);

/* ------------------------------------------------------------------ */
/* Gates                                                               */
/* ------------------------------------------------------------------ */

const problems = [];
if (unlisted.length) {
  problems.push(
    `${unlisted.length} route(s) exist but are neither in the directory nor declared in excludedRoutes():\n` +
      unlisted.map((h) => `    ${h}`).join("\n"),
  );
}
if (phantom.length) {
  problems.push(
    `${phantom.length} directory entr(ies) point at a route the project does not build:\n` +
      phantom.map((h) => `    ${h}`).join("\n"),
  );
}
if (duplicates.length) {
  problems.push(
    `${duplicates.length} duplicate href(s) in the directory:\n` +
      [...new Set(duplicates)].map((h) => `    ${h}`).join("\n"),
  );
}
if (staleExclusions.length) {
  problems.push(
    `${staleExclusions.length} declared exclusion(s) no longer match a real route:\n` +
      staleExclusions.map((e) => `    ${e.href}`).join("\n"),
  );
}
if (listedSet.size !== allRoutes().length) {
  problems.push(
    `Directory lists ${listedSet.size} pages but the route index reports ${allRoutes().length}.`,
  );
}

if (problems.length) {
  console.error(`\n✗ Route audit failed\n`);
  for (const problem of problems) console.error(`  • ${problem}\n`);
  process.exit(1);
}

console.log(
  `\n✓ Every route the project builds is either listed in the directory (${listedSet.size})` +
    ` or declared excluded (${excluded.length}). No duplicates, no phantom entries.`,
);
