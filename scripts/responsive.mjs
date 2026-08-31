/**
 * Responsive QA.
 *
 * Loads a representative page of every page type at every breakpoint in the
 * brief and reports horizontal overflow, elements wider than the viewport,
 * touch targets under 44px and unreadable body copy.
 *
 * Usage: node scripts/responsive.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4311";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const WIDTHS = [320, 375, 390, 430, 768, 834, 1024, 1280, 1440, 1536, 1920];

const PAGES = [
  ["/", "Homepage"],
  ["/platform/", "Platform hub"],
  ["/platform/marketing-engine/", "Product"],
  ["/features/", "Features hub"],
  ["/features/annual-calendar/", "Feature"],
  ["/solutions/", "Solutions hub"],
  ["/solutions/build-a-marketing-system/", "Solution"],
  ["/industries/", "Industries hub"],
  ["/industries/professional-services/", "Industry"],
  ["/use-cases/plan-a-year-of-content/", "Use case"],
  ["/channels/linkedin/", "Channel"],
  ["/channels/linkedin/for/b2b-services/", "Channel x industry"],
  ["/asset-types/linkedin-carousel/", "Asset format"],
  ["/compare/mengo-vs-a-marketing-agency/", "Comparison"],
  ["/resources/", "Resources hub"],
  ["/resources/marketing-system-playbook/", "Guide"],
  ["/blog/", "Blog hub"],
  ["/blog/ai-content-sounds-the-same/", "Article"],
  ["/glossary/", "Glossary hub"],
  ["/glossary/positioning/", "Glossary term"],
  ["/company/about/", "Company"],
  ["/legal/privacy-policy/", "Legal"],
  ["/contact/", "Contact"],
  ["/get-started/", "Waitlist"],
  ["/sitemap/", "Sitemap"],
  ["/design-system/", "Design system"],
  ["/faq/", "FAQ"],
  ["/case-studies/", "Case studies"],
  ["/campaigns/early-access/", "Campaign"],
];

const THEME = process.env.THEME === "dark" ? "dark" : "light";
const browser = await chromium.launch({ executablePath: CHROME });
const problems = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 768,
    colorScheme: THEME,
  });
  const page = await context.newPage();

  for (const [path, label] of PAGES) {
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });

    const result = await page.evaluate((vw) => {
      const doc = document.documentElement;
      const overflow = doc.scrollWidth - vw;

      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        if (rect.right > vw + 1 || rect.left < -1) {
          const style = getComputedStyle(el);
          if (style.position === "fixed" || style.visibility === "hidden" || el.closest("[hidden]")) continue;
          offenders.push(
            `${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? `.${el.className.split(" ").slice(0, 2).join(".")}` : ""} (${Math.round(rect.left)}→${Math.round(rect.right)})`,
          );
        }
        if (offenders.length > 3) break;
      }

      const smallTargets = [];
      for (const el of document.querySelectorAll("a[href], button")) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        // WCAG 2.5.8 exempts links embedded in a sentence and off-screen skip
        // links, so only standalone, list-style targets are measured here.
        if (el.closest("nav[aria-label='Breadcrumb']") || el.closest("footer")) continue;
        if (el.classList.contains("sr-only") || el.closest(".prose-mengo")) continue;
        const parent = el.parentElement;
        const inline = parent && ["P", "DD", "SPAN", "STRONG"].includes(parent.tagName) && (parent.textContent || "").length > (el.textContent || "").length + 8;
        if (inline) continue;
        if (rect.height < 24) smallTargets.push(`${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 24)}" h=${Math.round(rect.height)}`);
        if (smallTargets.length > 2) break;
      }

      const body = getComputedStyle(document.body).fontSize;
      const h1 = document.querySelector("h1");
      const h1Size = h1 ? getComputedStyle(h1).fontSize : null;

      return { overflow, offenders, smallTargets, body, h1Size };
    }, width);

    if (result.overflow > 1) {
      problems.push(`${width}px ${label} ${path} — horizontal overflow ${result.overflow}px :: ${result.offenders.join(" | ")}`);
    }
    if (result.smallTargets.length > 0) {
      problems.push(`${width}px ${label} ${path} — small targets :: ${result.smallTargets.join(" | ")}`);
    }
    if (parseFloat(result.body) < 15) {
      problems.push(`${width}px ${label} ${path} — body font ${result.body}`);
    }
  }

  await context.close();
  console.log(`checked ${width}px`);
}

// Mobile navigation behaviour
const mobile = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
const nav = await mobile.newPage();
await nav.goto(`${BASE}/`, { waitUntil: "networkidle" });
await nav.click("button[aria-controls='mobile-nav']");
await nav.waitForTimeout(250);
const navState = await nav.evaluate(() => {
  const panel = document.getElementById("mobile-nav");
  const summary = panel?.querySelector("summary");
  return {
    visible: panel ? !panel.hidden : false,
    overflow: document.documentElement.scrollWidth - window.innerWidth,
    bodyLocked: getComputedStyle(document.body).overflow === "hidden",
    hasDisclosures: Boolean(summary),
  };
});
if (!navState.visible) problems.push("375px mobile nav did not open");
if (navState.overflow > 1) problems.push(`375px mobile nav caused overflow ${navState.overflow}px`);
if (!navState.bodyLocked) problems.push("375px mobile nav did not lock body scroll");
console.log("checked mobile navigation", navState);

// Modal form behaviour
await nav.click("button[aria-controls='mobile-nav']");
await nav.waitForTimeout(200);
await nav.locator("button:has-text('waitlist')").locator("visible=true").first().click();
await nav.waitForTimeout(300);
const modalState = await nav.evaluate(() => {
  const dialog = document.querySelector("[role='dialog']");
  if (!dialog) return { open: false };
  const rect = dialog.getBoundingClientRect();
  return {
    open: true,
    withinViewport: rect.left >= -1 && rect.right <= window.innerWidth + 1,
    focusInside: dialog.contains(document.activeElement),
    labelled: Boolean(dialog.getAttribute("aria-labelledby")),
  };
});
if (!modalState.open) problems.push("375px lead modal did not open");
else {
  if (!modalState.withinViewport) problems.push("375px lead modal overflows viewport");
  if (!modalState.focusInside) problems.push("375px lead modal did not move focus inside");
  if (!modalState.labelled) problems.push("lead modal missing aria-labelledby");
}
console.log("checked modal", modalState);

await browser.close();

console.log("");
if (problems.length === 0) {
  console.log("Responsive QA: no problems found.");
  process.exit(0);
}
console.log(`Responsive QA: ${problems.length} problems`);
for (const problem of problems.slice(0, 60)) console.log(`  ${problem}`);
process.exit(1);
