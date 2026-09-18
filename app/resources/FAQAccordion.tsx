"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-charcoal/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={cn(
                "w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors",
                isOpen ? "bg-navy/5" : "hover:bg-charcoal/5"
              )}
              aria-expanded={isOpen}
              aria-controls={`res-faq-answer-${i}`}
              id={`res-faq-question-${i}`}
            >
              <span className="font-semibold text-charcoal text-sm leading-snug">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-orange shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`res-faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`res-faq-question-${i}`}
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 pb-5 pt-2">
                    <p className="text-charcoal/70 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
