// Data file: all projects
// Replace [PLACEHOLDER] values with real client data

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  area: string; // matches /locations/[area] slugs
  status: "ongoing" | "new-launch" | "ready-to-move";
  priceMin: number; // in lakhs
  priceMax: number; // in lakhs
  plotSizes: string[]; // e.g. ["120 sq.yd", "200 sq.yd"]
  totalPlots: number;
  availablePlots: number;
  heroImage: string;
  images: string[];
  amenities: string[];
  highlights: string[];
  mapEmbedUrl: string;
  reraNumber: string;
  description: string;
  priceTable: { size: string; pricePerSqFt: string; totalRange: string }[];
  brochureUrl?: string; // e.g. "/brochures/mauli-templetown-40.pdf" — leave undefined if no PDF uploaded yet
}


export const projects: Project[] = [
  {
    id: "1",
    slug: "mauli-templetown-40",
    name: "Mauli Templetown 40",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "wardha-road", // [PLACEHOLDER — confirm area slug]
    status: "ongoing",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "/mauli-templetown.webp",
    images: ["/mauli-templetown.webp"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    brochureUrl: "/brochures/mauli-templetown-40.pdf",
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
  },

  {
    id: "2",
    slug: "mauli-crystal-35",
    name: "Mauli Crystal 35",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "besa", // [PLACEHOLDER — confirm area slug]
    status: "ongoing",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "/mauli-crystal.webp",
    images: ["/mauli-crystal.webp"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    brochureUrl: "/brochures/mauli-crystal-35.pdf",
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
  },

  {
    id: "3",
    slug: "mauli-niwasa-36-37",
    name: "Mauli Niwasa 36/37",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "mihan-corridor", // [PLACEHOLDER — confirm area slug]
    status: "ongoing",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "/mauli-niwasa.webp",
    images: ["/mauli-niwasa.webp"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    brochureUrl: "/brochures/mauli-niwasa-36-37.pdf",
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
  },

  {
    id: "4",
    slug: "mauli-infinity-39",
    name: "Mauli Infinity 39",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "shankarpur", // [PLACEHOLDER — confirm area slug]
    status: "ongoing",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "/mauli-infinity.webp",
    images: ["/mauli-infinity.webp"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    brochureUrl: "/brochures/mauli-infinity-39.pdf",
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
  },

  {
    id: "5",
    slug: "mauli-upwan-38",
    name: "Mauli Upwan 38",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "wardha-road", // [PLACEHOLDER — confirm area slug]
    status: "new-launch",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "/mauli-upwan.webp",
    images: ["/mauli-upwan.webp"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    brochureUrl: "/brochures/mauli-upwan-38.pdf",
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
  },

  {
    id: "6",
    slug: "mauli-town-21",
    name: "Mauli Town 21",
    tagline: "[PLACEHOLDER — add project tagline]",
    location: "[PLACEHOLDER — add location, Nagpur]",
    area: "besa", // [PLACEHOLDER — confirm area slug]
    status: "ready-to-move",
    priceMin: 0, // [PLACEHOLDER — confirm price]
    priceMax: 0, // [PLACEHOLDER — confirm price]
    plotSizes: ["[PLACEHOLDER]"],
    totalPlots: 0, // [PLACEHOLDER]
    availablePlots: 0, // [PLACEHOLDER]
    heroImage: "[PLACEHOLDER — add project image: /mauli-town-21.webp]",
    images: ["[PLACEHOLDER — add project image]"],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
    // brochureUrl: "/brochures/mauli-town-21.pdf", // Uncomment once PDF is added to public/brochures/
    priceTable: [
      {
        size: "[PLACEHOLDER]",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹[PLACEHOLDER]",
      },
    ],
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


