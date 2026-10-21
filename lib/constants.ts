/**
 * Central place for site-wide constants.
 * Update WHATSAPP_NUMBER with the real client number before going live.
 * Format: country code + number, no spaces or symbols (e.g. "919359306709")
 */
export const WHATSAPP_NUMBER = "919359306709";

/**
 * Canonical production domain — always the primary .com with www.
 * NEXT_PUBLIC_SITE_URL overrides this for local dev (http://localhost:3000).
 * In production the env var should also be set to this value on Vercel so the
 * sitemap, robots.txt, Open Graph URLs, canonical tags, and JSON-LD all agree.
 *
 * IMPORTANT: This must not end with a trailing slash.
 */
export const CANONICAL_SITE_URL = "https://www.mauliinfraplots.com";

/**
 * Runtime-resolved site URL.
 * Falls back to the hard-coded canonical domain so that placeholder URLs can
 * never reach production even if the Vercel env var is accidentally missing.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || CANONICAL_SITE_URL;