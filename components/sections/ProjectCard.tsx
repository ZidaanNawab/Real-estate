import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const isPlaceholder = (s: string) => s.startsWith("[PLACEHOLDER") || s.startsWith("[");

export function ProjectCard({ project }: ProjectCardProps) {
  const hasRealImage =
    project.heroImage && !isPlaceholder(project.heroImage);
  const hasLocation = project.location && !isPlaceholder(project.location);
  const hasTagline  = project.tagline  && !isPlaceholder(project.tagline);

  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden bg-charcoal/10">
        {hasRealImage ? (
          <Image
            src={project.heroImage}
            alt={`${project.name} residential plots in ${project.location}, Nagpur`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-charcoal/30 text-center px-4">Photo coming soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-bold text-charcoal leading-tight mb-2">
          {project.name}
        </h3>

        {/* Location — hidden when still a placeholder */}
        {hasLocation && (
          <div className="flex items-center gap-1.5 text-sm text-charcoal/60 mb-3">
            <MapPin size={14} className="text-orange shrink-0" />
            <span>{project.location}</span>
          </div>
        )}

        {/* Tagline — hidden when still a placeholder */}
        {hasTagline && (
          <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
        )}

        {/* View Brochure — only shown when PDF is uploaded */}
        {project.brochureUrl && (
          <a
            href={project.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-charcoal/20 text-charcoal/70 text-sm font-medium hover:border-navy hover:text-navy hover:bg-navy/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            <ExternalLink size={15} />
            View Brochure
          </a>
        )}
      </div>
    </article>
  );
}
