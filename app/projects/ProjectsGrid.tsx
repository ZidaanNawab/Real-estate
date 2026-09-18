"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Filter, Grid, List, X } from "lucide-react";
import { type Project, type ProjectStatus } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
  locationOptions: { value: string; label: string }[];
}

const statusOptions: { value: ProjectStatus | "all"; label: string }[] = [
  { value: "all", label: "All Statuses" },
  { value: "new-launch", label: "New Launch" },
  { value: "ongoing", label: "Ongoing" },
  { value: "ready-to-move", label: "Ready to Move" },
];

export function ProjectsGrid({ projects, locationOptions }: ProjectsGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const areaFilter = searchParams.get("area") || "all";
  const statusFilter = (searchParams.get("status") || "all") as ProjectStatus | "all";
  const [view, setView] = useState<"grid" | "list">("grid");

  const setFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (areaFilter !== "all" && p.area !== areaFilter) return false;
      if (statusFilter !== "all" && p.status !== statusFilter) return false;
      return true;
    });
  }, [projects, areaFilter, statusFilter]);

  const hasFilters = areaFilter !== "all" || statusFilter !== "all";

  const clearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-charcoal/10">
        <div className="flex items-center gap-2 text-charcoal/60 text-sm">
          <Filter size={16} />
          <span className="font-medium">Filter:</span>
        </div>

        {/* Area filter */}
        <select
          value={areaFilter}
          onChange={(e) => setFilter("area", e.target.value)}
          className="rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-orange"
          aria-label="Filter by location"
        >
          <option value="all">All Locations</option>
          {locationOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => setFilter("status", e.target.value as ProjectStatus | "all")}
          className="rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-orange"
          aria-label="Filter by status"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-sm text-orange hover:text-orange/80 font-medium"
            aria-label="Clear all filters"
          >
            <X size={14} />
            Clear filters
          </button>
        )}

        {/* Results count + view toggle */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-charcoal/60">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
          <div className="flex rounded-lg border border-charcoal/20 overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={cn(
                "p-2 transition-colors",
                view === "grid" ? "bg-navy text-white" : "bg-white text-charcoal/60 hover:bg-charcoal/5"
              )}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={cn(
                "p-2 transition-colors",
                view === "list" ? "bg-navy text-white" : "bg-white text-charcoal/60 hover:bg-charcoal/5"
              )}
              aria-label="List view"
              aria-pressed={view === "list"}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-charcoal/60 mb-4">No projects match your filters.</p>
          <Button variant="secondary" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div
          className={cn(
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          )}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
