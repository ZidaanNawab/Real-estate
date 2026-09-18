import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locations } from "@/data/locations";
import { posts } from "@/data/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Project detail routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Location routes
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${siteUrl}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9, // High priority — key SEO pages
  }));

  // Resource/blog routes
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
