import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Shield, MapPin, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCarousel } from "@/components/sections/ProjectCarousel";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { locations } from "@/data/locations";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { HeroBackgroundVideo } from "@/components/home/HeroBackgroundVideo";


export const metadata = buildMetadata({
  title: "Real Estate Broker in Nagpur | Verified Plots & Properties",
  description:
    "Trusted RERA-registered real estate broker in Nagpur since [YEAR]. Browse verified residential plots in Wardha Road, Besa, MIHAN corridor & Shankarpur. Expert guidance, zero hidden charges.",
  path: "/",
});

// Override the title so the browser tab shows exactly "Mauli Infra Plots"
metadata.title = "Mauli Infra Plots";

const trustStats = [
  { value: "8,000+", label: "Happy Clients" },
  { value: "₹500 Cr+", label: "Worth of Projects Delivered" },
  { value: "7+", label: "Years of Experience" },
];

export default function HomePage() {
  // All projects fed into the slider — slider handles the visible-window logic


  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
        aria-label="Hero section"
      >
        {/* ── Hero background video (desktop + mobile, muted, decorative) ── */}
        <div className="absolute inset-0">
          <HeroBackgroundVideo />
        </div>


        {/* Hero content — animates in-place (opacity only, no position shift) */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-fade-in">
            <Shield size={14} />
            RERA Registered · Nagpur&apos;s Trusted Broker
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in">
            Find Your Ideal
            <br />
            <span className="text-orange">Plot in Nagpur</span>
          </h1>

          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            Verified residential plots across Wardha Road, Besa, MIHAN corridor &
            Shankarpur. Expert guidance from site visit to registration — no surprises,
            no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link href="/projects">
              <Button size="lg" className="min-w-[200px]">
                Browse All Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+919359306709" className="group">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-navy min-w-[200px]">
                <Phone size={18} className="mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-white/30 text-xs">
            <span>Scroll to explore</span>
            <div className="w-px h-10 bg-white/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── TRUST STATS BAND ── */}
      <section
        className="bg-navy py-10"
        aria-label="Trust statistics"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {trustStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-orange mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20 bg-neutral" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                  Our Projects
                </p>
                <h2
                  id="projects-heading"
                  className="font-serif text-3xl sm:text-4xl font-bold text-charcoal"
                >
                  Featured Developments
                </h2>
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-navy font-semibold hover:text-orange transition-colors text-sm whitespace-nowrap"
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          {/* px-6 pads the slider so its ±-left/right-5 arrow buttons don't clip */}
          <div className="px-6">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </section>


      {/* ── UPCOMING PROJECTS ── */}
      <section className="py-20 bg-white" aria-labelledby="upcoming-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                  Coming Soon
                </p>
                <h2
                  id="upcoming-heading"
                  className="font-serif text-3xl sm:text-4xl font-bold text-charcoal"
                >
                  Upcoming Projects
                </h2>
                <p className="text-charcoal/60 mt-2 max-w-xl">
                  Launching soon across Nagpur.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Mauli The Arc",
                image: "/images/upcoming/mauli-the-arc.webp",
                slug: "mauli-the-arc",
              },
              {
                name: "Mauli Niwasa Phase 2",
                image: "/images/upcoming/mauli-niwasa-phase-2.webp",
                slug: "mauli-niwasa-phase-2",
              },
              {
                name: "Dongar Gaon",
                image: "/images/upcoming/dongar-gaon.webp",
                slug: "dongar-gaon",
              },
            ].map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <article className="group rounded-2xl overflow-hidden bg-neutral border border-charcoal/10 shadow-sm flex flex-col">

                  {/* Thumbnail — 16:9 aspect ratio, never clips */}
                  <div className="relative w-full bg-navy/10 overflow-hidden flex-shrink-0" style={{ aspectRatio: "16 / 9" }}>
                    {/* Upcoming badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <Badge variant="upcoming">Upcoming</Badge>
                    </div>
                    {/* Photo */}
                    <Image
                      src={project.image}
                      alt={`${project.name} — upcoming plotted development in Nagpur`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Decorative bottom scrim */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Project name — OUTSIDE overflow-hidden, cannot be clipped */}
                  <div className="px-4 pt-4 pb-1">
                    <h3
                      className="font-serif font-bold leading-snug line-clamp-2 text-charcoal"
                      style={{ fontSize: "clamp(1.05rem, 3.2vw, 1.25rem)" }}
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Content below name */}
                  <div className="px-4 pb-5 flex flex-col flex-1">
                    <div className="mt-auto pt-3">
                      <p className="text-xs text-charcoal/50 italic mb-4">
                        Details launching soon — register your interest below.
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button variant="secondary" className="w-full border-navy text-navy hover:bg-navy hover:text-white" size="md">
                        Register Interest
                      </Button>
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS BAND ── */}
      <section className="py-20 bg-neutral" aria-labelledby="locations-heading">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                Areas We Serve
              </p>
              <h2
                id="locations-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-charcoal"
              >
                Nagpur&apos;s Top Investment Corridors
              </h2>
              <p className="text-charcoal/60 mt-3 max-w-xl mx-auto">
                Each area we work in has deep local expertise behind it — real data on
                connectivity, landmarks, and price trends, not generic filler.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.slug} delay={i * 0.08}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-navy"
                >
                  <Image
                    src={loc.heroImage}
                    alt={`Real estate investment in ${loc.name}, Nagpur`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1.5 text-orange text-xs font-semibold uppercase tracking-wide mb-1">
                      <MapPin size={12} />
                      Nagpur
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {loc.name}
                    </h3>
                    <p className="text-white/60 text-xs mt-1 line-clamp-2">
                      {loc.tagline}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-neutral" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                Why Choose Us
              </p>
              <h2
                id="why-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-charcoal"
              >
                The Mauli Infra Plots Difference
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={28} className="text-orange" />,
                title: "RERA Verified Projects Only",
                desc: "Every project we list is verified on MahaRERA before we show it to you. Title documents, NA order, and layout approval — checked upfront.",
              },
              {
                icon: <CheckCircle size={28} className="text-orange" />,
                title: "No Hidden Charges",
                desc: "Our fee is transparent and disclosed before you commit. No surprise charges at registration, no inflated prices to cover kickbacks.",
              },
              {
                icon: <MapPin size={28} className="text-orange" />,
                title: "Deep Nagpur Expertise",
                desc: "15+ years in Nagpur's property market. We know which corridors are genuinely growing and which are hype — and we tell you honestly.",
              },
              {
                icon: <Star size={28} className="text-orange" />,
                title: "End-to-End Support",
                desc: "From first site visit to registration to bank loan assistance — we handle every step. You don't need a separate lawyer or loan agent.",
              },
              {
                icon: <Phone size={28} className="text-orange" />,
                title: "Always Reachable",
                desc: "Direct mobile access to our team. No call centres. The person you spoke to in the first call is who you deal with through the entire process.",
              },
              {
                icon: <ArrowRight size={28} className="text-orange" />,
                title: "Fast Possession",
                desc: "All our projects have a clearly stated possession timeline in the RERA registration. We don't list projects where the developer has a history of delays.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-sm flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-neutral" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                Client Stories
              </p>
              <h2
                id="testimonials-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-charcoal"
              >
                What Our Clients Say
              </h2>
            </div>
          </AnimatedSection>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-orange" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="cta-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ready to find your plot in Nagpur?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Talk to our experts today — we&apos;ll help you find the right project for
              your budget, timeline, and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange min-w-[200px]"
                >
                  Get in Touch
                </Button>
              </Link>
              <a
                href="https://wa.me/919359306709?text=Hi%2C%20I%20am%20looking%20for%20plots%20in%20Nagpur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange min-w-[200px]"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
