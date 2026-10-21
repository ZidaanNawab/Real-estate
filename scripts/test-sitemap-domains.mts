/**
 * Sitemap domain guard tests
 *
 * These tests fail if any URL in the generated sitemap:
 *   - Contains a placeholder domain (yourdomain.com, localhost, etc.)
 *   - Uses the secondary .in domain instead of the canonical .com
 *   - Uses bare mauliinfraplots.com (without www)
 *
 * Run: npx tsx --tsconfig tsconfig.json scripts/test-sitemap-domains.mts
 * Or add to CI: node --loader tsx scripts/test-sitemap-domains.mts
 */

import { strictEqual, ok } from "node:assert";

// ── Import the same data sources the real sitemap uses ──────────────────────
// (Avoids spinning up Next.js — tests the underlying logic directly.)
import { projects } from "../data/projects.js";
import { locations } from "../data/locations.js";
import { posts } from "../data/posts.js";
import { CANONICAL_SITE_URL, SITE_URL } from "../lib/constants.js";

// ── Reconstruct the same URL list as app/sitemap.ts ─────────────────────────
function buildSitemapUrls(): string[] {
  const siteUrl = SITE_URL;
  const urls: string[] = [
    siteUrl,
    `${siteUrl}/projects`,
    `${siteUrl}/about`,
    `${siteUrl}/resources`,
    `${siteUrl}/contact`,
    ...projects.map((p) => `${siteUrl}/projects/${p.slug}`),
    ...locations.map((l) => `${siteUrl}/locations/${l.slug}`),
    ...posts.map((p) => `${siteUrl}/resources/${p.slug}`),
  ];
  return urls;
}

// ── Forbidden patterns ───────────────────────────────────────────────────────
const PLACEHOLDER_PATTERNS = [
  "yourdomain.com",
  "localhost",
  "127.0.0.1",
  "example.com",
];

const SECONDARY_DOMAIN_PATTERNS = [
  "mauliinfraplots.in",
  // bare .com without www is also wrong — we enforce www as canonical
  "://mauliinfraplots.com",
];

// ── Tests ────────────────────────────────────────────────────────────────────

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

console.log("\n── Sitemap Domain Guard Tests ─────────────────────────────────\n");

// 1. CANONICAL_SITE_URL must be the primary domain
test("CANONICAL_SITE_URL is the primary .com domain", () => {
  strictEqual(
    CANONICAL_SITE_URL,
    "https://www.mauliinfraplots.com",
    `Expected CANONICAL_SITE_URL to be "https://www.mauliinfraplots.com", got "${CANONICAL_SITE_URL}"`
  );
});

// 2. SITE_URL in a production-like environment must not be a placeholder
test("SITE_URL does not contain placeholder domains (production mode)", () => {
  // Simulate production: env var unset → falls back to CANONICAL_SITE_URL
  const effectiveUrl = process.env.NEXT_PUBLIC_SITE_URL ?? CANONICAL_SITE_URL;
  for (const pattern of PLACEHOLDER_PATTERNS) {
    ok(
      !effectiveUrl.includes(pattern),
      `SITE_URL "${effectiveUrl}" contains placeholder pattern "${pattern}"`
    );
  }
});

// 3. No placeholder domain in any sitemap URL
const sitemapUrls = buildSitemapUrls();

test("Sitemap contains at least one URL", () => {
  ok(sitemapUrls.length > 0, "Sitemap returned zero URLs");
});

test("No sitemap URL contains a placeholder domain", () => {
  const bad: string[] = [];
  for (const url of sitemapUrls) {
    for (const pattern of PLACEHOLDER_PATTERNS) {
      if (url.includes(pattern)) {
        bad.push(`  "${url}" matches placeholder "${pattern}"`);
      }
    }
  }
  ok(
    bad.length === 0,
    `Found ${bad.length} sitemap URL(s) with placeholder domains:\n${bad.join("\n")}`
  );
});

// 4. No secondary / bare domain in any sitemap URL
test("No sitemap URL uses a secondary or non-www domain", () => {
  const bad: string[] = [];
  for (const url of sitemapUrls) {
    for (const pattern of SECONDARY_DOMAIN_PATTERNS) {
      if (url.includes(pattern)) {
        bad.push(`  "${url}" matches secondary-domain pattern "${pattern}"`);
      }
    }
  }
  ok(
    bad.length === 0,
    `Found ${bad.length} sitemap URL(s) with non-canonical domain:\n${bad.join("\n")}`
  );
});

// 5. Every sitemap URL starts with the canonical domain
test("Every sitemap URL starts with the canonical .com domain", () => {
  const bad = sitemapUrls.filter(
    (url) => !url.startsWith("https://www.mauliinfraplots.com")
  );
  ok(
    bad.length === 0,
    `${bad.length} URL(s) do not start with canonical domain:\n${bad.map((u) => `  "${u}"`).join("\n")}`
  );
});

// 6. No sitemap URL has a trailing slash (except the root)
test("No non-root sitemap URL has a trailing slash", () => {
  const nonRoot = sitemapUrls.filter(
    (url) => url !== "https://www.mauliinfraplots.com"
  );
  const bad = nonRoot.filter((url) => url.endsWith("/"));
  ok(
    bad.length === 0,
    `${bad.length} URL(s) have an unexpected trailing slash:\n${bad.map((u) => `  "${u}"`).join("\n")}`
  );
});

// ── Summary ──────────────────────────────────────────────────────────────────
console.log(
  `\n── Results: ${passed} passed, ${failed} failed ──────────────────────\n`
);

if (failed > 0) {
  process.exit(1);
}
