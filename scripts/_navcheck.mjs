import { chromium } from "playwright-core";
import fs from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME });
// mobile drawer
const m = await browser.newContext({ viewport: { width: 390, height: 820 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const mp = await m.newPage();
await mp.goto("http://localhost:4311/", { waitUntil: "networkidle", timeout: 180000 });
await mp.getByRole("button", { name: "Open menu" }).click();
await mp.waitForTimeout(500);
console.log("drawer", JSON.stringify(await mp.evaluate(() => {
  const el = document.getElementById("mobile-nav");
  const r = el.getBoundingClientRect();
  return { y: Math.round(r.y), h: Math.round(r.height) };
})));
await mp.screenshot({ path: `${OUT}/drawer-390.png` });
await m.close();
// search dialog, desktop
const d = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const dp = await d.newPage();
await dp.goto("http://localhost:4311/", { waitUntil: "networkidle", timeout: 180000 });
await dp.getByRole("button", { name: "Search" }).first().click();
await dp.waitForTimeout(500);
console.log("search", JSON.stringify(await dp.evaluate(() => {
  const el = [...document.querySelectorAll("div")].find(d => d.className.includes && d.className.includes("fixed inset-0") && d.className.includes("z-[70]"));
  const r = el ? el.getBoundingClientRect() : null;
  return r ? { y: Math.round(r.y), h: Math.round(r.height), w: Math.round(r.width) } : null;
})));
await dp.screenshot({ path: `${OUT}/search-1440.png` });
await d.close();
await browser.close();
