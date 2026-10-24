import { MetadataRoute } from "next";
import { CANONICAL_SITE_URL } from "@/lib/constants";

// robots.txt sitemap reference must be canonical -- never localhost
const siteUrl = CANONICAL_SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
