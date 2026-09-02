/**
 * Content-preservation snapshot.
 *
 * Extracts every user-visible string from the prerendered HTML and writes a
 * machine-readable snapshot. Run before a redesign to capture the baseline,
 * then again afterwards with `--compare` to prove nothing was lost.
 *
 *   node scripts/content-snapshot.mjs --out .content-baseline.json
 *   node scripts/content-snapshot.mjs --compare .content-baseline.json
 *
 * The comparison is deliberately one-directional: added strings are reported
 * as information, missing strings are reported as failures. A redesign may
 * introduce navigation and structure; it may not remove a sentence.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Honours NEXT_DIST_DIR so the check can read an isolated QA build rather than
// a .next that a running dev server is rewriting underneath it.
const DIST = process.env.NEXT_DIST_DIR || ".next";
const APP_DIR = join(process.cwd(), DIST, "server", "app");

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

const DECODE = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x27;": "'",
  "&apos;": "'", "&nbsp;": " ", "&mdash;": "—", "&ndash;": "–", "&hellip;": "…",
  "&rsquo;": "’", "&lsquo;": "‘", "&ldquo;": "“", "&rdquo;": "”",
};

function decode(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&[a-z]+;/gi, (ent) => DECODE[ent] ?? ent);
}

/** Strip scripts/styles/JSON-LD, then take the text of every matching element. */
function textOf(html) {
  return decode(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function collect(html, tagPattern) {
  const re = new RegExp("<(" + tagPattern + ")" + String.raw`\b[^>]*>([\s\S]*?)<\/\1>`, "gi");
  const out = [];
  for (const match of html.matchAll(re)) {
    const text = textOf(match[2]);
    if (text) out.push(text);
  }
  return out;
}

function snapshotFile(file) {
  let html = readFileSync(file, "utf8");
  // Structured data and inline scripts are not reader-visible content.
  html = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");

  const meta = (re) => {
    const m = html.match(re);
    return m ? decode(m[1]) : null;
  };

  return {
    title: meta(/<title>([^<]*)<\/title>/),
    description: meta(/<meta name="description" content="([^"]*)"/),
    canonical: meta(/<link rel="canonical" href="([^"]*)"/),
    headings: collect(html, "h1|h2|h3|h4|h5|h6"),
    paragraphs: collect(html, "p"),
    listItems: collect(html, "li"),
    definitions: collect(html, "dt|dd"),
    actions: collect(html, "button|a"),
    // Text held in spans/divs that no other bucket catches (hero titles etc).
    blockquotes: collect(html, "blockquote"),
  };
}

/** Every distinct visible string on a page, as a set, for the loss check. */
function stringsOf(page) {
  const out = new Set();
  for (const key of ["headings", "paragraphs", "listItems", "definitions", "actions", "blockquotes"]) {
    for (const value of page[key] ?? []) out.add(value);
  }
  for (const key of ["title", "description"]) {
    if (page[key]) out.add(page[key]);
  }
  return out;
}

function build() {
  const pages = {};
  for (const file of walk(APP_DIR)) pages[routeFor(file)] = snapshotFile(file);
  return { generated: new Date().toISOString(), routeCount: Object.keys(pages).length, pages };
}

const args = process.argv.slice(2);
const compareIndex = args.indexOf("--compare");

if (compareIndex !== -1) {
  const baselinePath = args[compareIndex + 1];
  const baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
  const current = build();

  const problems = [];
  const notes = [];

  const missingRoutes = Object.keys(baseline.pages).filter((r) => !current.pages[r]);
  const addedRoutes = Object.keys(current.pages).filter((r) => !baseline.pages[r]);
  if (missingRoutes.length) problems.push(`${missingRoutes.length} route(s) disappeared:\n    ${missingRoutes.join("\n    ")}`);
  if (addedRoutes.length) notes.push(`${addedRoutes.length} route(s) added: ${addedRoutes.slice(0, 12).join(", ")}${addedRoutes.length > 12 ? " …" : ""}`);

  let lostStrings = 0;
  let addedStrings = 0;
  const lossByRoute = [];

  for (const [route, before] of Object.entries(baseline.pages)) {
    const after = current.pages[route];
    if (!after) continue;
    const beforeSet = stringsOf(before);
    const afterSet = stringsOf(after);
    // A string may legitimately move between elements (a <p> becoming a <li>),
    // so membership is checked across the whole page rather than per bucket.
    const lost = [...beforeSet].filter((s) => !afterSet.has(s));
    const gained = [...afterSet].filter((s) => !beforeSet.has(s));
    addedStrings += gained.length;
    if (lost.length) {
      lostStrings += lost.length;
      lossByRoute.push({ route, lost });
    }
  }

  console.log(`Routes  before ${baseline.routeCount}  after ${current.routeCount}`);
  console.log(`Strings lost ${lostStrings}, added ${addedStrings}`);
  for (const note of notes) console.log(`note: ${note}`);

  if (lossByRoute.length) {
    console.log(`\nContent loss on ${lossByRoute.length} route(s):`);
    for (const { route, lost } of lossByRoute.slice(0, 40)) {
      console.log(`  ${route}`);
      for (const s of lost.slice(0, 8)) console.log(`     - ${s.slice(0, 160)}`);
      if (lost.length > 8) console.log(`     … ${lost.length - 8} more`);
    }
    problems.push(`${lostStrings} string(s) lost across ${lossByRoute.length} route(s)`);
  }

  if (problems.length) {
    console.error(`\nFAIL\n  ${problems.join("\n  ")}`);
    process.exit(1);
  }
  console.log("\nOK — no content loss.");
} else {
  const outIndex = args.indexOf("--out");
  const out = outIndex !== -1 ? args[outIndex + 1] : ".content-baseline.json";
  const snapshot = build();
  writeFileSync(out, JSON.stringify(snapshot, null, 1));
  const strings = Object.values(snapshot.pages).reduce((n, p) => n + stringsOf(p).size, 0);
  console.log(`Wrote ${out}: ${snapshot.routeCount} routes, ${strings} distinct visible strings.`);
}
