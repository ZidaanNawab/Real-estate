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
    slug: "greenview-enclave-wardha-road",
    name: "Greenview Enclave",
    tagline: "Premium residential plots along Wardha Road's fastest-growing corridor",
    location: "Wardha Road, Nagpur",
    area: "wardha-road",
    status: "new-launch",
    priceMin: 28,
    priceMax: 65,
    plotSizes: ["120 sq.yd", "150 sq.yd", "200 sq.yd", "240 sq.yd"],
    totalPlots: 85,
    availablePlots: 42,
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6f65b1b0c2?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    amenities: [
      "24/7 Security",
      "Underground Electricity",
      "Wide Internal Roads (30 ft)",
      "Compound Wall",
      "Garden & Landscaping",
      "Children's Play Area",
      "Street Lighting",
      "Drainage System",
    ],
    highlights: [
      "On Wardha Road, 2 km from Ring Road junction",
      "10 min from Nagpur Airport",
      "MIHAN SEZ corridor proximity",
      "NA approved land",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.08!3d21.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA0JzUxLjkiTiA3OcKwMDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description:
      "Greenview Enclave offers meticulously planned residential plots in the heart of Nagpur's fastest-growing real estate corridor — Wardha Road. With direct access to the Ring Road and proximity to MIHAN SEZ and Dr. Babasaheb Ambedkar International Airport, this project is ideal for end-users and investors looking for strong capital appreciation.",
    priceTable: [
      {
        size: "120 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹28–34 Lakh",
      },
      {
        size: "150 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹36–44 Lakh",
      },
      {
        size: "200 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹46–54 Lakh",
      },
      {
        size: "240 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹56–65 Lakh",
      },
    ],
  },
  {
    id: "2",
    slug: "besa-garden-heights",
    name: "Besa Garden Heights",
    tagline: "Gated residential plots in Nagpur's greenest neighbourhood",
    location: "Besa, Nagpur",
    area: "besa",
    status: "ongoing",
    priceMin: 22,
    priceMax: 50,
    plotSizes: ["100 sq.yd", "150 sq.yd", "200 sq.yd"],
    totalPlots: 120,
    availablePlots: 67,
    heroImage:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    ],
    amenities: [
      "Gated Community",
      "24/7 Security",
      "Club House",
      "Jogging Track",
      "Underground Electricity",
      "Wide Internal Roads (24 ft)",
      "Rainwater Harvesting",
      "Covered Drains",
    ],
    highlights: [
      "Besa-Pipla corridor — fastest growing suburb",
      "Metro Phase 2 connectivity planned",
      "Surrounded by established schools & hospitals",
      "Fully NA-approved layout",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.12!3d21.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzEyLjAiTiA3OcKwMDcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000001",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description:
      "Besa Garden Heights is a thoughtfully designed gated community in Besa — one of Nagpur's most sought-after residential suburbs. Known for its wide roads, green cover, and excellent social infrastructure including DPS, Symbiosis, and Central Mall, Besa offers the lifestyle suburban buyers want at prices that still make sense for investors.",
    priceTable: [
      {
        size: "100 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹22–28 Lakh",
      },
      {
        size: "150 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹32–40 Lakh",
      },
      {
        size: "200 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹42–50 Lakh",
      },
    ],
  },
  {
    id: "3",
    slug: "mihan-vista-plots",
    name: "MIHAN Vista Plots",
    tagline: "Strategic investment plots in the MIHAN-SEZ growth corridor",
    location: "MIHAN Corridor, Nagpur",
    area: "mihan-corridor",
    status: "ready-to-move",
    priceMin: 35,
    priceMax: 90,
    plotSizes: ["150 sq.yd", "200 sq.yd", "300 sq.yd", "400 sq.yd"],
    totalPlots: 60,
    availablePlots: 18,
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    ],
    amenities: [
      "Immediate Possession",
      "Clear Title",
      "24/7 Security",
      "Wide Internal Roads (40 ft)",
      "Underground Electricity",
      "Compound Wall",
      "Street Lighting",
      "Water Supply",
    ],
    highlights: [
      "Adjacent to MIHAN SEZ boundary",
      "3 km from international airport terminal",
      "Multimodal Logistics Hub proximity",
      "High ROI — 18–22% appreciation over 3 years",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.04!3d21.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAzJzM2LjAiTiA3OcKwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000002",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description:
      "MIHAN Vista Plots puts you at the epicentre of Nagpur's largest infrastructure project. MIHAN (Multi-modal International Hub Airport Nagpur) spans 4,354 hectares and hosts an SEZ, international airport, Metro Rail connectivity, and a logistics park. Land adjacent to MIHAN has historically appreciated 18–22% annually, making this one of central India's most compelling land investments.",
    priceTable: [
      {
        size: "150 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹35–44 Lakh",
      },
      {
        size: "200 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹46–58 Lakh",
      },
      {
        size: "300 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹62–75 Lakh",
      },
      {
        size: "400 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹78–90 Lakh",
      },
    ],
  },
  {
    id: "4",
    slug: "shankarpur-saket-residency",
    name: "Saket Residency",
    tagline: "Affordable residential plots near Hingna MIDC",
    location: "Shankarpur, Nagpur",
    area: "shankarpur",
    status: "new-launch",
    priceMin: 14,
    priceMax: 30,
    plotSizes: ["80 sq.yd", "100 sq.yd", "120 sq.yd"],
    totalPlots: 150,
    availablePlots: 110,
    heroImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    amenities: [
      "Paved Internal Roads (20 ft)",
      "Underground Electricity",
      "Boundary Wall",
      "Solar Street Lights",
      "Drainage System",
      "NA Approved",
    ],
    highlights: [
      "Near Hingna MIDC industrial zone",
      "Affordable entry point in Nagpur",
      "Improving road infrastructure",
      "Growing rental demand from MIDC workers",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d78.96!3d21.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzI0LjAiTiA3OMKwNTcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1600000000003",
    reraNumber: "[PLACEHOLDER: RERA-REG-XXXX]",
    description:
      "Saket Residency in Shankarpur offers Nagpur's most affordable NA-approved plots in a rapidly developing suburb. Located near the Hingna MIDC industrial corridor, this layout is ideal for first-time buyers, MIDC employees looking to own a home near work, and investors seeking to capitalise on Nagpur's expanding urban boundary.",
    priceTable: [
      {
        size: "80 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹14–18 Lakh",
      },
      {
        size: "100 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹18–23 Lakh",
      },
      {
        size: "120 sq.yd",
        pricePerSqFt: "₹[PLACEHOLDER]",
        totalRange: "₹24–30 Lakh",
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
