/**
 * Final production QA.
 *
 * Covers what the other gates cannot see, because it requires a real browser:
 * console and hydration errors, heading hierarchy, colour contrast against the
 * actual computed styles, layout shift, and focus visibility.
 *
 * The other three gates stay separate and keep their own jobs:
 *   validate      — the content data
 *   audit         — rendered metadata and link resolution
 *   seo-graph     — the internal link graph
 *   qa:responsive — overflow and tap targets across widths
 *
 * Usage: node scripts/final-qa.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4370";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

/** One page per type, so a systemic fault shows up once per template. */
const PAGES = [
  ["/", "Homepage"],
  ["/platform/", "Platform hub"],
  ["/platform/marketing-engine/", "Product"],
  ["/features/annual-calendar/", "Feature"],
  ["/solutions/build-a-marketing-system/", "Solution"],
  ["/industries/professional-services/", "Industry"],
  ["/use-cases/plan-a-year-of-content/", "Use case"],
  ["/channels/linkedin/", "Channel"],
  ["/channels/linkedin/for/b2b-services/", "SEO landing"],
  ["/asset-types/linkedin-carousel/", "Asset format"],
  ["/compare/mengo-vs-a-marketing-agency/", "Comparison"],
  ["/resources/marketing-system-playbook/", "Resource"],
  ["/blog/hire-or-tool/", "Article"],
  ["/glossary/positioning/", "Glossary"],
  ["/faq/", "FAQ"],
  ["/case-studies/", "Case studies"],
  ["/campaigns/early-access/", "Campaign"],
  ["/company/about/", "Company"],
  ["/legal/privacy-policy/", "Legal"],
  ["/contact/", "Contact"],
  ["/get-started/", "Waitlist"],
  ["/sitemap/", "Sitemap"],
  ["/does-not-exist-abc123/", "404"],
];

const problems = [];
const note = (kind, where, detail) => problems.push({ kind, where, detail });

const THEME = process.env.THEME === "dark" ? "dark" : "light";
const browser = await chromium.launch({ executablePath: CHROME });
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  colorScheme: THEME,
});

/* Relative luminance and contrast ratio, per WCAG 2.1. */
const CONTRAST_FN = `
function parseRgb(value) {
  const m = value.match(/rgba?\\(([^)]+)\\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((n) => parseFloat(n));
  return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] === undefined ? 1 : parts[3] };
}
function luminance({ r, g, b }) {
  const chan = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * chan[0] + 0.7152 * chan[1] + 0.0722 * chan[2];
}
function effectiveBackground(el) {
  let node = el;
  while (node && node !== document.documentElement) {
    const bg = parseRgb(getComputedStyle(node).backgroundColor);
    if (bg && bg.a > 0.5) return bg;
    node = node.parentElement;
  }
  return { r: 255, g: 255, b: 255, a: 1 };
}
function contrast(el) {
  const fg = parseRgb(getComputedStyle(el).color);
  const bg = effectiveBackground(el);
  if (!fg || !bg) return null;
  const l1 = luminance(fg), l2 = luminance(bg);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
`;

for (const [path, label] of PAGES) {
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text().slice(0, 160));
  });
  page.on("pageerror", (err) => consoleErrors.push(`uncaught: ${String(err).slice(0, 160)}`));

  const response = await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
  const status = response?.status() ?? 0;

  if (path === "/does-not-exist-abc123/") {
    const notFound = await page.evaluate(() => ({
      h1: document.querySelector("h1")?.textContent?.trim(),
      links: document.querySelectorAll("main a[href]").length,
      hasNav: !!document.querySelector("header"),
    }));
    if (status !== 404) note("404-status", path, `returned ${status}`);
    if (!notFound.h1) note("404-content", path, "no h1");
    if (notFound.links < 3) note("404-content", path, `${notFound.links} recovery links`);
    await page.close();
    continue;
  }

  if (status !== 200) note("bad-status", path, `${label} returned ${status}`);

  const result = await page.evaluate(
    ({ contrastSrc }) => {
      eval(contrastSrc);

      // Heading hierarchy: exactly one h1, and no skipped levels.
      const headings = [...document.querySelectorAll("main h1, main h2, main h3, main h4")].map((h) =>
        Number(h.tagName[1]),
      );
      const h1Count = headings.filter((l) => l === 1).length;
      const skips = [];
      for (let i = 1; i < headings.length; i += 1) {
        if (headings[i] - headings[i - 1] > 1) skips.push(`h${headings[i - 1]} -> h${headings[i]}`);
      }

      // Contrast on a sample of real text nodes.
      const lowContrast = [];
      const ownsText = (el) =>
        [...el.childNodes].some((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 3);
      const sample = [
        ...document.querySelectorAll(
          "main p, main li, main a, main span, main h1, main h2, main h3, footer p, footer a, footer li",
        ),
      ]
        .filter((el) => ownsText(el) && el.offsetParent !== null)
        .slice(0, 260);
      for (const el of sample) {
        // eslint-disable-next-line no-undef
        const ratio = contrast(el);
        if (ratio === null) continue;
        const style = getComputedStyle(el);
        const size = parseFloat(style.fontSize);
        const bold = Number(style.fontWeight) >= 700;
        const large = size >= 24 || (size >= 18.66 && bold);
        const required = large ? 3 : 4.5;
        if (ratio < required) {
          lowContrast.push(
            `${el.tagName.toLowerCase()} "${el.textContent.trim().slice(0, 28)}" ${ratio.toFixed(2)}:1 (needs ${required})`,
          );
        }
        if (lowContrast.length > 4) break;
      }

      // Landmarks and document basics.
      const langAttr = document.documentElement.lang;
      const mainCount = document.querySelectorAll("main").length;

      // Images: dimensions present, alt handled.
      const imageIssues = [];
      for (const img of document.querySelectorAll("img")) {
        if (!img.hasAttribute("alt")) imageIssues.push(`missing alt: ${img.src.slice(-40)}`);
        if (!img.width || !img.height) imageIssues.push(`no intrinsic size: ${img.src.slice(-40)}`);
      }

      return {
        h1Count,
        skips,
        lowContrast,
        langAttr,
        mainCount,
        imageIssues,
        title: document.title,
      };
    },
    { contrastSrc: CONTRAST_FN },
  );

  if (result.h1Count !== 1) note("heading-h1", path, `${result.h1Count} h1 in main`);
  if (result.skips.length) note("heading-skip", path, result.skips.join(", "));
  if (result.lowContrast.length) note("contrast", path, result.lowContrast.join(" | "));
  if (result.langAttr !== "en") note("lang", path, `lang="${result.langAttr}"`);
  if (result.mainCount !== 1) note("landmark", path, `${result.mainCount} <main> elements`);
  if (result.imageIssues.length) note("image", path, result.imageIssues.join(" | "));
  if (consoleErrors.length) note("console", path, consoleErrors.slice(0, 2).join(" | "));

  // Layout shift after load — the reveal animation must not move layout.
  const cls = await page.evaluate(
    () =>
      new Promise((resolve) => {
        let total = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) if (!entry.hadRecentInput) total += entry.value;
        });
        try {
          observer.observe({ type: "layout-shift", buffered: true });
        } catch {
          resolve(-1);
          return;
        }
        window.scrollTo(0, document.body.scrollHeight / 2);
        setTimeout(() => {
          observer.disconnect();
          resolve(total);
        }, 900);
      }),
  );
  if (cls > 0.1) note("cls", path, `layout shift ${cls.toFixed(3)} after scroll`);

  await page.close();
}

/* Focus visibility, checked once — it is a global style. */
const focusPage = await context.newPage();
await focusPage.goto(`${BASE}/platform/`, { waitUntil: "networkidle" });
await focusPage.keyboard.press("Tab");
await focusPage.keyboard.press("Tab");
const focusStyle = await focusPage.evaluate(() => {
  const el = document.activeElement;
  const style = getComputedStyle(el);
  return { tag: el?.tagName, outlineWidth: style.outlineWidth, outlineStyle: style.outlineStyle };
});
if (focusStyle.outlineStyle === "none" || parseFloat(focusStyle.outlineWidth) === 0) {
  note("focus", "/platform/", `no visible focus ring on ${focusStyle.tag}`);
}
await focusPage.close();

await browser.close();

/* ------------------------------- report ------------------------------- */

console.log(`Final QA (${THEME} theme): ${PAGES.length} page types checked in a real browser.\n`);

if (problems.length === 0) {
  console.log("No problems found.");
  process.exit(0);
}

const grouped = new Map();
for (const problem of problems) {
  const bucket = grouped.get(problem.kind) ?? [];
  bucket.push(problem);
  grouped.set(problem.kind, bucket);
}
for (const [kind, items] of grouped) {
  console.log(`${kind} (${items.length})`);
  for (const item of items.slice(0, 10)) console.log(`  ${item.where} — ${item.detail}`);
  if (items.length > 10) console.log(`  …and ${items.length - 10} more`);
  console.log("");
}
process.exit(1);
