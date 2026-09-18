"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/locations/wardha-road", label: "Locations" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "bg-navy shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
            aria-label="Mauli Infra Plots — Home"
          >
            <span className="font-serif text-xl font-bold text-white leading-none">
              Mauli Infra Plots
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange",
                      active
                        ? "text-orange"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button size="md">Enquire Now</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-navy flex flex-col pt-20 px-6 pb-8"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <nav>
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map((link) => {
                    const active = pathname.startsWith(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                            active
                              ? "text-orange bg-white/10"
                              : "text-white hover:bg-white/10"
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="w-full">
                  <Button size="lg" className="w-full">
                    Enquire Now
                  </Button>
                </Link>
                <a
                  href="tel:+919359306709"
                  className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors py-2"
                >
                  <span className="text-sm">+91 93593 06709</span>
                </a>
              </div>

              {/* NAP in drawer */}
              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-xs text-white/50 leading-relaxed">
                  Mauli Infra Plots · [PLACEHOLDER: Address], Nagpur, Maharashtra
                  <br />
                  RERA Reg. [PLACEHOLDER]
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
