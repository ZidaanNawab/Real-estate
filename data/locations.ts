// Location pages data — 800+ words per area
// Each area targets specific Nagpur local SEO keywords

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  connectivity: {
    title: string;
    points: string[];
  };
  landmarks: string[];
  priceTrend: {
    period: string;
    minPerSqFt: string;
    maxPerSqFt: string;
    trend: string;
  }[];
  whyInvest: string[];
  investContent: string;
  faqs: FAQ[];
}

export const locations: LocationData[] = [
  {
    slug: "wardha-road",
    name: "Wardha Road",
    fullName: "Wardha Road, Nagpur",
    tagline: "Nagpur's prime investment corridor — airport, Ring Road & MIHAN in one address",
    heroImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    metaTitle: "Plots in Wardha Road Nagpur | Residential Land Investment 2025",
    metaDescription:
      "Buy residential plots on Wardha Road, Nagpur's fastest-growing real estate corridor. Near Ring Road, MIHAN SEZ & international airport. RERA-registered projects.",
    overview:
      "Wardha Road is Nagpur's most dynamic real estate corridor in 2025. Stretching south from Nagpur's city core towards Wardha district, this arterial highway has transformed from a semi-rural road into one of central India's most active investment destinations. The primary drivers are clear: the MIHAN Multi-modal Hub Airport Nagpur SEZ sits at its southern end, Nagpur's Ring Road passes through it, and Dr. Babasaheb Ambedkar International Airport is a short 10-minute drive away. These factors have attracted IT parks, logistics companies, and large residential townships, creating a flywheel effect that keeps pushing property values upward.\n\nFor homebuyers, Wardha Road offers a compelling proposition: you get proximity to Nagpur's fastest-growing employment zone (MIHAN SEZ employs tens of thousands across aerospace, IT, and manufacturing) while still being within 20–25 minutes of the city centre. Wide roads, relatively affordable land compared to the Amravati Road or Koradi Road corridors, and improving social infrastructure (malls, hospitals, schools) make this area a strong choice for residential land purchase.",
    connectivity: {
      title: "Wardha Road Connectivity",
      points: [
        "Nagpur Ring Road (NH-353B) interchange at South Nagpur — reduces commute to all directions",
        "Dr. Babasaheb Ambedkar International Airport: 8–12 km depending on exact location, ~10 min drive",
        "MIHAN SEZ boundary: 12–18 km from Wardha Road entry, 15–20 min drive",
        "Nagpur Railway Station: 20–28 km, well-connected via Ring Road",
        "Hingna MIDC Industrial Zone: 22 km via Ring Road",
        "Nagpur Metro Phase 2 (planned corridor along Wardha Road) — route announced, land acquisition underway",
        "NH-7 (Nagpur–Hyderabad National Highway) runs parallel — freight and intercity access",
        "NHAI 4-lane highway expansion completed on Wardha Road up to Sawangi",
      ],
    },
    landmarks: [
      "AIIMS Nagpur (Government Medical College, Wardha Road) — Nagpur's premier medical institution",
      "Symbiosis Institute, Wardha Road Campus",
      "Wardha Road Bus Terminus (MSRTC)",
      "Ishwar Tower Commercial Hub",
      "Central Mall, Wardha Road",
      "Tulip Multispeciality Hospital",
      "Sri Balaji International School",
      "Brigade Orchards Township (large-scale gated community)",
    ],
    priceTrend: [
      { period: "2020", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "Base year" },
      { period: "2022", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+18% over 2 years" },
      { period: "2024", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+26% over 4 years" },
      { period: "2025 (projected)", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+8–12% annually" },
    ],
    whyInvest: [
      "MIHAN SEZ is India's largest greenfield SEZ project — sustained employment generation drives housing demand",
      "Airport proximity consistently commands 15–20% premium over comparable Nagpur locations",
      "Ring Road reduces commute to all parts of Nagpur — universal connectivity advantage",
      "NA-approved layouts available at prices still below Amravati Road and Besa",
      "Metro Phase 2 route announcement has already triggered pre-announcement appreciation",
      "Major IT and logistics companies expanding warehousing and office space along corridor",
    ],
    investContent:
      "The investment case for Wardha Road plots is built on hard infrastructure, not speculation. MIHAN is a Central Government project spanning 4,354 hectares — it is not going away. The SEZ currently hosts Boeing, Halcyon Aerospace, MIDHANI, and over 40 other companies. As MIHAN Phase 2 and 3 come online through 2026–2030, the employment base will multiply, and housing demand within a 15 km radius will rise sharply.\n\nFor residential buyers, the sweet spot is plots in the 1,000–2,000 sq.ft range (120–240 sq.yd) in NA-approved, RERA-registered layouts. These are large enough to build a comfortable 2BHK or 3BHK home, and the entry prices (₹28–65 lakh depending on size and exact location) are achievable for most salaried buyers with a home loan.\n\nFor investors, Wardha Road plots have delivered 8–12% annual appreciation consistently over the last 5 years. Unlike built-up properties, land requires minimal maintenance and carries no depreciation. With Metro Phase 2 connectivity and further SEZ expansion anticipated, the medium-term outlook (3–7 years) is strongly positive.\n\nThe key due diligence items: verify NA order (Non-Agricultural land conversion), check layout approval from the relevant authority (NMC or NIT), confirm RERA registration, and verify the plot's title chain for at least 30 years. Our team handles all these checks on every project we list.",
    faqs: [
      {
        question: "What is the current price per square foot for plots on Wardha Road, Nagpur?",
        answer:
          "Plot prices on Wardha Road currently range from approximately ₹[PLACEHOLDER] to ₹[PLACEHOLDER] per sq.ft depending on the exact micro-location, distance from Ring Road, and project specifications. Plots closer to the Ring Road interchange and airport command a premium. Contact us for current pricing on specific projects.",
      },
      {
        question: "Is it safe to buy a plot on Wardha Road? What documents should I check?",
        answer:
          "Wardha Road has many well-established, RERA-registered projects. Before purchase, verify: (1) RERA registration number on MahaRERA portal, (2) NA (Non-Agricultural) order from the Collectorate, (3) Layout approval from NMC or NIT, (4) 7/12 extract and property card, (5) Encumbrance certificate for 30 years. Our team verifies all these before listing any project.",
      },
      {
        question: "Is there Metro connectivity to Wardha Road?",
        answer:
          "Nagpur Metro Phase 2 includes a corridor along Wardha Road. Route announcement has been made and land acquisition is in progress. Once operational (expected 2026–2028), Metro connectivity will significantly improve commute times to the city centre and add further value to properties along the corridor.",
      },
      {
        question: "How far is MIHAN from Wardha Road plots?",
        answer:
          "MIHAN SEZ is located at the southern end of Wardha Road. Depending on the project's exact location, distance to MIHAN is 12–20 km, typically a 15–25 minute drive. The airport, which is adjacent to MIHAN, is 8–12 km from most Wardha Road plot projects.",
      },
      {
        question: "Can I get a bank loan to buy a plot on Wardha Road?",
        answer:
          "Yes. Leading banks (SBI, HDFC, ICICI, Axis, Bank of Baroda) and housing finance companies offer plot loans for RERA-registered, NA-approved layouts. Loan-to-value ratios typically range from 70–80% of the plot value. The process is similar to a home loan. Our team can connect you with trusted loan advisors.",
      },
    ],
  },
  {
    slug: "besa",
    name: "Besa",
    fullName: "Besa, Nagpur",
    tagline: "Nagpur's most liveable suburb — green, well-connected, and still affordable",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    metaTitle: "Plots in Besa Nagpur | Residential Land in Besa-Pipla Corridor",
    metaDescription:
      "Buy residential plots in Besa, Nagpur's top green suburb. Excellent schools, hospitals, and connectivity. NA-approved RERA-registered projects available.",
    overview:
      "Besa is Nagpur's answer to the question: 'Where can I find a green, well-planned neighbourhood with good schools, hospitals, and connectivity — without paying South Mumbai prices?' The Besa-Pipla corridor, stretching east of the Outer Ring Road towards Pipla, has emerged as the city's most desirable suburban address for professionals, families, and NRIs returning to Nagpur.\n\nWhat makes Besa stand out is the combination of factors that's rare even in India's tier-1 cities: DPS, Symbiosis, and Orchids International schools within a 5-km radius; hospitals including Wockhardt and Care Apollo nearby; Central Mall and Experience Mall for retail; and wide, tree-lined roads developed by NIT Nagpur with proper footpaths and drainage. The area feels planned — because large portions of it were developed under NIT's jurisdiction, which enforces stricter development norms than older NMC zones.\n\nProperty prices in Besa are higher than Shankarpur or Hingna but still 20–30% below equivalent Amravati Road addresses, making it a sweet spot for the mid-to-premium residential buyer.",
    connectivity: {
      title: "Besa Connectivity",
      points: [
        "Outer Ring Road (ORR) access at multiple points — connects to all highways",
        "Nagpur Metro Phase 1 nearest station: Sitabuldi (20 min by road); Phase 2 to extend closer",
        "Nagpur Railway Station: 18–22 km, 25–35 min via Ring Road",
        "Dr. Babasaheb Ambedkar International Airport: 22 km, 25–30 min",
        "Nagpur-Mumbai Expressway access via Ring Road",
        "MIHAN SEZ: 25 km, 30 min via Ring Road",
        "State Highway 264 (Nagpur-Bhandara Road) — eastern connectivity",
        "Frequent bus services connecting Besa to city centre",
      ],
    },
    landmarks: [
      "DPS Nagpur (Delhi Public School) — one of Nagpur's top schools",
      "Symbiosis Skills and Professional University",
      "Orchids International School",
      "Wockhardt Hospital",
      "Care Apollo Spectra Hospital, Besa",
      "Central Mall (India's first underground mall)",
      "Experience Mall",
      "Nagpur University Campus (Ambazari)",
      "Futala Lake — popular recreational destination",
    ],
    priceTrend: [
      { period: "2020", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "Base year" },
      { period: "2022", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+22% over 2 years" },
      { period: "2024", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+30% over 4 years" },
      { period: "2025 (projected)", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+10–14% annually" },
    ],
    whyInvest: [
      "Established social infrastructure — top schools and hospitals already in place",
      "NIT-planned development ensures better road widths, drainage, and green spaces",
      "Strong rental demand from professionals, NRIs, and students",
      "Metro Phase 2 extension towards Besa corridor announced",
      "Gated communities available at mid-market prices",
      "Lower crime rates and better civic services than older Nagpur localities",
    ],
    investContent:
      "Besa has undergone a generational transformation. A decade ago, it was considered 'too far out'. Today, Nagpur's professionals, returning NRIs, and families upsizing from the congested city centre all put Besa on their shortlist. The reasons are structural: Besa's schools are genuinely excellent (DPS and Symbiosis are not convenience-school alternatives — they are destination schools that families in other areas of Nagpur apply to), the roads are wider and better maintained, and the green cover is higher than virtually any other Nagpur suburb.\n\nFor investors, Besa plots have appreciated 10–14% annually over the past 4 years — ahead of the city average. The primary driver is demand compression: limited available land within the Besa bubble (NIT norms limit high-density construction) combined with growing demand from professionals in MIHAN, Hingna, and the city's IT parks. Rental yields for constructed properties in Besa are among Nagpur's strongest.\n\nKey micro-locations within the Besa corridor: Besa Main Road itself (premium, established), Besa-Pipla Road (growth phase, better value), and Pipla (emerging, highest upside). Our projects are concentrated in the Besa-Pipla corridor where the value equation is strongest for buyers today.",
    faqs: [
      {
        question: "What is the price of plots in Besa, Nagpur?",
        answer:
          "Plot prices in Besa range from approximately ₹[PLACEHOLDER] to ₹[PLACEHOLDER] per sq.ft. Prices vary significantly based on exact micro-location — Besa Main Road commands the highest premium, while Besa-Pipla and inner lanes offer better value. Call us for current project-specific rates.",
      },
      {
        question: "Is Besa good for residential living?",
        answer:
          "Besa is consistently rated one of Nagpur's best residential suburbs. Its strengths: top-tier schools (DPS, Symbiosis), quality hospitals, well-maintained roads (NIT-developed areas), low density, and a clean, green environment. It's particularly popular with families, NRIs, and professionals working in MIHAN or the city's IT parks.",
      },
      {
        question: "Will Metro connectivity come to Besa?",
        answer:
          "Nagpur Metro Phase 2 includes a corridor planned towards the eastern suburbs including Besa. While the exact timeline is subject to government approvals, the route has been identified and is factored into infrastructure planning. Current Phase 1 stations provide indirect connectivity; Phase 2 will make Besa a directly Metro-connected suburb.",
      },
      {
        question: "Are plots in Besa NA approved?",
        answer:
          "All residential plot projects listed by us are NA (Non-Agricultural) approved and RERA registered. The NA order converts agricultural land to residential use and is a mandatory requirement for legal plot purchase in Maharashtra. We verify this document before listing any project.",
      },
    ],
  },
  {
    slug: "shankarpur",
    name: "Shankarpur",
    fullName: "Shankarpur, Nagpur",
    tagline: "Nagpur's most affordable entry into the property market — near Hingna MIDC",
    heroImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    metaTitle: "Plots in Shankarpur Nagpur | Affordable Land Near Hingna MIDC",
    metaDescription:
      "Buy affordable residential plots in Shankarpur, Nagpur near Hingna MIDC. Entry-level pricing, NA approved layouts. Perfect for first-time buyers and investors.",
    overview:
      "Shankarpur is Nagpur's affordable frontier — the suburb where first-time homebuyers, young working professionals, and strategic investors are planting their flags before prices catch up with the rest of the city. Located on Nagpur's western periphery, adjacent to the Hingna MIDC industrial zone (one of Maharashtra's largest industrial estates), Shankarpur benefits from consistent housing demand generated by the 50,000+ workers employed in Hingna's factories, warehouses, and processing units.\n\nThe area is in active development: Nagpur Metropolitan Region Development Authority (NMRDA) has included Shankarpur in its urban expansion plan, road widening is ongoing, and basic civic infrastructure is being installed ahead of the anticipated population growth. Those who buy now are positioned to benefit from the infrastructure lag — buying before amenities are established, and selling (or holding for rental) when they arrive.\n\nShankarpur is not for buyers seeking established conveniences today. It is for buyers who understand that today's periphery is tomorrow's mid-city, and who are willing to lock in prices that reflect the current state rather than the future one.",
    connectivity: {
      title: "Shankarpur Connectivity",
      points: [
        "Nagpur Ring Road: 5 km — connects to all arterial highways",
        "Hingna MIDC Industrial Estate: 4–8 km — primary employment hub",
        "NH-6 (Nagpur–Mumbai National Highway) access via Ring Road",
        "Nagpur Railway Station: 22 km, 30–40 min",
        "Dr. Babasaheb Ambedkar International Airport: 28 km, 35–45 min",
        "Butibori MIDC: 20 km via Ring Road — another major employment zone",
        "Nagpur Metro Phase 3 (long-term) — Shankarpur corridor under study",
        "MSRTC bus service connecting to Nagpur main bus terminus",
      ],
    },
    landmarks: [
      "Hingna MIDC Industrial Estate — Maharashtra's major industrial zone",
      "Balaji Temple, Shankarpur",
      "Hingna Municipal Council offices",
      "Government ITI, Hingna",
      "Hingna Urban Health Centre",
      "Shankarpur Bazaar (local market)",
      "Nagpur-Mumbai Highway (NH-6) access point",
    ],
    priceTrend: [
      { period: "2020", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "Base year" },
      { period: "2022", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+14% over 2 years" },
      { period: "2024", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+20% over 4 years" },
      { period: "2025 (projected)", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+8–10% annually" },
    ],
    whyInvest: [
      "Nagpur's most affordable NA-approved plots — entry prices from ₹14 lakh",
      "Sustained rental demand from 50,000+ MIDC workers seeking housing",
      "NMRDA urban expansion plan includes Shankarpur — infrastructure coming",
      "Ring Road connectivity reduces the 'far from city' disadvantage",
      "Maximum return potential as the area transitions from periphery to established suburb",
      "Low holding cost — minimal maintenance on vacant plots",
    ],
    investContent:
      "The investment thesis for Shankarpur is straightforward: buy at periphery prices before the city catches up. Nagpur is expanding — its population is growing, MIHAN and Hingna MIDC are creating sustained employment, and the city's urban boundary (as defined by NMRDA's master plan) explicitly includes Shankarpur in the future urban footprint.\n\nThe rental case is equally compelling. Hingna MIDC houses over 500 industrial units employing workers at every skill level. These workers need affordable housing within commuting distance. A modest constructed property in Shankarpur can generate consistent rental income from industrial workers — a tenant base that is notably stable and has genuine housing need.\n\nFor home buyers on a budget, Shankarpur offers something that's becoming rare in Indian cities: the ability to own a meaningful piece of land (80–120 sq.yd) at a price achievable on a middle-income salary. The trade-off is 'not everything is convenient today' — but with Ring Road connectivity and improving bus services, this is less of a disadvantage than it sounds. Many buyers choose to own the plot, build in 2–3 years once infrastructure improves, and use the intervening time to accumulate construction funds.",
    faqs: [
      {
        question: "What is the minimum plot size available in Shankarpur?",
        answer:
          "Our current Shankarpur project (Saket Residency) offers plots starting from 80 sq.yd (approximately 720 sq.ft), which is sufficient to build a comfortable 2-room home or a 1BHK flat. Plots of 100 sq.yd and 120 sq.yd are also available for buyers wanting a slightly larger footprint.",
      },
      {
        question: "How far is Shankarpur from Hingna MIDC?",
        answer:
          "Shankarpur is 4–8 km from the Hingna MIDC Industrial Estate, depending on your exact plot location and the specific MIDC gate you're targeting. This translates to a 10–20 minute auto or two-wheeler commute — very practical for MIDC employees who want to own rather than rent.",
      },
      {
        question: "Is Shankarpur included in Nagpur's city limits?",
        answer:
          "Shankarpur falls within the NMRDA (Nagpur Metropolitan Region Development Authority) planning zone. While it is not currently within NMC (Nagpur Municipal Corporation) limits, NMRDA's master plan indicates expansion of the urban boundary to include the area over the coming 5–10 years. This transition to municipal limits is a key value-unlock event for property owners.",
      },
      {
        question: "Can I get a bank home loan for Shankarpur plots?",
        answer:
          "Yes, provided the plot is in a RERA-registered, NA-approved layout. Banks are comfortable lending for plots in NMRDA-approved areas. Loan-to-value is typically 70–75% for plots in developing suburbs. We work with several housing finance companies familiar with Shankarpur layouts.",
      },
    ],
  },
  {
    slug: "mihan-corridor",
    name: "MIHAN Corridor",
    fullName: "MIHAN Corridor, Nagpur",
    tagline: "Central India's most significant infrastructure investment — land next to India's largest SEZ",
    heroImage:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80",
    metaTitle: "Plots Near MIHAN SEZ Nagpur | Real Estate Investment MIHAN Corridor",
    metaDescription:
      "Invest in residential plots near MIHAN SEZ, Nagpur's international airport and multimodal hub. Highest appreciation corridor in central India. RERA-registered.",
    overview:
      "MIHAN — Multi-modal International Cargo Hub and Airport at Nagpur — is India's single most ambitious greenfield infrastructure project. Spanning 4,354 hectares at the southern edge of Nagpur, MIHAN integrates Dr. Babasaheb Ambedkar International Airport (the only airport in India with direct US-India passenger rights), India's largest greenfield SEZ, a Multimodal Logistics Park, and Nagpur Metro Rail connectivity into a single, planned hub.\n\nThe scale of MIHAN is difficult to overstate: the SEZ alone is larger than many European cities' industrial zones. Phase 1 is complete and operational, hosting Boeing 737 Max components manufacturing (Halcyon Aerospace), MIDHANI (defence metallurgy), Deccan Charters, and 40+ other companies. Phase 2 is under active development with additional aerospace, IT, and pharma tenants confirmed.\n\nFor real estate buyers, the MIHAN Corridor — the 15–20 km arc of land surrounding MIHAN's boundary — has been the highest-performing property market in central India over the last decade. Land that was ₹200/sq.ft in 2010 reached ₹1,200–1,800/sq.ft by 2024. This is not speculation: it is the arithmetic of a large, government-backed employment zone creating sustained housing demand in a geographically constrained area.",
    connectivity: {
      title: "MIHAN Corridor Connectivity",
      points: [
        "Dr. Babasaheb Ambedkar International Airport: on-site / 2–5 km depending on project location",
        "Nagpur Ring Road (NH-353B): runs along MIHAN's northern boundary — connects all highways",
        "NH-7 (Nagpur–Hyderabad): 5 km — freight and intercity connectivity",
        "Nagpur Metro Phase 2: approved corridor connecting MIHAN to city centre (25 km, ~35 min)",
        "Multimodal Logistics Hub: on-site — road, rail, air freight in one location",
        "Nagpur Railway Station: 25 km, 30–40 min via Ring Road",
        "Wardha Road (NH-7B): direct 4-lane highway to city",
        "Gondia-Nagpur Expressway (proposed): will further improve eastern connectivity",
      ],
    },
    landmarks: [
      "Dr. Babasaheb Ambedkar International Airport — only airport in India with direct US cargo rights",
      "MIHAN SEZ — India's largest greenfield Special Economic Zone",
      "Halcyon Aerospace (Boeing 737 Max components) — anchor tenant",
      "MIDHANI (Mishra Dhatu Nigam) — defence materials manufacturer",
      "Multimodal Logistics Hub Nagpur",
      "Nagpur Metro Phase 2 terminal station (planned)",
      "MIHAN IT Park",
      "Nagpur Special Economic Zone (NSEZ) office",
    ],
    priceTrend: [
      { period: "2020", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "Base year" },
      { period: "2022", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+28% over 2 years" },
      { period: "2024", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+55% over 4 years" },
      { period: "2025 (projected)", minPerSqFt: "₹[PLACEHOLDER]", maxPerSqFt: "₹[PLACEHOLDER]", trend: "+15–20% annually" },
    ],
    whyInvest: [
      "India's largest greenfield SEZ — government-backed, cannot be cancelled, already operational",
      "Airport adjacency premium: consistent 20–30% higher values than comparable non-airport locations",
      "Metro Phase 2 connecting MIHAN to city centre — approved and funded",
      "Aerospace and defence manufacturing cluster creates a specialised, high-salary workforce",
      "Land within 5 km of operational airport boundary is a finite, non-replicable asset",
      "MIHAN Phase 2 and 3 will bring pharma, IT parks, and hotel zones — additional demand drivers",
    ],
    investContent:
      "The MIHAN investment case is not built on hope — it is built on infrastructure that exists and is operating today. The airport processes international cargo. Boeing jets built with components from Halcyon Aerospace (MIHAN) are flying today. MIDHANI supplies materials to India's defence forces. These are not future plans; they are current economic activity generating wages that create housing demand in the surrounding area.\n\nFor residential land buyers near MIHAN, the question is not 'will this area grow?' — it already has. The question is 'how much more is left?' The answer, according to MIHAN's own master plan, is: Phases 2 and 3 will add IT parks, pharmaceutical manufacturing, a hotel zone, educational institutions, and an expanded logistics hub. Each of these is another category of high-income employment being added to the MIHAN ecosystem.\n\nPlot buyers near MIHAN should budget for a medium-term hold (3–7 years). In this period, Metro Phase 2 will likely open, making the commute from MIHAN to the city centre practical without a car. This single event has historically triggered 20–30% single-year appreciation near Metro stations in cities across India.\n\nThe primary risk factor: land near MIHAN can be complex from a title perspective due to the large land acquisition carried out by MADC (Maharashtra Airport Development Corporation). Buyers must verify that their plot is clearly outside the MIHAN boundary, has clean title, and holds valid NA order. Our team handles this due diligence rigorously before listing any MIHAN corridor project.",
    faqs: [
      {
        question: "What is MIHAN and why does it affect property prices?",
        answer:
          "MIHAN (Multi-modal International Cargo Hub and Airport at Nagpur) is India's largest greenfield SEZ, spanning 4,354 hectares. It integrates an international airport, SEZ, metro rail, and logistics park. Large employment zones generate housing demand in surrounding areas — this is the fundamental driver of property appreciation near MIHAN.",
      },
      {
        question: "Are plots near MIHAN safe to buy legally?",
        answer:
          "Yes, provided you buy in an approved layout outside the MIHAN acquisition boundary. The critical documents to verify: NA order, RERA registration, 7/12 extract, property card, and a boundary survey confirming the plot is not within the MADC-acquired zone. We handle all these verifications before listing any project.",
      },
      {
        question: "What is the Metro Phase 2 timeline for MIHAN connectivity?",
        answer:
          "Nagpur Metro Phase 2 includes a corridor connecting the city centre to MIHAN (approximately 25 km). The route is approved and DPR (Detailed Project Report) has been submitted to the Central Government. Construction is expected to commence by 2025–2026, with operational target of 2028–2030. This is a major pending value unlock for MIHAN corridor properties.",
      },
      {
        question: "What companies are operating in MIHAN SEZ?",
        answer:
          "Key operational tenants include Halcyon Aerospace (Boeing 737 Max component manufacturing), MIDHANI (defence materials), Deccan Charters, Air India SATS Airport Services, and 40+ other units across aerospace, IT, logistics, and manufacturing. MIHAN Phase 2 will add pharma and IT park tenants.",
      },
      {
        question: "How do MIHAN plots compare to Wardha Road or Besa investments?",
        answer:
          "MIHAN corridor plots carry the highest appreciation potential but also the highest price points among our listed areas. Wardha Road offers moderate pricing with strong connectivity. Besa offers the best lifestyle quality for end-users. MIHAN is primarily for investors seeking capital appreciation over 3–7 years. The right choice depends on your budget, timeline, and whether you plan to build or hold.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}
