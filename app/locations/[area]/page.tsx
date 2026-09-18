import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, TrendingUp, Train, ChevronDown } from "lucide-react";
import { locations, getLocationBySlug } from "@/data/locations";
import { getProjectsByArea } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQAccordion } from "./FAQAccordion";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ area: l.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { area } = await params;
  const loc = getLocationBySlug(area);
  if (!loc) return {};

  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${area}`,
    image: loc.heroImage,
  });
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default async function LocationPage({ params }: PageProps) {
  const { area } = await params;
  const loc = getLocationBySlug(area);
  if (!loc) notFound();

  const areaProjects = getProjectsByArea(area);

  const faqJsonLd = faqSchema(loc.faqs);
  const crumbJsonLd = breadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Locations", url: `${siteUrl}/locations` },
    { name: loc.name, url: `${siteUrl}/locations/${area}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />

      <div className="pt-20 min-h-screen bg-neutral">
        {/* Hero */}
        <div className="relative h-[45vh] min-h-[300px] max-h-[480px] bg-navy">
          <Image
            src={loc.heroImage}
            alt={`Residential investment opportunities in ${loc.fullName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Locations" },
                { label: loc.name },
              ]}
            />
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
              Plots in {loc.name}, Nagpur
            </h1>
            <p className="text-white/70 mt-2 max-w-xl">{loc.tagline}</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Overview */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Overview — {loc.name}, Nagpur
                  </h2>
                  {loc.overview.split("\n\n").map((para, i) => (
                    <p key={i} className="text-charcoal/70 leading-relaxed mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Connectivity */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Train size={20} className="text-orange" />
                    <h2 className="font-serif text-2xl font-bold text-charcoal">
                      {loc.connectivity.title}
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {loc.connectivity.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <MapPin size={14} className="text-orange mt-1 shrink-0" />
                        <span className="text-charcoal/70 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Price trend */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={20} className="text-orange" />
                    <h2 className="font-serif text-2xl font-bold text-charcoal">
                      Price Trend — {loc.name}
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[400px]">
                      <thead>
                        <tr className="border-b border-charcoal/10">
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">Period</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">Min Price/Sq.Ft</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">Max Price/Sq.Ft</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loc.priceTrend.map((row, i) => (
                          <tr key={i} className="border-b border-charcoal/5">
                            <td className="py-3 px-4 font-semibold text-charcoal text-sm">{row.period}</td>
                            <td className="py-3 px-4 text-charcoal/70 text-sm">{row.minPerSqFt}</td>
                            <td className="py-3 px-4 text-charcoal/70 text-sm">{row.maxPerSqFt}</td>
                            <td className="py-3 px-4 text-sm">
                              <span className="text-green-600 font-medium">{row.trend}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-charcoal/40 mt-3">
                    * Prices are approximate based on registered transactions. Contact us for current rates.
                  </p>
                </div>
              </AnimatedSection>

              {/* Landmarks */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Nearby Landmarks
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {loc.landmarks.map((lm, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
                        <span className="text-charcoal/70 text-sm">{lm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Why invest */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Why Invest in {loc.name}?
                  </h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {loc.whyInvest.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-orange text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-charcoal/80 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-charcoal/10">
                    <p className="text-charcoal/70 leading-relaxed text-sm">
                      {loc.investContent.substring(0, 600)}...
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Projects in this area */}
              {areaProjects.length > 0 && (
                <AnimatedSection>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                      Our Projects in {loc.name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {areaProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* FAQ */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                    Frequently Asked Questions — {loc.name}, Nagpur
                  </h2>
                  <FAQAccordion faqs={loc.faqs} />
                </div>
              </AnimatedSection>

              {/* Internal links */}
              <AnimatedSection>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="text-navy hover:text-orange transition-colors text-sm font-medium underline underline-offset-4"
                  >
                    ← Browse all projects
                  </Link>
                  {locations
                    .filter((l) => l.slug !== area)
                    .slice(0, 2)
                    .map((l) => (
                      <Link
                        key={l.slug}
                        href={`/locations/${l.slug}`}
                        className="text-navy hover:text-orange transition-colors text-sm font-medium underline underline-offset-4"
                      >
                        Explore {l.name} →
                      </Link>
                    ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection>
                  <div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-sm">
                    <h2 className="font-serif text-xl font-bold text-charcoal mb-1">
                      Interested in {loc.name} plots?
                    </h2>
                    <p className="text-charcoal/60 text-sm mb-6">
                      Get current pricing and available plots delivered to your WhatsApp.
                    </p>
                    <EnquiryForm
                      sourcePage={`/locations/${area}`}
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
