/**
 * Image uniqueness audit.
 *
 * Crawls every built page and records which image URL appears in which page,
 * so "one image asset = one page/section" can be checked against what a reader
 * actually receives rather than against the registry's intent.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP = join(process.cwd(), ".next", "server", "app");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

function routeFor(file) {
  const rel = relative(APP, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}/`;
}

const files = walk(APP);
const byImage = new Map(); // photoId -> Set(routes)
const byRoute = new Map(); // route -> [photoId]

for (const file of files) {
  const route = routeFor(file);
  if (route.startsWith("/s/")) continue; // subdomain mirrors, audited separately
  const html = readFileSync(file, "utf8");
  const ids = new Set();
  // Next/Image rewrites to /_next/image?url=<encoded>. Recover the origin URL.
  for (const m of html.matchAll(/url=([^&"]+)&/g)) {
    const decoded = decodeURIComponent(m[1]);
    const id = decoded.match(/photo-[a-z0-9-]+/i)?.[0];
    if (id) ids.add(id);
  }
  for (const m of html.matchAll(/images\.unsplash\.com\/(photo-[a-z0-9-]+)/gi)) ids.add(m[1]);
  byRoute.set(route, [...ids]);
  for (const id of ids) {
    if (!byImage.has(id)) byImage.set(id, new Set());
    byImage.get(id).add(route);
  }
}

const slots = [...byRoute.values()].reduce((a, v) => a + v.length, 0);
const reused = [...byImage.entries()].filter(([, routes]) => routes.size > 1);
reused.sort((a, b) => b[1].size - a[1].size);

console.log("Image uniqueness audit");
console.log("======================\n");
console.log(`Pages crawled:              ${byRoute.size}`);
console.log(`Image placements (slots):   ${slots}`);
console.log(`Distinct image assets:      ${byImage.size}`);
console.log(`Assets used on >1 page:     ${reused.length}`);
console.log(`Pages with no image:        ${[...byRoute.values()].filter((v) => v.length === 0).length}`);

const maxReuse = reused.length ? reused[0][1].size : 0;
console.log(`Worst single-asset reuse:   ${maxReuse} pages`);
console.log(
  `\nTo satisfy "1 asset = 1 usage" the site needs ${slots} distinct assets; it has ${byImage.size}.`,
);
console.log(`Shortfall: ${slots - byImage.size} images.\n`);

console.log("Most-reused assets");
console.log("------------------");
for (const [id, routes] of reused.slice(0, 12)) {
  console.log(`  ${id}  on ${String(routes.size).padStart(3)} pages   e.g. ${[...routes].slice(0, 3).join(", ")}`);
}

writeFileSync(
  ".img-audit.json",
  JSON.stringify(
    {
      slots,
      distinct: byImage.size,
      byImage: Object.fromEntries([...byImage].map(([k, v]) => [k, [...v]])),
      byRoute: Object.fromEntries(byRoute),
    },
    null,
    2,
  ),
);
console.log("\nWritten .img-audit.json");
