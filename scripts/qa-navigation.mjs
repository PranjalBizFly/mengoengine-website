/**
 * Browser QA for the navigation systems this redesign added.
 *
 * The other gates cover the page templates; none of them exercise an overlay,
 * a keyboard shortcut or a filter. This checks the three interactive systems
 * end to end, because each one fails silently: search that returns nothing,
 * a section strip that never highlights, a filter that hides a row and cannot
 * bring it back are all invisible to a static audit.
 *
 * Usage: node scripts/qa-navigation.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4333";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const problems = [];
const fail = (where, detail) => problems.push(`${where}: ${detail}`);

const browser = await chromium.launch({ executablePath: CHROME });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

/* ------------------------------------------------------------------ */
/* Global search                                                       */
/* ------------------------------------------------------------------ */
{
  const page = await context.newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

  // Opens on "/" without a pointer anywhere near the header.
  await page.keyboard.press("/");
  await page.waitForTimeout(350);
  let state = await page.evaluate(() => {
    const dialog = document.querySelector("[role='dialog'][aria-modal='true']");
    const input = dialog?.querySelector("input[role='combobox']");
    return {
      open: Boolean(dialog),
      focused: Boolean(input && document.activeElement === input),
      labelled: Boolean(dialog?.getAttribute("aria-labelledby")),
    };
  });
  if (!state.open) fail("search", "did not open on /");
  if (!state.focused) fail("search", "did not focus the input on open");
  if (!state.labelled) fail("search", "dialog has no aria-labelledby");

  // Typing narrows to real results, grouped and marked up as a listbox.
  await page.keyboard.type("calendar");
  await page.waitForTimeout(450);
  const results = await page.evaluate(() => {
    const options = [...document.querySelectorAll("[role='option']")];
    return {
      count: options.length,
      selected: options.filter((o) => o.getAttribute("aria-selected") === "true").length,
      firstHref: options[0]?.getAttribute("href") ?? null,
      groups: [...document.querySelectorAll("[role='listbox'] .eyebrow")].map((e) => e.textContent?.trim()),
    };
  });
  if (results.count === 0) fail("search", 'no results for "calendar"');
  if (results.selected !== 1) fail("search", `${results.selected} options marked selected, expected 1`);
  if (results.groups.length === 0) fail("search", "results are not grouped by kind");

  // Arrow keys move the selection.
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(150);
  const moved = await page.evaluate(() => {
    const options = [...document.querySelectorAll("[role='option']")];
    return options.findIndex((o) => o.getAttribute("aria-selected") === "true");
  });
  if (moved !== 1) fail("search", `ArrowDown left selection at index ${moved}, expected 1`);

  // Enter navigates to the highlighted result.
  const target = await page.evaluate(
    () => document.querySelectorAll("[role='option']")[1]?.getAttribute("href") ?? null,
  );
  await page.keyboard.press("Enter");
  await page.waitForTimeout(900);
  const landed = new URL(page.url()).pathname;
  if (target && landed !== target) fail("search", `Enter went to ${landed}, expected ${target}`);

  // Escape closes, and focus returns to the control that opened it.
  await page.keyboard.press("/");
  await page.waitForTimeout(300);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  state = await page.evaluate(() => ({
    open: Boolean(document.querySelector("[role='dialog'][aria-modal='true']")),
    bodyLocked: getComputedStyle(document.body).overflow === "hidden",
  }));
  if (state.open) fail("search", "Escape did not close the dialog");
  if (state.bodyLocked) fail("search", "body scroll left locked after close");

  // A query with no matches still offers a way out.
  await page.keyboard.press("/");
  await page.waitForTimeout(300);
  await page.keyboard.type("zzzzqqq");
  await page.waitForTimeout(400);
  const empty = await page.evaluate(() => {
    const dialog = document.querySelector("[role='dialog']");
    return {
      options: document.querySelectorAll("[role='option']").length,
      hasSitemapLink: Boolean(dialog?.querySelector("a[href='/sitemap/']")),
    };
  });
  if (empty.options !== 0) fail("search", "no-match query still rendered options");
  if (!empty.hasSitemapLink) fail("search", "empty state offers no recovery link");
  await page.close();
}

/* ------------------------------------------------------------------ */
/* Section navigation                                                  */
/* ------------------------------------------------------------------ */
{
  const page = await context.newPage();
  await page.goto(`${BASE}/platform/marketing-engine/`, { waitUntil: "networkidle" });

  const nav = await page.evaluate(() => {
    const strip = document.querySelector("nav.section-nav");
    const chips = [...(strip?.querySelectorAll("a[data-chip]") ?? [])];
    return {
      present: Boolean(strip),
      chips: chips.length,
      // Every chip must point at a section that exists on this page.
      dangling: chips.filter((c) => !document.getElementById(c.getAttribute("data-chip"))).length,
      sticky: strip ? getComputedStyle(strip).position : null,
      current: chips.filter((c) => c.getAttribute("aria-current") === "true").length,
    };
  });
  if (!nav.present) fail("section-nav", "not rendered on a product page");
  if (nav.chips < 2) fail("section-nav", `${nav.chips} chips, expected at least 2`);
  if (nav.dangling > 0) fail("section-nav", `${nav.dangling} chip(s) point at a missing section`);
  if (nav.sticky !== "sticky") fail("section-nav", `position is ${nav.sticky}, expected sticky`);
  if (nav.current !== 1) fail("section-nav", `${nav.current} chips marked current, expected 1`);

  // Scrolling to a later section moves the highlight. Positioned explicitly
  // and instantly: `scrollIntoView` inherits the site's smooth scrolling, and
  // asserting mid-animation measures the easing rather than the behaviour.
  await page.evaluate(() => {
    const section = document.getElementById("capabilities");
    if (!section) return;
    window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top - 100, behavior: "instant" });
  });
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => {
    const active = document.querySelector("nav.section-nav a[aria-current='true']");
    return active?.getAttribute("data-chip") ?? null;
  });
  if (after !== "capabilities") fail("section-nav", `highlight is "${after}" after scrolling to capabilities`);

  // The anchor must land clear of both fixed bars.
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(200);
  await page.click("nav.section-nav a[data-chip='questions']");
  await page.waitForTimeout(900);
  const cleared = await page.evaluate(() => {
    const section = document.getElementById("questions");
    const strip = document.querySelector("nav.section-nav");
    if (!section || !strip) return null;
    return section.getBoundingClientRect().top - strip.getBoundingClientRect().bottom;
  });
  if (cleared !== null && cleared < 0) {
    fail("section-nav", `anchor lands ${Math.round(cleared)}px under the sticky strip`);
  }
  await page.close();
}

/* ------------------------------------------------------------------ */
/* Hub filtering                                                       */
/* ------------------------------------------------------------------ */
{
  const page = await context.newPage();
  await page.goto(`${BASE}/features/`, { waitUntil: "networkidle" });

  const initial = await page.evaluate(() => document.querySelectorAll("main a[href^='/features/']").length);
  if (initial < 40) fail("filter", `only ${initial} capabilities in the unfiltered DOM`);

  await page.fill("main input[type='search']", "calendar");
  await page.waitForTimeout(450);
  const narrowed = await page.evaluate(() => document.querySelectorAll("main a[href^='/features/']").length);
  if (narrowed >= initial) fail("filter", "search did not narrow the listing");
  if (narrowed === 0) fail("filter", 'search for "calendar" matched nothing');

  // A facet is a toggle: pressing it twice returns to everything.
  await page.fill("main input[type='search']", "");
  await page.waitForTimeout(300);
  const facet = page.locator("main button[aria-pressed]").nth(1);
  await facet.click();
  await page.waitForTimeout(350);
  const faceted = await page.evaluate(() => document.querySelectorAll("main a[href^='/features/']").length);
  if (faceted >= initial) fail("filter", "facet did not narrow the listing");
  await facet.click();
  await page.waitForTimeout(350);
  const restored = await page.evaluate(() => document.querySelectorAll("main a[href^='/features/']").length);
  if (restored !== initial) fail("filter", `toggling the facet off restored ${restored} of ${initial}`);

  // The empty state has to offer a way back.
  await page.fill("main input[type='search']", "zzzzqqq");
  await page.waitForTimeout(400);
  const recovery = await page.evaluate(() =>
    Boolean([...document.querySelectorAll("main button")].find((b) => /clear the filters/i.test(b.textContent ?? ""))),
  );
  if (!recovery) fail("filter", "empty state has no clear-filters control");
  await page.close();
}

/* ------------------------------------------------------------------ */
/* Sequential navigation                                               */
/* ------------------------------------------------------------------ */
{
  const page = await context.newPage();
  await page.goto(`${BASE}/glossary/positioning/`, { waitUntil: "networkidle" });
  const prevNext = await page.evaluate(() => {
    const nav = [...document.querySelectorAll("main nav")].find((n) =>
      /Previous and next/i.test(n.getAttribute("aria-label") ?? ""),
    );
    const links = [...(nav?.querySelectorAll("a[rel]") ?? [])];
    return {
      present: Boolean(nav),
      rels: links.map((l) => l.getAttribute("rel")),
      hrefs: links.map((l) => l.getAttribute("href")),
    };
  });
  if (!prevNext.present) fail("prev-next", "not rendered on a glossary term");
  if (prevNext.hrefs.some((h) => !h?.startsWith("/glossary/"))) {
    fail("prev-next", `links leave the sequence: ${prevNext.hrefs.join(", ")}`);
  }
  await page.close();
}

/* ------------------------------------------------------------------ */
/* Reduced motion                                                      */
/* ------------------------------------------------------------------ */
{
  const reduced = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await reduced.newPage();
  await page.goto(`${BASE}/platform/marketing-engine/`, { waitUntil: "networkidle" });
  const state = await page.evaluate(() => {
    const hidden = [...document.querySelectorAll("[data-reveal]")].filter(
      (el) => Number(getComputedStyle(el).opacity) < 0.99,
    ).length;
    return { hiddenReveals: hidden, progress: getComputedStyle(document.querySelector(".scroll-progress")).display };
  });
  if (state.hiddenReveals > 0) fail("reduced-motion", `${state.hiddenReveals} elements still hidden by reveal`);
  if (state.progress !== "none") fail("reduced-motion", "scroll progress bar still painted");
  await page.close();
}

await browser.close();

console.log("");
if (problems.length === 0) {
  console.log("Navigation QA: no problems found.");
  process.exit(0);
}
console.log(`Navigation QA: ${problems.length} problems`);
for (const problem of problems) console.log(`  ${problem}`);
process.exit(1);
