import type { Metadata } from "next";
import { SITE_URL, CANONICAL_SITE_URL } from "@/lib/constants";

// siteUrl: env-resolved; may be localhost in dev. Used only for og:url.
const siteUrl = SITE_URL;
// canonicalBase: always the production domain, independent of env overrides.
// Used for alternates.canonical and metadataBase so crawlers see the right URL.
const canonicalBase = CANONICAL_SITE_URL;
const siteName = "Mauli Infra Plots";
const defaultImage = `${canonicalBase}/og-image.jpg`;

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Build page-level metadata.
 *
 * The `title` you pass in should be the bare, unique page title — e.g.
 *   "All Residential Plot Projects in Nagpur"
 * The layout template in app/layout.tsx appends " | Mauli Infra Plots" once,
 * so this function must NOT add it again.
 *
 * og:title and twitter:title include the site name explicitly because those
 * tags bypass the layout template and are rendered verbatim.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex,
}: MetadataOptions): Metadata {
  const canonicalUrl = `${canonicalBase}${path}`; // always production
  const ogUrl       = `${siteUrl}${path}`;        // env-resolved (dev-friendly)
  const ogImage = image || defaultImage;

  return {
    // Bare title — layout template appends " | Mauli Infra Plots"
    title,
    description,
    metadataBase: new URL(canonicalBase),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      // og:title is standalone — include site name explicitly here
      title: `${title} | ${siteName}`,
      description,
      url: ogUrl,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
