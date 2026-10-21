import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,

  /**
   * Domain redirect rules — .in domains → canonical .com
   *
   * TWO-LAYER ARCHITECTURE:
   * Vercel's edge handles domain-level redirects BEFORE Next.js sees the
   * request. The `has: [{ type: "host" }]` rules below only fire when Vercel
   * has passed the request through as a Production domain.
   *
   * VERCEL DOMAIN ASSIGNMENTS (configured in Vercel → Project → Domains):
   *   www.mauliinfraplots.com  → Production  ← canonical, serves content
   *   mauliinfraplots.com      → Vercel redirect → www.mauliinfraplots.com  (1 hop, CDN layer)
   *   mauliinfraplots.in       → Vercel redirect → www.mauliinfraplots.com  (1 hop, CDN layer)
   *   www.mauliinfraplots.in   → Production  ← Next.js rule below fires, 1 hop
   *
   * IMPORTANT — mauliinfraplots.in Vercel redirect target:
   *   Must point to www.mauliinfraplots.com (NOT www.mauliinfraplots.in).
   *   If it points to www.mauliinfraplots.in, the chain becomes 2 hops:
   *     mauliinfraplots.in → (Vercel) www.mauliinfraplots.in → (Next.js) www.mauliinfraplots.com
   *   Correct 1-hop chain:
   *     mauliinfraplots.in → (Vercel) www.mauliinfraplots.com
   *
   * WHY KEEP NEXT.JS RULES?
   *   The mauliinfraplots.in rule is belt-and-suspenders — Vercel fires first
   *   and Next.js never sees apex .in requests. The www.mauliinfraplots.in rule
   *   is active because that domain is a Vercel Production domain.
   *
   * PRODUCTION VERIFICATION:
   *   curl -IL https://mauliinfraplots.in/about
   *   → Expected: 308 → https://www.mauliinfraplots.com/about → 200
   *
   *   curl -IL https://www.mauliinfraplots.in/projects
   *   → Expected: 308 → https://www.mauliinfraplots.com/projects → 200
   *
   *   curl -I https://www.mauliinfraplots.com/
   *   → Expected: 200 (no redirect — no loop)
   */
  async redirects() {
    const PRIMARY = "https://www.mauliinfraplots.com";
    return [
      // mauliinfraplots.in → www.mauliinfraplots.com (preserve path + query)
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "mauliinfraplots.in" }],
        destination: `${PRIMARY}/:path*`,
        permanent: true, // emits 308 — the method-preserving permanent redirect
      },
      // www.mauliinfraplots.in → www.mauliinfraplots.com (preserve path + query)
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.mauliinfraplots.in" }],
        destination: `${PRIMARY}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
