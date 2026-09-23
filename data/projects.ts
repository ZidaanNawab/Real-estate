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
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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
    heroImage:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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
    heroImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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
    heroImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80", // [PLACEHOLDER — replace with real project image]
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
    ],
    amenities: ["[PLACEHOLDER — add amenities]"],
    highlights: ["[PLACEHOLDER — add highlights]"],
    mapEmbedUrl: "[PLACEHOLDER — add Google Maps embed URL]",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description: "[PLACEHOLDER — add project description]",
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


