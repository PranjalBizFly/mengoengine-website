/**
 * Ecosystem audit.
 *
 * Walks every page of every subdomain site against a running server and
 * reports what the brief asks to be reported: page counts, dead links, missing
 * or duplicated metadata, and where approved content is still outstanding.
 *
 * It reads the rendered HTML rather than the content modules, so it catches the
 * failures that only exist once a page is built — a link that resolves in the
 * data and 404s in the router, a title that two pages happen to share.
 *
 * Usage: node scripts/audit-subdomains.mjs [baseUrl]
 */

const BASE = process.argv[2] ?? "http://localhost:4370";

const SITES = [
  "support",
  "partners",
  "vendors",
  "affiliates",
  "developers",
  "docs",
  "status",
  "careers",
  "about",
  "investors",
  "media",
  "sustainability",
];

const problems = [];
const note = (kind, where, detail) => problems.push({ kind, where, detail });

/** Every internal ecosystem link found across the corpus, for reachability. */
const seen = new Map(); // url -> { status, title, description }
const linkSources = new Map(); // url -> Set(source)
const pendingCounts = []; // [path, count of awaiting-approval blocks]

async function fetchPage(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    const body = res.status < 400 ? await res.text() : "";
    return { status: res.status, body };
  } catch (error) {
    return { status: 0, body: "", error: String(error) };
  }
}

const titleOf = (html) => html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
const descOf = (html) =>
  html.match(/<meta name="description" content="([^"]*)"/)?.[1] ??
  html.match(/<meta content="([^"]*)" name="description"/)?.[1] ??
  "";
const canonicalOf = (html) => html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
const h1sOf = (html) => [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1]);

function internalLinks(html) {
  const hrefs = [...html.matchAll(/href="(\/s\/[^"#?]*)"/g)].map((m) => m[1]);
  return [...new Set(hrefs)];
}

/* --- Discover the corpus by crawling from each site's front page ------ */

const queue = SITES.map((site) => `/s/${site}/`);
const visited = new Set();

while (queue.length > 0) {
  const path = queue.shift();
  if (visited.has(path)) continue;
  visited.add(path);

  const { status, body, error } = await fetchPage(BASE + path);
  seen.set(path, { status, title: titleOf(body), description: descOf(body), canonical: canonicalOf(body) });

  if (status !== 200) {
    note("dead route", path, error ? `fetch failed: ${error}` : `HTTP ${status}`);
    continue;
  }

  const h1s = h1sOf(body);
  if (h1s.length === 0) note("no h1", path, "page renders without a level-one heading");
  if (h1s.length > 1) note("multiple h1", path, `${h1s.length} level-one headings`);
  if (!titleOf(body)) note("no title", path, "missing <title>");
  if (!descOf(body)) note("no description", path, "missing meta description");
  if (!canonicalOf(body)) note("no canonical", path, "missing canonical link");

  // Count the rendered markup rather than the bare string. Next embeds the
  // RSC flight payload in the document, which repeats every rendered string
  // as JSON and would double this; the payload spells the attribute
  // "className", so matching the emitted HTML attribute counts each block once.
  const PENDING_MARKUP = '<p class="eyebrow">Awaiting approved content</p>';
  let pending = 0;
  for (let at = body.indexOf(PENDING_MARKUP); at !== -1; at = body.indexOf(PENDING_MARKUP, at + 1)) pending += 1;
  pendingCounts.push([path, pending]);

  for (const href of internalLinks(body)) {
    if (!linkSources.has(href)) linkSources.set(href, new Set());
    linkSources.get(href).add(path);
    if (!visited.has(href)) queue.push(href);
  }
}

/* --- Cross-checks ----------------------------------------------------- */

const titles = new Map();
const descriptions = new Map();

for (const [path, meta] of seen) {
  if (meta.status !== 200) continue;
  if (meta.title) {
    if (!titles.has(meta.title)) titles.set(meta.title, []);
    titles.get(meta.title).push(path);
  }
  if (meta.description) {
    if (!descriptions.has(meta.description)) descriptions.set(meta.description, []);
    descriptions.get(meta.description).push(path);
  }
}

for (const [title, paths] of titles) {
  if (paths.length > 1) note("duplicate title", paths.join(", "), title.slice(0, 80));
}
for (const [description, paths] of descriptions) {
  if (paths.length > 1) note("duplicate description", paths.join(", "), description.slice(0, 80));
}

/* --- Report ----------------------------------------------------------- */

const bySite = new Map(SITES.map((site) => [site, []]));
for (const [path, meta] of seen) {
  const site = path.split("/")[2];
  if (bySite.has(site)) bySite.get(site).push({ path, ...meta });
}

console.log("\nEcosystem audit\n");
console.log("Site                Pages  OK   Awaiting approved content");
console.log("-".repeat(62));

let total = 0;
let totalOk = 0;
let totalPending = 0;
const pendingMap = new Map(pendingCounts);

for (const site of SITES) {
  const pages = bySite.get(site) ?? [];
  const ok = pages.filter((p) => p.status === 200).length;
  const pending = pages.reduce((sum, p) => sum + (pendingMap.get(p.path) ?? 0), 0);
  total += pages.length;
  totalOk += ok;
  totalPending += pending;
  console.log(
    `${site.padEnd(18)} ${String(pages.length).padStart(5)}  ${String(ok).padStart(3)}   ${String(pending).padStart(3)}`,
  );
}

console.log("-".repeat(62));
console.log(`${"TOTAL".padEnd(18)} ${String(total).padStart(5)}  ${String(totalOk).padStart(3)}   ${String(totalPending).padStart(3)}`);

if (problems.length === 0) {
  console.log("\nNo problems found.\n");
} else {
  console.log(`\n${problems.length} problem(s):\n`);
  for (const problem of problems) {
    console.log(`  [${problem.kind}] ${problem.where}`);
    console.log(`      ${problem.detail}`);
  }
  console.log("");
  process.exitCode = 1;
}
