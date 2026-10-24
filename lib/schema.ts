// JSON-LD schema builder functions
// All schema is server-rendered as <script type="application/ld+json">

import { CANONICAL_SITE_URL } from "@/lib/constants";

// Schema URLs must always be canonical -- validators reject localhost URLs
const siteUrl = CANONICAL_SITE_URL;

// ─── LocalBusiness (site-wide) ────────────────────────────────────────────────
// Only verified fields are included. Fields that require owner confirmation
// (email, street address, geo coordinates, social profiles) are omitted until
// the owner supplies the real values — invalid placeholder strings are worse
// for structured-data quality than simply omitting optional fields.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Mauli Infra Plots",
    description:
      "RERA-registered real estate broker in Nagpur specialising in residential plots across Wardha Road, Besa, MIHAN corridor, and Shankarpur.",
    url: siteUrl,
    telephone: "+91-93593-06709",
    // email, streetAddress, postalCode, geo, sameAs — omitted pending owner confirmation
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    areaServed: {
      "@type": "City",
      name: "Nagpur",
    },
    priceRange: "₹₹",
  };
}

// ─── RealEstateListing (project detail pages) ──────────────────────────────────
interface ProjectSchemaOptions {
  name: string;
  description: string;
  location: string;
  image: string;
  url: string;
  priceMin: number;
  priceMax: number;
  status: string;
}

export function realEstateListingSchema(opts: ProjectSchemaOptions) {
  // Only emit price offers when real prices are known (priceMin > 0)
  const hasPrice = opts.priceMin > 0 && opts.priceMax > 0;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    // image must be an absolute URL for schema.org validators
    ...(opts.image && !opts.image.startsWith("[")
      ? { image: opts.image.startsWith("http") ? opts.image : siteUrl + opts.image }
      : {}),
    url: opts.url,
    ...(hasPrice
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: opts.priceMin * 100000, // convert lakhs to rupees
            highPrice: opts.priceMax * 100000,
            offerCount: 1,
            availability:
              opts.status === "ready-to-move"
                ? "https://schema.org/InStock"
                : "https://schema.org/PreOrder",
          },
        }
      : {}),
    brand: {
      "@type": "Brand",
      name: "Mauli Infra Plots",
    },
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────
interface FAQ {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
