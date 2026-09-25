"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Project } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    duration: prefersReducedMotion ? 0 : 25,
  });

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollPrev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); scrollNext(); }
  };

  return (
    <div
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Featured projects carousel"
      aria-roledescription="carousel"
    >
      {/* Embla viewport — min-h reserves layout space to prevent CLS */}
      <div
        ref={emblaRef}
        className="overflow-hidden min-h-[380px]"
        aria-live="polite"
      >
        <div className="flex gap-5 touch-pan-y">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="flex-none w-[88%] sm:w-[46%] lg:w-[31%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${projects.length}: ${project.name}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows — hidden on mobile (swipe is enough) */}
      <button
        onClick={scrollPrev}
        disabled={!prevEnabled}
        aria-label="Previous projects"
        className={cn(
          "hidden sm:flex absolute -left-5 top-[calc(50%-40px)] -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-white border border-charcoal/15 shadow-md",
          "items-center justify-center text-charcoal",
          "hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-charcoal disabled:hover:border-charcoal/15",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        )}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={scrollNext}
        disabled={!nextEnabled}
        aria-label="Next projects"
        className={cn(
          "hidden sm:flex absolute -right-5 top-[calc(50%-40px)] -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-white border border-charcoal/15 shadow-md",
          "items-center justify-center text-charcoal",
          "hover:bg-orange hover:text-white hover:border-orange transition-colors duration-200",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-charcoal disabled:hover:border-charcoal/15",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        )}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      {scrollSnaps.length > 1 && (
        <div
          className="flex justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Carousel position"
        >
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange",
                i === selectedIndex
                  ? "w-6 h-2.5 bg-orange"
                  : "w-2.5 h-2.5 bg-charcoal/25 hover:bg-charcoal/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
