import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { type Project, statusLabels } from "@/data/projects";
import { StatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPriceRange } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} residential plots in ${project.location}, Nagpur`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-xl font-bold text-charcoal leading-tight">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-charcoal/60 mb-3">
          <MapPin size={14} className="text-orange shrink-0" />
          <span>{project.location}</span>
        </div>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Price + plots */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-charcoal/10">
          <div>
            <p className="text-xs text-charcoal/50 uppercase tracking-wide">Starting from</p>
            <p className="font-serif text-lg font-bold text-navy">
              {formatPriceRange(project.priceMin, project.priceMax)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-charcoal/50 uppercase tracking-wide">Available</p>
            <p className="text-sm font-semibold text-charcoal">
              {project.availablePlots} / {project.totalPlots} plots
            </p>
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className="mt-4">
          <Button className="w-full" size="md">
            View Project
          </Button>
        </Link>
      </div>
    </article>
  );
}
