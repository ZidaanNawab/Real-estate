// JSON-LD schema builder functions
// All schema is server-rendered as <script type="application/ld+json">

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

// ─── LocalBusiness (site-wide) ────────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Mauli Infra Plots",
    description:
      "RERA-registered real estate broker in Nagpur specialising in residential plots across Wardha Road, Besa, MIHAN corridor, and Shankarpur.",
    url: siteUrl,
    telephone: "[PLACEHOLDER: +91-XXXXXXXXXX]",
    email: "[PLACEHOLDER: contact@yourdomain.com]",
    address: {
      "@type": "PostalAddress",
      streetAddress: "[PLACEHOLDER: Office Address Line 1]",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "[PLACEHOLDER: 440XXX]",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "[PLACEHOLDER: 21.XXXX]",
      longitude: "[PLACEHOLDER: 79.XXXX]",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    areaServed: {
      "@type": "City",
      name: "Nagpur",
    },
    priceRange: "₹₹",
    sameAs: [
      "[PLACEHOLDER: Google Business Profile URL]",
      "[PLACEHOLDER: Facebook URL]",
      "[PLACEHOLDER: LinkedIn URL]",
    ],
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
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: opts.url,
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
