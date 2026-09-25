import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, Phone, Download } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";

import { buildMetadata } from "@/lib/metadata";
import {
  realEstateListingSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { StatusBadge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { formatPriceRange } from "@/lib/utils";
import { ProjectGallery } from "./ProjectGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.name} — Residential Plots in ${project.location}`,
    description: `${project.tagline}. ${project.availablePlots} plots available. Price range: ${formatPriceRange(project.priceMin, project.priceMax)}. RERA registered.`,
    path: `/projects/${slug}`,
    image: project.heroImage,
  });
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const listingSchema = realEstateListingSchema({
    name: project.name,
    description: project.description,
    location: project.location,
    image: project.heroImage,
    url: `${siteUrl}/projects/${slug}`,
    priceMin: project.priceMin,
    priceMax: project.priceMax,
    status: project.status,
  });

  const crumbSchema = breadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Projects", url: `${siteUrl}/projects` },
    { name: project.name, url: `${siteUrl}/projects/${slug}` },
  ]);

  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />

      <div className="pt-20 min-h-screen bg-neutral">
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[320px] max-h-[520px] bg-navy">
          <Image
            src={project.heroImage}
            alt={`${project.name} residential plots in ${project.location}, Nagpur`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Projects", href: "/projects" },
                { label: project.name },
              ]}
            />
            <div className="flex items-start gap-3 mt-3 flex-wrap">
              <StatusBadge status={project.status} />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-white/70 mt-2">
              <MapPin size={16} className="text-orange" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Overview */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    About This Project
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed">{project.description}</p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-charcoal/10">
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">Price Range</p>
                      <p className="font-serif text-lg font-bold text-navy">
                        {formatPriceRange(project.priceMin, project.priceMax)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">Total Plots</p>
                      <p className="font-bold text-charcoal">{project.totalPlots}</p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">Available</p>
                      <p className="font-bold text-orange">{project.availablePlots}</p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">RERA No.</p>
                      <p className="font-medium text-charcoal text-sm">{project.reraNumber}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Gallery */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Gallery</h2>
                  <ProjectGallery images={project.images} projectName={project.name} />
                </div>
              </AnimatedSection>

              {/* Pricing table */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Pricing & Plot Sizes
                  </h2>
                  <div className="overflow-x-auto -mx-2">
                    <table className="w-full min-w-[400px]">
                      <thead>
                        <tr className="border-b border-charcoal/10">
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Plot Size
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Price per Sq.Ft
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Total Range
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.priceTable.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-charcoal/5 hover:bg-neutral/50"
                          >
                            <td className="py-3 px-4 font-semibold text-charcoal">
                              {row.size}
                            </td>
                            <td className="py-3 px-4 text-charcoal/70">
                              {row.pricePerSqFt}
                            </td>
                            <td className="py-3 px-4 font-bold text-navy">
                              {row.totalRange}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-charcoal/40 mt-4">
                    * Prices are indicative and subject to change. Contact us for current pricing.
                  </p>
                </div>
              </AnimatedSection>

              {/* Highlights */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Project Highlights
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check size={16} className="text-orange mt-0.5 shrink-0" />
                        <span className="text-charcoal/70 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Amenities */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Amenities
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2">
                        <Check size={16} className="text-green-500 shrink-0" />
                        <span className="text-charcoal/70 text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                    Location Map
                  </h2>
                  <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={project.mapEmbedUrl}
                      title={`Map showing location of ${project.name} in ${project.location}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0"
                      aria-label={`Map of ${project.name}, ${project.location}`}
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Internal links */}
              <AnimatedSection>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="text-navy hover:text-orange transition-colors text-sm font-medium underline underline-offset-4"
                  >
                    ← Back to all projects
                  </Link>
                  <Link
                    href={`/locations/${project.area}`}
                    className="text-navy hover:text-orange transition-colors text-sm font-medium underline underline-offset-4"
                  >
                    Explore {project.location} →
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar — Enquiry form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection>
                  <div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-sm">
                    <h2 className="font-serif text-xl font-bold text-charcoal mb-1">
                      Interested in this project?
                    </h2>
                    <p className="text-charcoal/60 text-sm mb-6">
                      Fill in your details and our team will call you within 24 hours.
                    </p>
                    <EnquiryForm
                      projectSlug={project.slug}
                      projectName={project.name}
                      sourcePage={`/projects/${slug}`}
                    />
                  </div>

                  {/* Download Brochure — only shown when PDF is uploaded */}
                  {project.brochureUrl && (
                    <a
                      href={project.brochureUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-charcoal/20 text-charcoal/70 text-sm font-semibold hover:border-navy hover:text-navy hover:bg-navy/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    >
                      <Download size={16} />
                      Download Brochure
                    </a>
                  )}

                  {/* Direct contact */}
                  <div className="mt-4 bg-navy rounded-2xl p-5 text-center">

                    <p className="text-white/70 text-sm mb-3">Or reach us directly:</p>
                    <a
                      href="tel:[PLACEHOLDER]"
                      className="flex items-center justify-center gap-2 text-white font-semibold hover:text-orange transition-colors"
                    >
                      <Phone size={18} />
                      [PLACEHOLDER: +91-XXXXXXXXXX]
                    </a>
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
