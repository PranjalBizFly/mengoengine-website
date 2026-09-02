import { chromium } from "playwright-core";
import fs from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2]; const THEME = process.argv[3] ?? "light";
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME });
for (const w of [1920, 1440, 1280, 1024]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1, colorScheme: THEME });
  const page = await ctx.newPage();
  await page.goto("http://localhost:4311/", { waitUntil: "networkidle", timeout: 180000 });
  await page.waitForTimeout(400);
  const info = await page.evaluate(() => {
    const h = document.querySelector("header");
    const row = h.querySelector(".container-page");
    const nav = h.querySelector('nav[aria-label="Primary"]');
    const ul = nav.querySelector("ul");
    const cs = getComputedStyle(row);
    const content = row.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const kids = [...row.children].filter(el => el.getBoundingClientRect().width > 0);
    const natural = kids.reduce((a, el) => a + (el === nav ? ul.scrollWidth : el.getBoundingClientRect().width), 0) + (kids.length - 1) * 12;
    const items = [...ul.querySelectorAll("li")].filter(li => li.getBoundingClientRect().width > 0)
      .map(li => { const el = li.firstElementChild; const r = el.getBoundingClientRect(); return { t: el.textContent.trim().slice(0,9), top: Math.round(r.top), h: Math.round(r.height) }; });
    const cta = [...h.querySelectorAll("button")].find(b => b.textContent.trim() === "Join our waitlist");
    const cr = cta && cta.getBoundingClientRect();
    return { headerH: Math.round(h.getBoundingClientRect().height), slack: Math.round(content - natural), items,
      cta: cr ? { h: Math.round(cr.height), w: Math.round(cr.width), top: Math.round(cr.top) } : null, doc: document.documentElement.scrollWidth };
  });
  console.log(w, JSON.stringify(info));
  await page.screenshot({ path: `${OUT}/nav-${w}-${THEME}.png`, clip: { x: 0, y: 0, width: w, height: info.headerH + 6 } });
  await ctx.close();
}
await browser.close();
