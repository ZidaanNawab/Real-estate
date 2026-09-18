"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { type Testimonial } from "@/data/testimonials";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative min-h-[220px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full bg-white rounded-2xl p-8 shadow-sm border border-charcoal/10"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-orange text-orange" />
              ))}
            </div>

            <blockquote className="text-charcoal/80 leading-relaxed text-base mb-6 italic">
              &ldquo;{current.text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-charcoal">{current.name}</p>
                <p className="text-sm text-charcoal/50">
                  {current.project} · {current.date}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:border-orange hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-orange w-6" : "bg-charcoal/20"}`}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className="w-10 h-10 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:border-orange hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
