"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Project } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectsSliderProps {
  projects: Project[];
}

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const total = projects.length;
  // Number of fully-visible cards on desktop (lg+)
  const VISIBLE = 3;
  // Max starting index so we don't scroll past the last card
  const maxIndex = total - VISIBLE;

  const go = useCallback(
    (next: number) => {
      setCurrent(Math.max(0, Math.min(next, maxIndex)));
    },
    [maxIndex]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Drag-to-swipe
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  // The track shifts left by (current * (100/VISIBLE))% per slide step
  const trackOffset = -(current * (100 / VISIBLE));

  return (
    <div
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      {/* ── Slider track ── */}
      {/* px-4 gives room for the arrow buttons that sit at -left/right-4 */}
      <div className="overflow-hidden px-1" aria-live="polite" aria-atomic="true">
        <motion.div
          className="flex gap-6"
          animate={{ x: `${trackOffset}%` }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 280, damping: 34 }
          }
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
          style={{ cursor: "grab" }}
          whileDrag={{ cursor: "grabbing" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              // Responsive card widths matching the 1/2/3 visible columns
              className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}: ${project.name}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        disabled={current === 0}
        className={cn(
          "absolute -left-5 top-[calc(50%-28px)] -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-white border border-charcoal/15 shadow-md",
          "flex items-center justify-center text-charcoal",
          "hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        )}
        aria-label="Previous projects"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        disabled={current >= maxIndex}
        className={cn(
          "absolute -right-5 top-[calc(50%-28px)] -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-white border border-charcoal/15 shadow-md",
          "flex items-center justify-center text-charcoal",
          "hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        )}
        aria-label="Next projects"
      >
        <ChevronRight size={18} />
      </button>

      {/* ── Dot indicators ── */}
      <div
        className="flex justify-center gap-2 mt-8"
        role="tablist"
        aria-label="Slide indicators"
      >
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to position ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange",
              i === current
                ? "w-6 h-2.5 bg-orange"
                : "w-2.5 h-2.5 bg-charcoal/25 hover:bg-charcoal/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

