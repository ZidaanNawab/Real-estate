import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locations } from "@/data/locations";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/lib/constants";

const siteUrl = SITE_URL;

/**
 * Genuine last-modified dates sourced from git history for each page group.
 * These reflect actual content change dates, not the build timestamp.
 * Update a date here when you meaningfully update the corresponding content.
 *
 * Dates confirmed from git log (YYYY-MM-DD):
 *   app/page.tsx             → 2026-10-05  (hero + homepage)
 *   app/about/page.tsx       → 2026-10-01
 *   app/contact/page.tsx     → 2026-09-19
 *   app/projects/page.tsx    → 2026-09-18
 *   data/projects.ts         → 2026-09-25  (project data)
 *   app/resources/page.tsx   → 2026-09-18
 *   data/locations.ts        → 2026-09-18  (location content)
 *   data/posts.ts            → 2026-09-18  (blog posts — individual dates below)
 */
const DATES = {
  home:      new Date("2026-10-05"),
  projects:  new Date("2026-09-25"),
  about:     new Date("2026-10-01"),
  resources: new Date("2026-09-18"),
  contact:   new Date("2026-09-19"),
  locations: new Date("2026-09-18"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: DATES.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: DATES.projects,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: DATES.about,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified: DATES.resources,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: DATES.contact,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Project detail routes — data last updated 2026-09-25
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: DATES.projects,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Location routes — content last updated 2026-09-18
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${siteUrl}/locations/${l.slug}`,
    lastModified: DATES.locations,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Resource/blog routes — use the individual post date from the data file
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/resources/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...locationRoutes,
    ...postRoutes,
  ];
}
