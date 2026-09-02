import { chromium } from "playwright-core";
import fs from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2]; const THEME = process.argv[3] ?? "light";
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME });
for (const w of [1440, 1280, 1024]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1, colorScheme: THEME });
  const page = await ctx.newPage();
  await page.goto("http://localhost:4311/", { waitUntil: "networkidle", timeout: 180000 });
  await page.getByRole("button", { name: "Platform" }).hover();
  await page.waitForTimeout(700);
  const panel = await page.$(".mega-panel");
  const box = await panel.boundingBox();
  await page.screenshot({ path: `${OUT}/mega-${w}-${THEME}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(880, Math.ceil(box.y + box.height) + 10) } });
  console.log(w, JSON.stringify({ panelH: Math.round(box.height), doc: await page.evaluate(() => document.documentElement.scrollWidth) }));
  await ctx.close();
}
await browser.close();
