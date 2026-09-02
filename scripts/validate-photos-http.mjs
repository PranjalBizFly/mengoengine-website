/**
 * MengoEngine — HTTP Image Availability Validator
 *
 * Concurrently validates that every single photo URL referenced in `src/lib/photo-data.json`
 * returns HTTP 200 OK from the remote CDN with a valid image MIME type.
 *
 * Usage: node --experimental-strip-types --no-warnings scripts/validate-photos-http.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DATA_PATH = join(process.cwd(), "src", "lib", "photo-data.json");

if (!existsSync(DATA_PATH)) {
  console.error("photo-data.json does not exist. Run npm run photos:curate first.");
  process.exit(1);
}

const photoData = JSON.parse(readFileSync(DATA_PATH, "utf8"));
const entries = Object.values(photoData);
const uniqueUrls = [...new Set(entries.map((e) => e.src))];

console.log(`\n======================================================`);
console.log(`    MENGOENGINE REMOTE PHOTO HTTP VALIDATION          `);
console.log(`======================================================\n`);
console.log(`Validating ${uniqueUrls.length} unique remote photo URLs against Unsplash CDN...`);

const BATCH_SIZE = 25;
let passed = 0;
let failed = 0;
const failures = [];

async function checkUrl(url) {
  try {
    const testUrl = url.replace(/w=\d+/, "w=200").replace(/q=\d+/, "q=50");
    const res = await fetch(testUrl, { method: "HEAD", redirect: "follow" });
    if (res.status === 200) {
      const type = res.headers.get("content-type");
      if (type && type.startsWith("image/")) {
        passed++;
        return { url, ok: true, status: 200 };
      }
    }
    failed++;
    failures.push({ url, status: res.status });
    return { url, ok: false, status: res.status };
  } catch (err) {
    failed++;
    failures.push({ url, error: err.message });
    return { url, ok: false, error: err.message };
  }
}

for (let i = 0; i < uniqueUrls.length; i += BATCH_SIZE) {
  const batch = uniqueUrls.slice(i, i + BATCH_SIZE);
  await Promise.all(batch.map((u) => checkUrl(u)));
  process.stdout.write(`\rProgress: ${Math.min(i + BATCH_SIZE, uniqueUrls.length)} / ${uniqueUrls.length} URLs tested (Passed: ${passed}, Failed: ${failed})`);
}

console.log(`\n\n======================================================`);
console.log(`Validation Results:`);
console.log(`Total URLs Tested : ${uniqueUrls.length}`);
console.log(`HTTP 200 (Valid)  : ${passed}`);
console.log(`Failed / 404s     : ${failed}`);
console.log(`======================================================\n`);

if (failed > 0) {
  console.error(`FATAL: ${failed} remote photo URLs returned 404/broken status!`);
  for (const f of failures.slice(0, 10)) {
    console.error(`  - ${f.url} -> ${f.status || f.error}`);
  }
  if (failures.length > 10) console.error(`  ... and ${failures.length - 10} more`);
  process.exit(1);
} else {
  console.log(`ALL REMOTE PHOTO ASSETS ARE 100% VALID & LIVE (HTTP 200 OK)!`);
  process.exit(0);
}
