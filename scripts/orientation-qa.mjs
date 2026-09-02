/**
 * Orientation and large-screen QA.
 *
 * Two failure modes that a width sweep cannot see, because both depend on the
 * viewport's *height* or on there being far more width than the design needs.
 *
 *  - Landscape. A phone turned sideways is the shortest viewport the site ever
 *    gets: roughly 390px of height, with a sticky header and, on some pages, a
 *    sticky section strip inside it. Anything sized against the viewport height
 *    and any fixed chrome that does not shrink shows up here and nowhere else.
 *
 *  - Very wide screens. The failure at 2560px is not overflow, it is content
 *    that keeps growing — an uncapped container, or a reading measure that runs
 *    past what anyone can comfortably read.
 *
 * Usage: node scripts/orientation-qa.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4382";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

/** One page per template family — a fault here is always systemic. */
const PAGES = [
  ["/", "Homepage"],
  ["/platform/", "Platform hub"],
  ["/platform/marketing-engine/", "Product"],
  ["/features/annual-calendar/", "Feature"],
  ["/solutions/build-a-marketing-system/", "Solution"],
  ["/industries/professional-services/", "Industry"],
  ["/use-cases/plan-a-year-of-content/", "Use case"],
  ["/channels/linkedin/", "Channel"],
  ["/compare/mengo-vs-a-marketing-agency/", "Comparison"],
  ["/resources/marketing-system-playbook/", "Guide"],
  ["/blog/ai-content-sounds-the-same/", "Article"],
  ["/glossary/positioning/", "Glossary term"],
  ["/company/about/", "Company"],
  ["/contact/", "Contact"],
  ["/get-started/", "Waitlist"],
  ["/sitemap/", "Page directory"],
  ["/faq/", "FAQ"],
  ["/s/docs/concepts/", "Docs article"],
  ["/s/status/", "Status board"],
];

const LANDSCAPE = [
  [844, 390, "iPhone 14 landscape"],
  [736, 414, "iPhone 8 Plus landscape"],
  [1024, 768, "iPad landscape"],
];

const WIDE = [1920, 2560, 3440];

const problems = [];
const browser = await chromium.launch({ executablePath: CHROME });

/* ------------------------------------------------------------------ */
/* Landscape                                                           */
/* ------------------------------------------------------------------ */

for (const [width, height, label] of LANDSCAPE) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    isMobile: width < 1024,
    hasTouch: width < 1024,
  });
  const page = await context.newPage();

  for (const [path, name] of PAGES) {
    await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 120000 });
    await page.waitForTimeout(400);

    const findings = await page.evaluate(() => {
      const out = [];
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (document.documentElement.scrollWidth > vw + 1) {
        out.push(`horizontal overflow ${document.documentElement.scrollWidth - vw}px`);
      }

      // Sticky chrome must not consume a short viewport.
      let chrome = 0;
      for (const el of document.querySelectorAll("header, .section-nav")) {
        const position = getComputedStyle(el).position;
        if (position !== "sticky" && position !== "fixed") continue;
        chrome += el.getBoundingClientRect().height;
      }
      if (chrome > vh * 0.4) {
        out.push(`sticky chrome ${Math.round(chrome)}px of a ${vh}px viewport`);
      }

      // A band pinned to more than the viewport height leaves a reader with
      // nothing on screen but the band.
      for (const el of document.querySelectorAll("main section, main > div > div")) {
        const box = el.getBoundingClientRect();
        if (box.width < vw * 0.8) continue;
        const minHeight = parseFloat(getComputedStyle(el).minHeight);
        if (Number.isFinite(minHeight) && minHeight > vh * 1.25) {
          out.push(`min-height ${Math.round(minHeight)}px against a ${vh}px viewport`);
          break;
        }
      }

      // Anything positioned fixed must stay inside the frame.
      for (const el of document.querySelectorAll("body *")) {
        if (getComputedStyle(el).position !== "fixed") continue;
        const box = el.getBoundingClientRect();
        if (box.width < 4 || box.height < 4) continue;
        if (box.right > vw + 2 || box.bottom > vh + 2 || box.left < -2) {
          out.push(`fixed element outside the frame (${Math.round(box.left)},${Math.round(box.top)} ${Math.round(box.width)}x${Math.round(box.height)})`);
          break;
        }
      }
      return out;
    });

    for (const finding of findings) problems.push(`${label} — ${name} ${path} — ${finding}`);
  }

  await context.close();
  console.log(`checked ${label} (${width}x${height})`);
}

/* ------------------------------------------------------------------ */
/* Very wide screens                                                   */
/* ------------------------------------------------------------------ */

for (const width of WIDE) {
  const context = await browser.newContext({ viewport: { width, height: 1080 }, deviceScaleFactor: 1 });
  const page = await context.newPage();

  for (const [path, name] of PAGES) {
    await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 120000 });
    // Images have to finish decoding before naturalWidth means anything.
    await page
      .waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 15000 })
      .catch(() => {});
    await page.waitForTimeout(600);

    const findings = await page.evaluate(() => {
      const out = [];

      // The container caps at 84rem; anything materially past that is uncapped.
      for (const el of document.querySelectorAll("main .container-page")) {
        const w = el.getBoundingClientRect().width;
        if (w > 1400) {
          out.push(`container ${Math.round(w)}px wide (cap is 1344px)`);
          break;
        }
      }

      // Reading measure.
      //
      // Measured from the text, not from the container. A paragraph's box is
      // as wide as whatever holds it; what matters is how long a *line* runs.
      // Only paragraphs with enough text to wrap are considered, and the width
      // is taken from a Range over the actual text nodes — an eyebrow reading
      // "496 pages" in a 736px container is not a 123-character line.
      for (const el of document.querySelectorAll("main p")) {
        const text = el.textContent.trim();
        if (text.length < 160) continue;
        if (el.closest("figcaption, footer, nav")) continue;
        const range = document.createRange();
        range.selectNodeContents(el);
        const rects = [...range.getClientRects()].filter((r) => r.width > 40 && r.height > 4);
        if (rects.length === 0) continue;
        const widest = Math.max(...rects.map((r) => r.width));
        const size = parseFloat(getComputedStyle(el).fontSize);
        const chars = widest / (size * 0.5);
        if (chars > 115) {
          out.push(`line measure ~${Math.round(chars)} characters (${Math.round(widest)}px)`);
          break;
        }
      }

      // An image scaled far past its intrinsic width goes soft.
      //
      // Only counted once the image has finished decoding: naturalWidth
      // reflects whatever variant is currently decoded, so measuring mid-load
      // reports the smaller candidate and invents an upscale that is not there.
      // The threshold is 2x rather than 1.5x deliberately — the photography is
      // capped at a 2000px source, which is sharp to roughly a 2000px viewport
      // and mildly soft beyond it. Raising that cap would more than double the
      // bytes every visitor downloads to sharpen ultrawide displays, which is a
      // worse trade than the softness.
      for (const img of document.querySelectorAll("main img")) {
        // offsetWidth, not getBoundingClientRect: the photo bands carry a
        // scale(1.06) parallax transform, and the client rect includes it. That
        // is an animation, not layout — measuring it reported every hero as 6%
        // wider than it is laid out and manufactured an upscale.
        const width = img.offsetWidth;
        if (width < 40 || !img.complete || !img.naturalWidth) continue;
        if (width > img.naturalWidth * 2) {
          out.push(`image upscaled ${width}px from ${img.naturalWidth}px source`);
          break;
        }
      }
      return out;
    });

    for (const finding of findings) problems.push(`${width}px — ${name} ${path} — ${finding}`);
  }

  await context.close();
  console.log(`checked ${width}px`);
}

await browser.close();

console.log("");
if (problems.length === 0) {
  console.log("Orientation and large-screen QA: no problems found.");
  process.exit(0);
}
console.log(`Orientation and large-screen QA: ${problems.length} problem(s)`);
for (const problem of problems.slice(0, 60)) console.log(`  ${problem}`);
process.exit(1);
