// Data file: all projects
// Fields marked "// TODO" require the owner to supply verified real-world data.

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  area: string; // matches /locations/[area] slugs
  status: "ongoing" | "new-launch" | "ready-to-move";
  priceMin: number; // in lakhs — 0 means price not yet published
  priceMax: number; // in lakhs — 0 means price not yet published
  plotSizes: string[]; // e.g. ["120 sq.yd", "200 sq.yd"]
  totalPlots: number;   // 0 means figure not yet published
  availablePlots: number; // 0 means figure not yet published
  heroImage: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  mapEmbedUrl: string;
  reraNumber: string;
  description: string;
  priceTable: { size: string; pricePerSqFt: string; totalRange: string }[];
  brochureUrl?: string;
}


export const projects: Project[] = [
  {
    id: "1",
    slug: "mauli-templetown-40",
    name: "Mauli Templetown 40",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "wardha-road",
    status: "ongoing",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-templetown.webp",
    images: ["/mauli-templetown.webp"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Templetown 40 is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/brochures/mauli-templetown-40.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },

  {
    id: "2",
    slug: "mauli-crystal-35",
    name: "Mauli Crystal 35",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "besa",
    status: "ongoing",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-crystal.webp",
    images: ["/mauli-crystal.webp"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Crystal 35 is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/brochures/mauli-crystal-35.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },

  {
    id: "3",
    slug: "mauli-niwasa-36-37",
    name: "Mauli Niwasa 36/37",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "mihan-corridor",
    status: "ongoing",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-niwasa.webp",
    images: ["/mauli-niwasa.webp"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Niwasa 36/37 is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/brochures/mauli-niwasa-36-37.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },

  {
    id: "4",
    slug: "mauli-infinity-39",
    name: "Mauli Infinity 39",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "shankarpur",
    status: "ongoing",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-infinity.webp",
    images: ["/mauli-infinity.webp"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Infinity 39 is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/brochures/mauli-infinity-39.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },

  {
    id: "5",
    slug: "mauli-upwan-38",
    name: "Mauli Upwan 38",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "wardha-road",
    status: "new-launch",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-upwan.webp",
    images: ["/mauli-upwan.webp"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Upwan 38 is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/brochures/mauli-upwan-38.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },

  {
    id: "6",
    slug: "mauli-sansara",
    name: "Mauli Sansara",
    tagline: "", // TODO: confirm tagline with owner
    location: "Nagpur", // TODO: confirm exact location with owner
    area: "wardha-road",
    status: "ready-to-move",
    priceMin: 0, // TODO: confirm price with owner
    priceMax: 0, // TODO: confirm price with owner
    plotSizes: [], // TODO: confirm plot sizes with owner
    totalPlots: 0, // TODO: confirm with owner
    availablePlots: 0, // TODO: confirm with owner
    heroImage: "/mauli-sansara.jpeg",
    images: ["/mauli-sansara.jpeg"],
    amenities: [], // TODO: add amenities
    highlights: [], // TODO: add highlights
    mapEmbedUrl: "", // TODO: add Google Maps embed URL
    reraNumber: "", // TODO: add MahaRERA registration number
    description: "Mauli Sansara is a RERA-registered residential plot project in Nagpur. Contact us for current availability and pricing.",
    brochureUrl: "/mauli-sansara.pdf",
    priceTable: [], // TODO: add price table when prices are confirmed
  },
];


export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByArea(area: string): Project[] {
  return projects.filter((p) => p.area === area);
}

export type ProjectStatus = Project["status"];

export const statusLabels: Record<ProjectStatus, string> = {
  "new-launch": "New Launch",
  ongoing: "Ongoing",
  "ready-to-move": "Ready to Move",
};
