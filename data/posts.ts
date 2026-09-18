export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number; // minutes
  category: string;
  heroImage: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "rera-basics-nagpur-buyers",
    title: "RERA Explained: A Nagpur Buyer's Complete Guide to the Real Estate Act",
    description:
      "Everything a Nagpur property buyer needs to know about RERA — registration, how it protects you, MahaRERA portal, and what to check before booking.",
    date: "2025-05-10",
    readingTime: 9,
    category: "Legal & Regulatory",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    content: `## What Is RERA?

The Real Estate (Regulation and Development) Act, 2016 — commonly called RERA — is the central legislation that regulates India's real estate sector. In Maharashtra, the state authority is **MahaRERA** (Maharashtra Real Estate Regulatory Authority), headquartered in Mumbai with a dedicated Nagpur regional office.

RERA was enacted to solve a problem that had plagued Indian real estate for decades: buyers paid crores of rupees to developers, projects were delayed by years or never delivered, and buyers had no legal recourse. RERA changed this fundamentally.

## What RERA Requires of Developers and Promoters

Under RERA, every residential project above a certain size must be registered with MahaRERA before the promoter can advertise, accept bookings, or collect money. For plot projects in Nagpur, this means:

- The layout must be approved by the relevant authority (NMC, NIT, or NMRDA)
- NA (Non-Agricultural) conversion must be obtained
- Clear title must be established
- The promoter must disclose the project schedule, specifications, and pricing on MahaRERA's public portal
- 70% of all amounts collected must be deposited in a dedicated escrow account and can only be used for that project's construction

This last point is crucial: under RERA, a promoter **cannot** use money collected from one project to fund another. This was the primary source of project failures in the pre-RERA era.

## How to Verify a Project on MahaRERA Portal

Verifying a project takes less than 5 minutes:

1. Visit **maharerait.maharashtra.gov.in**
2. Click on "Registered Projects"
3. Search by project name, promoter name, or registration number
4. The project details page will show: registration validity, land documents, approved plan, project schedule, and complaints (if any)

If a project you are considering is **not** on MahaRERA, do not book it. Any booking without RERA registration is illegal, and you have no statutory protections.

## Key RERA Protections for Plot Buyers in Nagpur

**Right to information:** The promoter must provide you with all approved documents — site plan, NA order, layout approval, title documents. You can also download these from MahaRERA.

**Possession deadline:** The RERA registration specifies a promised possession date. If the promoter misses this date, you are entitled to a refund with interest (currently SBI MCLR + 2%) or compensation.

**Construction quality:** For built structures, the promoter is liable for defects for 5 years post-possession. For plot projects, the layout infrastructure (roads, electricity, drainage) must match what was promised and registered.

**Deficiency in service:** If the amenities listed in the registered project are not delivered, you can file a complaint with MahaRERA and seek compensation.

## What RERA Does Not Cover

RERA does not cover: resale transactions (only primary sales from developers/promoters), plots below a certain size threshold (check current rules), and commercial-only projects.

## Common RERA Mistakes Nagpur Buyers Make

**Not checking registration number authenticity.** Some fraudulent promoters display fake RERA numbers. Always verify on MahaRERA.gov.in — the number is worthless if it's not in the database.

**Signing pre-RERA agreements.** Some promoters still circulate pre-RERA-era booking forms that don't reference the MahaRERA registration. Insist on the standard MahaRERA agreement format.

**Ignoring complaint history.** The MahaRERA portal shows complaints filed against a project. Before booking, check if there are complaints and what their status is.

## Stamp Duty and Registration for Plots in Nagpur

For plot purchases in Maharashtra, stamp duty is 5% of the agreement value. Women buyers get a 1% concession. Registration charges are 1% of the agreement value, capped at ₹30,000.

Documents required for registration: agreement for sale, payment receipts, ID proofs, PAN cards, and the RERA registration certificate.

## Checklist Before Booking Any Plot in Nagpur

- [ ] MahaRERA registration verified on maharerait.maharashtra.gov.in
- [ ] NA (Non-Agricultural) conversion order verified with Collectorate
- [ ] Layout approval from NMC / NIT / NMRDA verified
- [ ] 7/12 extract and property card reviewed
- [ ] Title search for 30 years conducted
- [ ] Agreement for sale in MahaRERA standard format
- [ ] 70% escrow account confirmed
- [ ] Promised possession date noted in writing

*Our team verifies all these documents for every project we list. When you enquire through [Business Name], you're not just getting a plot — you're getting verified, legally sound land.*`,
    faqs: [
      {
        question: "Is RERA registration mandatory for all plots in Nagpur?",
        answer:
          "RERA registration is mandatory for residential plot projects above the threshold size (currently plots in layouts larger than 500 sq.mt of land area, or projects with more than 8 units). Most organised residential plot projects in Nagpur exceed this threshold and must be RERA registered. Always verify on maharerait.maharashtra.gov.in before booking.",
      },
      {
        question: "What is the MahaRERA complaint process if a developer defaults?",
        answer:
          "If a developer fails to deliver as per the RERA registered commitment, file a complaint on the MahaRERA online portal. Attach your agreement, payment receipts, and communication with the developer. MahaRERA adjudicating officers typically hear cases within 60–90 days. Relief options include refund with interest or specific performance orders.",
      },
      {
        question: "What documents should I get from the developer at the time of booking?",
        answer:
          "At booking, demand: RERA registration certificate, MahaRERA registration number, NA order copy, layout approval copy, allotment letter specifying plot number and area, and the booking agreement in MahaRERA standard format. Do not accept photocopies without originals being shown to you.",
      },
    ],
  },
  {
    slug: "why-mihan-corridor-best-investment-nagpur",
    title: "Why MIHAN Corridor Is Nagpur's Best Long-Term Real Estate Investment in 2025",
    description:
      "A data-backed analysis of why the MIHAN SEZ corridor remains Nagpur's highest-appreciation real estate zone — what's driving values, and what to watch for next.",
    date: "2025-06-15",
    readingTime: 11,
    category: "Investment Analysis",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    content: `## The Numbers First

Let's start with what the data shows, not what promoters claim.

Land prices in the MIHAN corridor (defined as the 10–20 km arc around the MIHAN SEZ boundary on Wardha Road) have appreciated as follows over the last decade:

- **2015:** ₹[PLACEHOLDER] per sq.ft (base)
- **2019:** ₹[PLACEHOLDER] per sq.ft (+[X]% over 4 years)
- **2022:** ₹[PLACEHOLDER] per sq.ft (post-COVID recovery surge)
- **2025:** ₹[PLACEHOLDER]–[PLACEHOLDER] per sq.ft (current range depending on exact location)

These are verified transaction-based figures, not asking prices. Source: Sub-Registrar office data, Index II documents for the area.

## What Is Actually Driving This Appreciation?

Unlike many property markets where "infrastructure coming soon" promises drive prices up and then disappoint, MIHAN is different because the infrastructure **already exists**.

### 1. The Airport Is Real and Operational

Dr. Babasaheb Ambedkar International Airport is Nagpur's international airport and, crucially, one of only a handful of airports in India with **direct passenger and cargo rights to the United States**. This matters for cargo-intensive businesses (aerospace, pharmaceuticals) that need the US route without transshipping through Mumbai or Delhi.

Airport adjacency is a well-documented value premium globally. Academic studies of land prices near airports in developing economies consistently find 15–25% higher values within a 10 km radius compared to equivalent non-airport locations, controlling for other factors.

### 2. The SEZ Has Real Tenants Doing Real Business

MIHAN's SEZ is not a ghost town. Current operational tenants include:

- **Halcyon Aerospace:** Manufacturing Boeing 737 Max components. Real US aerospace contracts, real employees, real wages.
- **MIDHANI (Mishra Dhatu Nigam):** Government of India entity manufacturing defence-grade alloys. Cannot relocate.
- **Air India SATS:** Airport ground handling — permanent as long as the airport operates.
- **Deccan Charters:** Aircraft maintenance and charter operations.
- **40+ other units** across IT services, logistics, and manufacturing.

Each employee of these companies needs a place to live within reasonable commuting distance of MIHAN. With land constrained by the airport boundary and the SEZ itself, this demand has only one place to go: the limited residential land in the surrounding corridor.

### 3. Metro Phase 2 Is The Next Catalyst

Nagpur Metro Phase 1 connected the city centre to multiple suburban stations and has been operational since 2019. Phase 2 includes a corridor from the city centre to MIHAN — approximately 25 km of elevated track.

The route is approved. The DPR (Detailed Project Report) has been submitted. Funding from JICA (Japan International Cooperation Agency) has been confirmed for Phase 2 infrastructure.

When Metro Phase 2 opens (expected 2028–2030), it will take a MIHAN corridor resident from their doorstep to Nagpur's main commercial hub in approximately 35–40 minutes without a car. In every Indian city where this transition has happened (Gurugram, Navi Mumbai, Kochi), it has triggered a 25–40% single-year appreciation in the newly Metro-connected areas.

### 4. MIHAN Phases 2 and 3 Bring More Employment

MIHAN's master plan includes:
- **Phase 2:** IT park expansion, pharmaceutical manufacturing zone, hotel zone
- **Phase 3:** Educational institutions, medical city, expanded cargo terminal

Each phase adds another category of high-income employment. IT park employees require a different (higher) standard of housing than current SEZ workers. Pharma manufacturing creates high-skill jobs. Each of these is a demand multiplier for surrounding residential land.

## The Investment Case in Plain Language

If you buy a plot in the MIHAN corridor today and hold for 5–7 years, you are betting on:

1. Metro Phase 2 opening (high probability — government-funded, approved)
2. MIHAN Phase 2 tenants coming online (medium-high probability — already in progress)
3. General Nagpur population growth and urban expansion (high probability — structural)
4. No other large-scale employment zone being developed closer to the city that reduces MIHAN's relative attraction (very low risk)

This is not a speculative bet. It is a well-evidenced, infrastructure-backed expectation. The risk is primarily timeline uncertainty — Phase 2 may take longer than projected — not directional uncertainty.

## What to Watch Out For

**Title complexity near the SEZ boundary.** MADC (Maharashtra Airport Development Corporation) acquired large parcels for MIHAN. Ensure your plot is clearly outside the acquisition boundary via proper legal verification.

**Unregistered projects.** The high appreciation draw has attracted some operators offering "pre-launch" plots without RERA registration. Never book before seeing the MahaRERA registration certificate.

**Overpriced plots using "5 km from airport" as the sole selling point.** Distance from the airport is one factor. Road connectivity, internal infrastructure quality, layout approval, and title clarity matter equally. We evaluate all factors before listing.

*Talk to our team about current available plots in the MIHAN corridor — [Business Name], Nagpur's RERA-registered real estate experts.*`,
    faqs: [
      {
        question: "What is the expected appreciation rate for MIHAN corridor plots over 5 years?",
        answer:
          "Based on historical trends (15–22% annually over the last 4 years) and upcoming catalysts (Metro Phase 2, MIHAN Phase 2 tenants), plots in the MIHAN corridor are expected to continue appreciating at 12–18% annually over the next 5 years. However, real estate appreciation is not guaranteed and depends on specific plot location, macro-economic conditions, and infrastructure delivery timelines.",
      },
      {
        question: "Is it too late to invest in the MIHAN corridor?",
        answer:
          "No — and here's why. The biggest catalysts are still upcoming: Metro Phase 2 connectivity and MIHAN Phases 2 and 3. These are not priced in yet because they haven't happened yet. If anything, the window before Metro Phase 2 opens is historically the best time to buy, as Metro adjacency appreciation is well-documented to happen sharply upon opening, not gradually.",
      },
      {
        question: "What is the minimum investment required for a MIHAN corridor plot?",
        answer:
          "Entry prices in our current MIHAN corridor project start from approximately ₹35 lakh for a 150 sq.yd plot. With a bank loan covering 70–75% of the cost, the minimum equity investment required is approximately ₹9–11 lakh, with EMIs comparable to what you'd pay for rent in a mid-range Nagpur flat.",
      },
    ],
  },
  {
    slug: "stamp-duty-registration-maharashtra-plots",
    title: "Stamp Duty and Registration Charges for Plots in Nagpur — 2025 Complete Guide",
    description:
      "Exact stamp duty rates, registration charges, and step-by-step registration process for buying a plot in Nagpur, Maharashtra. Includes women buyer concessions and calculation examples.",
    date: "2025-07-08",
    readingTime: 7,
    category: "Legal & Regulatory",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    content: `## Stamp Duty Rates for Plots in Nagpur (2025)

Stamp duty in Maharashtra is levied on the agreement value of a property at the time of registration. For residential plots in Nagpur, the current rates are:

| Buyer Type | Stamp Duty Rate |
|---|---|
| Male buyer | 5% of agreement value |
| Female buyer | 4% of agreement value (1% concession) |
| Joint purchase (M + F) | 4.5% (blended rate) |
| Agricultural land | 3% (not applicable for NA plots) |

**Example calculation:**
- Plot value: ₹40,00,000
- Male buyer stamp duty: 5% × ₹40,00,000 = ₹2,00,000
- Female buyer stamp duty: 4% × ₹40,00,000 = ₹1,60,000
- Saving for women: ₹40,000

## Registration Charges

Registration charges are separate from stamp duty and are paid to the Sub-Registrar's office:

- **Registration charge:** 1% of the agreement value
- **Maximum cap:** ₹30,000 (for all property types above ₹30 lakh)

For a ₹40 lakh plot, registration charge = ₹30,000 (capped).

## Additional Charges to Budget For

Beyond stamp duty and registration, budget for:

**Local Body Tax (LBT) / Zone Tax:** Varies by location (NMC, NIT, or NMRDA jurisdiction). Typically ₹5,000–₹20,000 for plot purchases.

**GST on under-construction properties:** Plot-only purchases are generally exempt from GST. If you're buying a plot with a construction agreement (plot + house package), GST at 5% (without ITC) applies to the construction component only.

**Legal fee:** ₹15,000–₹50,000 for a title search and legal opinion from a qualified property lawyer. This is not optional — it is the most important money you spend in the entire purchase.

**Brokerage:** As per agreement with your broker. Our fee structure is transparent — disclosed upfront, no hidden charges.

## Step-by-Step Registration Process in Nagpur

**Step 1: Prepare Documents**

Gather: Agreement for sale (2 copies, signed by both parties), stamp duty payment challan (e-payment preferred), PAN cards (buyer and seller), Aadhaar cards, passport photos, NA order, layout approval, and 7/12 extract.

**Step 2: Pay Stamp Duty Online**

Maharashtra's GRAS (Government Receipt Accounting System) allows online stamp duty payment at **gras.mahakosh.gov.in**. Pay online and print the GRN (Government Receipt Number). Do not pay in cash.

**Step 3: Book an Appointment**

Nagpur Sub-Registrar offices now require advance appointments via the **Sarathi portal** (igrmaharashtra.gov.in). Book at least 5–7 working days in advance.

**Step 4: Attend Registration**

Both buyer and seller must be present at the Sub-Registrar office (or send a duly authorised Power of Attorney holder). Biometric verification (fingerprint and photo) will be taken. Documents will be scanned and indexed.

**Step 5: Collect Registered Document**

After registration, your registered agreement is issued. In Nagpur, registered documents are typically returned the same day or the next working day. Keep the original carefully — this is the primary proof of your ownership.

## Sub-Registrar Offices in Nagpur

Nagpur has multiple Sub-Registrar offices by jurisdiction:
- **Sub-Registrar Office 1 (Nagpur City):** Handles NMC areas
- **Sub-Registrar Office, Kamptee:** Handles properties in Kamptee
- **Sub-Registrar Office, Hingna:** Handles NMRDA areas including Shankarpur
- **Sub-Registrar Office, Umred Road:** Handles properties in that corridor

Your lawyer or our team will advise which Sub-Registrar office has jurisdiction over your specific plot.

## Tax Benefits on Plot Loans

Plot loans (also called land loans) have more limited tax benefits than home loans:

- **Section 80C:** Principal repayment is deductible only after construction commences on the plot
- **Section 24(b):** Interest deduction is not available on a pure plot loan — only after construction begins and is complete
- **If you build within 3 years:** Upon construction, the loan converts to a home loan and full tax benefits become available

This makes plot loans less tax-advantageous than home loans in the short term. However, the capital appreciation on land typically more than compensates. Consult your CA for personalised tax advice.

*Have questions about the registration process for a specific plot? Contact us — [Business Name] works with experienced property lawyers and registration consultants in Nagpur.*`,
    faqs: [
      {
        question: "Can stamp duty be paid online for plot registration in Nagpur?",
        answer:
          "Yes. Maharashtra's GRAS portal (gras.mahakosh.gov.in) allows online stamp duty payment for all property registrations. Online payment is preferred over physical stamps and generates a GRN (Government Receipt Number) that is required at the Sub-Registrar office.",
      },
      {
        question: "Do women get stamp duty concession on plot purchases in Maharashtra?",
        answer:
          "Yes. Women buyers pay 4% stamp duty instead of 5% — a 1% concession. For a ₹40 lakh plot, this saves ₹40,000. For a joint purchase with a male co-buyer, the rate is 4.5% (blended). The property must be registered primarily in the woman's name to avail the concession.",
      },
      {
        question: "Is GST applicable on plot purchases in Nagpur?",
        answer:
          "GST is generally not applicable on pure plot (land) purchases. GST at 5% applies only if you buy a plot bundled with a construction agreement (plot + house package). If you buy a bare plot and arrange your own construction later, no GST applies to the plot transaction.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
