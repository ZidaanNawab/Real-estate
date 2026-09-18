import { Suspense } from "react";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { locations } from "@/data/locations";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectCardSkeleton } from "@/components/ui/Skeleton";

export const metadata = buildMetadata({
  title: "All Residential Plot Projects in Nagpur",
  description:
    "Browse all RERA-registered residential plot projects across Nagpur — Wardha Road, MIHAN, Besa, Shankarpur. Filter by area or project status.",
  path: "/projects",
});

export default function ProjectsPage() {
  const locationOptions = locations.map((l) => ({
    value: l.slug,
    label: l.name,
  }));

  return (
    <div className="pt-24 min-h-screen bg-neutral">
      {/* Header */}
      <section className="bg-neutral pt-8 pb-8 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
              Our Portfolio
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Residential Plot Projects in Nagpur
            </h1>
            <p className="text-charcoal/70 max-w-2xl text-lg">
              Every project listed here is RERA-registered, NA-approved, and
              personally verified by our team. Filter by location or project status.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects grid with client-side filters — wrapped in Suspense for useSearchParams */}
      <div className="bg-neutral py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <ProjectsGrid projects={projects} locationOptions={locationOptions} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
