/**
 * Functional QA.
 *
 * The other browser gates check how the site *looks* under stress: overflow,
 * contrast, tap targets, layout shift. This one checks whether the things a
 * visitor clicks actually do anything.
 *
 * It drives each interactive component the site owns and asserts the observable
 * outcome rather than the implementation — a mega menu is working when its
 * panel is on screen and its links are reachable, not when a class is present.
 * Every check runs at both a desktop and a phone width, because most of these
 * components have two entirely different implementations and only one of them
 * is usually tested.
 *
 * Usage: node scripts/functional-qa.mjs [baseUrl]
 */
import { chromium } from "playwright-core";

const BASE = process.argv[2] ?? "http://localhost:4380";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const problems = [];
const note = (where, detail) => problems.push({ where, detail });
const checks = [];
const pass = (name) => checks.push(name);

const browser = await chromium.launch({ executablePath: CHROME });

/** A context sized for one of the two layouts the site ships. */
async function open(width, path = "/") {
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 844 : 900 },
    isMobile: width < 768,
    hasTouch: width < 768,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text().slice(0, 200));
  });
  await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 120000 });
  await page.waitForTimeout(900);
  return { context, page, errors };
}

/* ------------------------------------------------------------------ */
/* Desktop navigation                                                  */
/* ------------------------------------------------------------------ */
{
  const { context, page, errors } = await open(1440, "/");

  // Mega menu: hovering a group has to put its panel on screen with links in it.
  const trigger = page.locator('header button[aria-haspopup="true"]').first();
  const label = (await trigger.textContent())?.trim().split("\n")[0] ?? "?";
  await trigger.hover();
  await page.waitForTimeout(500);

  const panel = await page.evaluate(() => {
    const el = document.querySelector(".mega-panel");
    if (!el) return null;
    const box = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return {
      links: el.querySelectorAll("a[href]").length,
      visible: box.height > 40 && style.opacity !== "0" && style.visibility !== "hidden",
      withinViewport: box.left >= -1 && box.right <= window.innerWidth + 1,
      height: Math.round(box.height),
    };
  });

  if (!panel) note("mega menu", `hovering "${label}" produced no panel`);
  else if (!panel.visible) note("mega menu", `panel present but not visible (h=${panel.height})`);
  else if (panel.links === 0) note("mega menu", "panel has no links");
  else if (!panel.withinViewport) note("mega menu", "panel overflows the viewport horizontally");
  else pass(`mega menu opens with ${panel.links} links`);

  // aria-expanded has to track the open state, or the menu is invisible to AT.
  const expanded = await trigger.getAttribute("aria-expanded");
  if (expanded !== "true") note("mega menu", `aria-expanded is "${expanded}" while open`);
  else pass("mega menu reports aria-expanded");

  // Escape closes it.
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  const afterEscape = await page.locator(".mega-panel").count();
  if (afterEscape > 0) note("mega menu", "Escape did not close the panel");
  else pass("mega menu closes on Escape");

  // The panel must be keyboard-reachable: focusing the trigger opens it.
  await trigger.focus();
  await page.waitForTimeout(400);
  if ((await page.locator(".mega-panel").count()) === 0)
    note("mega menu", "focusing the trigger does not open the panel (keyboard users cannot reach it)");
  else pass("mega menu opens on keyboard focus");

  if (errors.length) note("console (desktop home)", errors.slice(0, 2).join(" | "));
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Search dialog                                                       */
/* ------------------------------------------------------------------ */
{
  const { context, page, errors } = await open(1440, "/");

  // The "/" hotkey is the documented shortcut.
  await page.keyboard.press("/");
  await page.waitForTimeout(700);
  let dialog = await page.locator('[role="dialog"]').count();
  if (dialog === 0) {
    note("search", "the / hotkey did not open the dialog");
  } else {
    pass("search opens on /");
    await page.fill('[role="dialog"] input[type="search"]', "linkedin");
    await page.waitForTimeout(900);
    const results = await page.evaluate(() => {
      const options = [...document.querySelectorAll('[role="option"]')];
      return { count: options.length, first: options[0]?.getAttribute("href") ?? null };
    });
    if (results.count === 0) note("search", 'querying "linkedin" returned no results');
    else if (!results.first) note("search", "results are not links");
    else pass(`search returns ${results.count} results, first -> ${results.first}`);

    // Arrow keys and Enter are the advertised interaction.
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(200);
    const active = await page.evaluate(
      () => document.querySelector('[role="option"][aria-selected="true"]')?.getAttribute("href") ?? null,
    );
    if (!active) note("search", "ArrowDown does not move the active option");
    else pass("search keyboard navigation moves selection");

    await page.keyboard.press("Escape");
    await page.waitForTimeout(400);
    dialog = await page.locator('[role="dialog"]').count();
    if (dialog > 0) note("search", "Escape did not close the dialog");
    else pass("search closes on Escape");

    // The scroll lock must be released, or the page is frozen after closing.
    const locked = await page.evaluate(() => document.body.style.overflow === "hidden");
    if (locked) note("search", "body scroll left locked after closing");
    else pass("search releases the scroll lock");
  }

  if (errors.length) note("console (search)", errors.slice(0, 2).join(" | "));
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Mobile menu                                                         */
/* ------------------------------------------------------------------ */
{
  const { context, page, errors } = await open(390, "/");

  const toggle = page.locator('header button[aria-controls="mobile-nav"]');
  if ((await toggle.count()) === 0) {
    note("mobile menu", "no menu toggle at 390px");
  } else {
    await toggle.click();
    await page.waitForTimeout(500);
    const state = await page.evaluate(() => {
      const panel = document.getElementById("mobile-nav");
      if (!panel) return null;
      const box = panel.getBoundingClientRect();
      return {
        hidden: panel.hidden,
        links: panel.querySelectorAll("a[href]").length,
        disclosures: panel.querySelectorAll("details").length,
        overflowsRight: box.right > window.innerWidth + 1,
        locked: document.body.style.overflow === "hidden",
        scrollable: panel.scrollHeight > panel.clientHeight,
      };
    });

    if (!state) note("mobile menu", "panel missing");
    else if (state.hidden) note("mobile menu", "panel still hidden after tapping the toggle");
    else if (state.links === 0) note("mobile menu", "panel has no links");
    else if (state.overflowsRight) note("mobile menu", "panel overflows the viewport");
    else if (!state.locked) note("mobile menu", "background scroll not locked while open");
    else pass(`mobile menu opens: ${state.links} links, ${state.disclosures} disclosures, scroll locked`);

    // A disclosure inside the panel has to reveal its links.
    const firstDetails = page.locator("#mobile-nav details summary").first();
    if ((await firstDetails.count()) > 0) {
      await firstDetails.click();
      await page.waitForTimeout(300);
      const opened = await page.evaluate(
        () => document.querySelector("#mobile-nav details")?.hasAttribute("open") ?? false,
      );
      if (!opened) note("mobile menu", "disclosure did not open");
      else pass("mobile menu disclosure opens");
    }

    // Closing has to release the lock, or the page is stuck.
    await toggle.click();
    await page.waitForTimeout(400);
    const closed = await page.evaluate(() => ({
      hidden: document.getElementById("mobile-nav")?.hidden ?? true,
      locked: document.body.style.overflow === "hidden",
    }));
    if (!closed.hidden) note("mobile menu", "panel did not close");
    else if (closed.locked) note("mobile menu", "body scroll left locked after closing");
    else pass("mobile menu closes and releases the scroll lock");
  }

  if (errors.length) note("console (mobile home)", errors.slice(0, 2).join(" | "));
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Lead capture modal                                                  */
/* ------------------------------------------------------------------ */
for (const width of [1440, 390]) {
  const { context, page, errors } = await open(width, "/");

  const cta = page.getByRole("button", { name: /waitlist/i }).first();
  if ((await cta.count()) === 0) {
    note(`lead modal @${width}`, "no waitlist button found");
  } else {
    await cta.click();
    await page.waitForTimeout(700);
    const modal = await page.evaluate(() => {
      const el = document.querySelector('[role="dialog"]');
      if (!el) return null;
      const box = el.getBoundingClientRect();
      const focused = document.activeElement;
      return {
        withinViewport: box.top >= -1 && box.left >= -1 && box.right <= window.innerWidth + 1,
        fields: el.querySelectorAll("input, textarea, select").length,
        submit: el.querySelectorAll('button[type="submit"]').length,
        labelled: Boolean(el.getAttribute("aria-label") || el.getAttribute("aria-labelledby")),
        focusInside: Boolean(focused && el.contains(focused)),
        unlabelledFields: [...el.querySelectorAll("input, textarea, select")].filter((f) => {
          const id = f.getAttribute("id");
          return !(
            (id && document.querySelector(`label[for="${id}"]`)) ||
            f.getAttribute("aria-label") ||
            f.getAttribute("aria-labelledby") ||
            f.closest("label")
          );
        }).length,
      };
    });

    if (!modal) note(`lead modal @${width}`, "clicking the CTA opened nothing");
    else {
      if (!modal.withinViewport) note(`lead modal @${width}`, "modal is not fully within the viewport");
      if (modal.fields === 0) note(`lead modal @${width}`, "modal has no form fields");
      if (modal.submit === 0) note(`lead modal @${width}`, "modal has no submit control");
      if (!modal.labelled) note(`lead modal @${width}`, "dialog is not labelled");
      if (!modal.focusInside) note(`lead modal @${width}`, "focus was not moved into the dialog");
      if (modal.unlabelledFields > 0)
        note(`lead modal @${width}`, `${modal.unlabelledFields} form field(s) without a label`);
      if (
        modal.withinViewport &&
        modal.fields > 0 &&
        modal.submit > 0 &&
        modal.labelled &&
        modal.focusInside &&
        modal.unlabelledFields === 0
      )
        pass(`lead modal @${width}: ${modal.fields} labelled fields, focus trapped, within viewport`);

      // Empty submit must surface validation rather than silently doing nothing.
      await page.locator('[role="dialog"] button[type="submit"]').first().click();
      await page.waitForTimeout(500);
      const validation = await page.evaluate(() => {
        const el = document.querySelector('[role="dialog"]');
        if (!el) return { stillOpen: false, invalid: 0 };
        return {
          stillOpen: true,
          invalid: el.querySelectorAll('[aria-invalid="true"], :invalid').length,
        };
      });
      if (!validation.stillOpen) note(`lead modal @${width}`, "empty submit closed the dialog");
      else if (validation.invalid === 0)
        note(`lead modal @${width}`, "empty submit produced no validation feedback");
      else pass(`lead modal @${width}: empty submit is rejected`);

      await page.keyboard.press("Escape");
      await page.waitForTimeout(400);
      const afterEscape = await page.evaluate(() => ({
        open: Boolean(document.querySelector('[role="dialog"]')),
        locked: document.body.style.overflow === "hidden",
      }));
      if (afterEscape.open) note(`lead modal @${width}`, "Escape did not close the modal");
      else if (afterEscape.locked) note(`lead modal @${width}`, "body scroll left locked after closing");
      else pass(`lead modal @${width}: closes on Escape and releases scroll`);
    }
  }

  if (errors.length) note(`console (lead modal @${width})`, errors.slice(0, 2).join(" | "));
  await context.close();
}

/* ------------------------------------------------------------------ */
/* FAQ disclosures                                                     */
/* ------------------------------------------------------------------ */
{
  const { context, page } = await open(390, "/faq/");
  // Scoped to main: the mobile nav panel also contains disclosures, and while
  // it is closed they are present but not visible.
  const summary = page.locator("main details summary").first();
  if ((await summary.count()) === 0) {
    note("faq", "no disclosures on /faq/");
  } else {
    await summary.click();
    await page.waitForTimeout(300);
    const opened = await page.evaluate(() => {
      const d = document.querySelector("main details[open]");
      if (!d) return null;
      const body = d.querySelector("p");
      const box = body?.getBoundingClientRect();
      return { open: true, revealed: Boolean(box && box.height > 10) };
    });
    if (!opened) note("faq", "clicking a summary did not open the disclosure");
    else if (!opened.revealed) note("faq", "disclosure opened but the answer has no height");
    else pass("faq disclosure opens and reveals its answer");
  }
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Hub filtering (the client browsers on index pages)                  */
/* ------------------------------------------------------------------ */
{
  const { context, page } = await open(390, "/glossary/");
  const input = page.locator('input[type="search"]').first();
  if ((await input.count()) === 0) {
    note("glossary filter", "no filter input on /glossary/");
  } else {
    const before = await page.locator("main a[href^='/glossary/']").count();
    await input.fill("positioning");
    await page.waitForTimeout(600);
    const after = await page.locator("main a[href^='/glossary/']").count();
    if (after === 0) note("glossary filter", 'filtering to "positioning" removed every result');
    else if (after >= before) note("glossary filter", `filter did not narrow (${before} -> ${after})`);
    else pass(`glossary filter narrows ${before} -> ${after}`);
  }
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Page directory                                                      */
/* ------------------------------------------------------------------ */
for (const width of [1440, 390]) {
  const { context, page } = await open(width, "/sitemap/");
  const input = page.locator('input[placeholder="Search pages..."]');
  if ((await input.count()) === 0) {
    note(`directory @${width}`, "no search field");
    await context.close();
    continue;
  }
  await input.fill("linkedin");
  await page.waitForTimeout(500);
  const searched = await page.evaluate(() => ({
    visible: [...document.querySelectorAll("#page-directory [data-entry]")].filter((r) => !r.hidden).length,
    sections: [...document.querySelectorAll("#page-directory [data-category]")].filter((s) => !s.hidden).length,
  }));
  if (searched.visible === 0) note(`directory @${width}`, 'search for "linkedin" returned nothing');
  else pass(`directory @${width}: search returns ${searched.visible} rows in ${searched.sections} categories`);

  await input.fill("");
  await page.waitForTimeout(300);
  const chip = page.locator("button[aria-pressed]", { hasText: "Industries" }).first();
  await chip.scrollIntoViewIfNeeded();
  await chip.click();
  await page.waitForTimeout(400);
  const filtered = await page.evaluate(() => ({
    sections: [...document.querySelectorAll("#page-directory [data-category]")].filter((s) => !s.hidden).length,
    rows: [...document.querySelectorAll("#page-directory [data-entry]")].filter((r) => !r.hidden).length,
    pressed: document.querySelector('button[aria-pressed="true"]')?.textContent?.trim() ?? null,
  }));
  if (filtered.sections !== 1) note(`directory @${width}`, `category filter left ${filtered.sections} categories`);
  else pass(`directory @${width}: category filter isolates ${filtered.rows} rows`);

  // The sticky control bar must not swallow the viewport on a phone.
  if (width < 768) {
    const bar = await page.evaluate(() => {
      const el = document.querySelector("#page-directory")?.previousElementSibling;
      if (!el) return null;
      return { height: Math.round(el.getBoundingClientRect().height), viewport: window.innerHeight };
    });
    if (bar && bar.height > bar.viewport * 0.4)
      note(`directory @${width}`, `sticky control bar is ${bar.height}px of a ${bar.viewport}px viewport`);
    else if (bar) pass(`directory @${width}: control bar is ${bar.height}px tall`);
  }
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */
{
  const { context, page } = await open(390, "/glossary/positioning/");
  await page.evaluate(() => window.scrollTo({ top: 3000, behavior: "instant" }));
  await page.waitForTimeout(600);
  const button = page.locator('button[aria-label*="top" i], a[aria-label*="top" i]').first();
  if ((await button.count()) === 0) {
    note("back to top", "no control found after scrolling");
  } else {
    const visible = await button.isVisible();
    if (!visible) note("back to top", "control exists but is not visible after scrolling");
    else {
      await button.click();
      await page.waitForTimeout(900);
      const y = await page.evaluate(() => window.scrollY);
      if (y > 200) note("back to top", `clicking left the page at ${Math.round(y)}px`);
      else pass("back to top returns to the top");
    }
  }
  await context.close();
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs, footer and section nav                                 */
/* ------------------------------------------------------------------ */
{
  const { context, page } = await open(1440, "/features/annual-calendar/");

  const crumbs = await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Breadcrumb"]');
    if (!nav) return null;
    return {
      links: [...nav.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      current: nav.querySelector('[aria-current="page"]')?.textContent?.trim() ?? null,
    };
  });
  if (!crumbs) note("breadcrumbs", "no breadcrumb nav on a feature page");
  else if (crumbs.links.length === 0) note("breadcrumbs", "breadcrumb has no links");
  else if (!crumbs.current) note("breadcrumbs", "no aria-current on the last crumb");
  else pass(`breadcrumbs: ${crumbs.links.length} links + current page`);

  // The in-page section strip has to land its anchors below the fixed chrome.
  const sectionNav = await page.evaluate(() => {
    const nav = document.querySelector(".section-nav");
    if (!nav) return null;
    const first = nav.querySelector('a[href^="#"]');
    return { links: nav.querySelectorAll('a[href^="#"]').length, firstHref: first?.getAttribute("href") ?? null };
  });
  if (sectionNav?.firstHref) {
    await page.evaluate((href) => {
      document.querySelector(`.section-nav a[href="${href}"]`)?.click();
    }, sectionNav.firstHref);
    await page.waitForTimeout(900);
    const clearance = await page.evaluate((href) => {
      const target = document.querySelector(href);
      if (!target) return null;
      const top = target.getBoundingClientRect().top;
      const header = document.querySelector("header");
      const strip = document.querySelector(".section-nav");
      const covered =
        (header?.getBoundingClientRect().bottom ?? 0) +
        (strip && getComputedStyle(strip).position === "sticky"
          ? strip.getBoundingClientRect().height
          : 0);
      return { top: Math.round(top), covered: Math.round(covered) };
    }, sectionNav.firstHref);
    if (!clearance) note("section nav", `anchor target ${sectionNav.firstHref} does not exist`);
    else if (clearance.top < clearance.covered - 8)
      note("section nav", `anchor lands under the fixed chrome (top ${clearance.top}px, covered to ${clearance.covered}px)`);
    else pass("section nav anchors clear the fixed chrome");
  }

  const footer = await page.evaluate(() => {
    const el = document.querySelector("footer");
    if (!el) return null;
    const links = [...el.querySelectorAll("a[href]")];
    return {
      total: links.length,
      empty: links.filter((a) => !a.textContent.trim()).length,
      hashOnly: links.filter((a) => a.getAttribute("href") === "#").length,
    };
  });
  if (!footer) note("footer", "no footer");
  else if (footer.empty > 0) note("footer", `${footer.empty} link(s) with no text`);
  else if (footer.hashOnly > 0) note("footer", `${footer.hashOnly} placeholder href="#" link(s)`);
  else pass(`footer: ${footer.total} links, none empty or placeholder`);

  await context.close();
}

/* ------------------------------------------------------------------ */
/* Site-wide link and image sanity across page types                   */
/* ------------------------------------------------------------------ */
const SAMPLE = [
  "/",
  "/platform/",
  "/platform/marketing-engine/",
  "/features/annual-calendar/",
  "/solutions/build-a-marketing-system/",
  "/industries/professional-services/",
  "/use-cases/plan-a-year-of-content/",
  "/channels/linkedin/",
  "/channels/linkedin/for/b2b-services/",
  "/asset-types/linkedin-carousel/",
  "/compare/mengo-vs-a-marketing-agency/",
  "/resources/marketing-system-playbook/",
  "/blog/ai-content-sounds-the-same/",
  "/glossary/positioning/",
  "/company/about/",
  "/legal/privacy-policy/",
  "/contact/",
  "/get-started/",
  "/sitemap/",
  "/faq/",
];

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  for (const path of SAMPLE) {
    const errors = [];
    page.removeAllListeners("pageerror");
    page.removeAllListeners("console");
    page.on("pageerror", (e) => errors.push(String(e).slice(0, 160)));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text().slice(0, 160));
    });

    await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 120000 });
    await page.waitForTimeout(700);
    // Let lazy images below the fold start loading.
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += window.innerHeight) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    await page.waitForTimeout(900);

    const findings = await page.evaluate(() => {
      const bad = { broken: [], placeholder: [], emptyLink: 0, distorted: [] };
      for (const img of document.querySelectorAll("img")) {
        const box = img.getBoundingClientRect();
        if (box.width < 2 || box.height < 2) continue;
        if (img.complete && img.naturalWidth === 0) bad.broken.push(img.currentSrc || img.src);
        // A rendered box whose ratio departs far from the source ratio, with no
        // object-fit to reconcile them, is a squashed image.
        if (img.naturalWidth > 0) {
          const natural = img.naturalWidth / img.naturalHeight;
          const rendered = box.width / box.height;
          const fit = getComputedStyle(img).objectFit;
          if (fit === "fill" && Math.abs(natural - rendered) / natural > 0.12)
            bad.distorted.push(`${img.currentSrc || img.src} ${natural.toFixed(2)}->${rendered.toFixed(2)}`);
        }
      }
      for (const a of document.querySelectorAll("a[href]")) {
        const href = a.getAttribute("href");
        if (href === "#" || href === "" || href === "javascript:void(0)") bad.placeholder.push(href);
        const box = a.getBoundingClientRect();
        if (!a.textContent.trim() && !a.querySelector("img, svg") && !a.getAttribute("aria-label") && box.height > 0)
          bad.emptyLink += 1;
      }
      return bad;
    });

    if (findings.broken.length) note(`images ${path}`, `${findings.broken.length} broken: ${findings.broken[0]}`);
    if (findings.distorted.length) note(`images ${path}`, `distorted: ${findings.distorted[0]}`);
    if (findings.placeholder.length) note(`links ${path}`, `${findings.placeholder.length} placeholder href`);
    if (findings.emptyLink) note(`links ${path}`, `${findings.emptyLink} link(s) with no accessible name`);
    if (errors.length) note(`console ${path}`, errors.slice(0, 2).join(" | "));
  }
  pass(`${SAMPLE.length} page types checked for broken images, placeholder links and console errors`);
  await context.close();
}

/* ------------------------------------------------------------------ */
await browser.close();

console.log(`\nFunctional QA — ${checks.length} checks passed\n`);
for (const c of checks) console.log(`  ok  ${c}`);

if (problems.length === 0) {
  console.log("\nNo problems found.\n");
} else {
  console.log(`\n${problems.length} problem(s):\n`);
  for (const p of problems) console.log(`  [${p.where}] ${p.detail}`);
  console.log("");
  process.exitCode = 1;
}
