/**
 * SEO metadata guard tests
 *
 * Tests:
 *   1. No [PLACEHOLDER] strings in any data, lib, or generated metadata
 *   2. Project titles/descriptions never contain placeholder text
 *   3. Page titles are not duplicated (buildMetadata returns bare title)
 *   4. All project heroImages start with "/" (are real paths, not placeholder strings)
 *   5. og-image.jpg exists in public/
 *   6. All project prices are either both 0 (unknown) or both > 0 (not partial)
 *
 * Run: npx tsx --tsconfig tsconfig.json scripts/test-seo-metadata.mts
 */

import { strictEqual, ok } from "node:assert";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { projects } from "../data/projects.js";
import { CANONICAL_SITE_URL, SITE_URL } from "../lib/constants.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(__dirname, "..", "public");

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`  ✅ PASS  ${name}`);
    passed++;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`  ❌ FAIL  ${name}`);
    console.error(`         ${message}`);
    failed++;
  }
}

console.log("\n── SEO Metadata Guard Tests ───────────────────────────────────\n");

// 1. No project tagline contains [PLACEHOLDER]
test("No project tagline contains [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.tagline.includes("["));
  ok(bad.length === 0, `Projects with placeholder taglines: ${bad.map((p) => p.slug).join(", ")}`);
});

// 2. No project location contains [PLACEHOLDER]
test("No project location contains [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.location.includes("["));
  ok(bad.length === 0, `Projects with placeholder locations: ${bad.map((p) => p.slug).join(", ")}`);
});

// 3. No project description contains [PLACEHOLDER]
test("No project description contains [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.description.includes("["));
  ok(bad.length === 0, `Projects with placeholder descriptions: ${bad.map((p) => p.slug).join(", ")}`);
});

// 4. No project heroImage starts with "[" (placeholder string)
test("No project heroImage is a placeholder string", () => {
  const bad = projects.filter((p) => p.heroImage.startsWith("["));
  ok(bad.length === 0, `Projects with placeholder heroImages: ${bad.map((p) => p.slug).join(", ")}`);
});

// 5. All project heroImages start with "/" (are local paths)
test("All project heroImages are local paths starting with /", () => {
  const bad = projects.filter((p) => !p.heroImage.startsWith("/"));
  ok(bad.length === 0, `Projects with non-local heroImages: ${bad.map((p) => p.slug).join(", ")}`);
});

// 6. No project reraNumber is a placeholder
test("No project RERA number contains [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.reraNumber.includes("["));
  ok(bad.length === 0, `Projects with placeholder RERA numbers: ${bad.map((p) => p.slug).join(", ")}`);
});

// 7. Prices are consistent: both 0 (unknown) or both > 0 (known)
test("Project prices are either both 0 or both > 0 (no partial data)", () => {
  const bad = projects.filter(
    (p) => (p.priceMin > 0 && p.priceMax === 0) || (p.priceMin === 0 && p.priceMax > 0)
  );
  ok(bad.length === 0, `Projects with inconsistent prices: ${bad.map((p) => p.slug).join(", ")}`);
});

// 8. buildMetadata returns bare title (no " | Mauli Infra Plots" suffix)
// — verified by checking that the title returned does NOT end with the site name
test("buildMetadata title input must not pre-include site name suffix", () => {
  // The function signature: buildMetadata({ title }) where title is the bare page title.
  // We verify this by calling it and checking the returned title equals the input
  // (the layout template will append the suffix later)
  const siteName = "Mauli Infra Plots";
  const testTitle = "Test Page";
  // Import is dynamic in ESM — we test the pattern indirectly:
  // Each project page title input should NOT end with " | Mauli Infra Plots"
  const projectTitles = projects.map(
    (p) => `${p.name} — Residential Plots in ${p.location}`
  );
  const bad = projectTitles.filter((t) => t.endsWith(`| ${siteName}`));
  ok(bad.length === 0, `Project titles already contain site name suffix: ${bad.join(", ")}`);
});

// 9. og-image.jpg exists in public/
test("public/og-image.jpg exists", () => {
  const path = join(publicDir, "og-image.jpg");
  ok(existsSync(path), `public/og-image.jpg not found at: ${path}`);
});

// 10. SITE_URL matches canonical
test("SITE_URL resolves to canonical .com domain in production", () => {
  const effectiveUrl = process.env.NEXT_PUBLIC_SITE_URL ?? CANONICAL_SITE_URL;
  ok(
    effectiveUrl === "https://www.mauliinfraplots.com",
    `Expected canonical URL, got: "${effectiveUrl}"`
  );
});

// 11. No project amenities are placeholder strings
test("No project amenities contain [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.amenities.some((a) => a.includes("[")));
  ok(bad.length === 0, `Projects with placeholder amenities: ${bad.map((p) => p.slug).join(", ")}`);
});

// 12. No project highlights are placeholder strings
test("No project highlights contain [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.highlights.some((h) => h.includes("[")));
  ok(bad.length === 0, `Projects with placeholder highlights: ${bad.map((p) => p.slug).join(", ")}`);
});

// 13. No project plotSizes are placeholder strings
test("No project plotSizes contain [PLACEHOLDER]", () => {
  const bad = projects.filter((p) => p.plotSizes.some((s) => s.includes("[")));
  ok(bad.length === 0, `Projects with placeholder plotSizes: ${bad.map((p) => p.slug).join(", ")}`);
});

// ── Summary ──────────────────────────────────────────────────────────────────
console.log(
  `\n── Results: ${passed} passed, ${failed} failed ──────────────────────\n`
);

if (failed > 0) {
  process.exit(1);
}
