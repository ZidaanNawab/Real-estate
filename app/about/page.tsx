import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, Award, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = buildMetadata({
  title: "About Us — RERA-Registered Real Estate Broker in Nagpur",
  description:
    "Learn about Mauli Infra Plots — Nagpur's trusted real estate broker with 15+ years of experience. RERA registered, 500+ happy clients, zero hidden charges.",
  path: "/about",
});

const milestones = [
  { year: "[YEAR]", event: "Founded — began as a boutique land advisory for Wardha Road plots" },
  { year: "[YEAR]", event: "Crossed 100 client transactions — built reputation for transparent pricing" },
  { year: "[YEAR]", event: "RERA registration obtained — one of the first brokers in Nagpur to register" },
  { year: "[YEAR]", event: "Expanded to MIHAN corridor — became the leading local advisor for airport-adjacent plots" },
  { year: "2025", event: "500+ clients served across Wardha Road, Besa, MIHAN & Shankarpur" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-neutral">
      {/* Header */}
      <section className="bg-neutral pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedSection>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Nagpur&apos;s Real Estate Experts,
              <br />Since [PLACEHOLDER: YEAR]
            </h1>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We started with a simple belief: that buying land in Nagpur should be
              straightforward, transparent, and stress-free. Fifteen years on, 500+
              clients have put their trust in us — and kept it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Broker photo + bio */}
          <AnimatedSection>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/10">
              <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                {/* [PLACEHOLDER: Add broker photo here] */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-charcoal/20 mx-auto mb-3" />
                  <p className="text-sm">[PLACEHOLDER: Broker Photo]</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div>
              <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                Meet Our Founder
              </p>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                [PLACEHOLDER: Broker Name]
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-orange/10 text-orange border border-orange/20 rounded-full px-3 py-1 text-xs font-semibold">
                  RERA Reg. [PLACEHOLDER]
                </span>
                <span className="bg-navy/10 text-navy border border-navy/20 rounded-full px-3 py-1 text-xs font-semibold">
                  15+ Years Experience
                </span>
              </div>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  [PLACEHOLDER: Broker bio paragraph 1 — background, how they got into real estate,
                  what drives their commitment to Nagpur's property market.]
                </p>
                <p>
                  [PLACEHOLDER: Broker bio paragraph 2 — specific expertise, why they focus on
                  RERA-registered projects, philosophy on client service.]
                </p>
                <p>
                  [PLACEHOLDER: Broker bio paragraph 3 — community involvement, professional
                  associations, personal connection to Nagpur.]
                </p>
              </div>

              <div className="mt-8 p-5 bg-navy/5 rounded-xl border border-navy/10">
                <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">
                  MahaRERA Registration
                </p>
                <p className="font-mono font-bold text-navy text-lg">
                  [PLACEHOLDER: RERA-AGENT-XXXX]
                </p>
                <a
                  href="https://maharerait.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange hover:text-orange/80 mt-1 inline-block"
                >
                  Verify on MahaRERA →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: <Shield size={28} className="text-orange" />,
                title: "RERA Verified",
                desc: "Every project we list is registered on MahaRERA. We check before you ask.",
              },
              {
                icon: <Clock size={28} className="text-orange" />,
                title: "15+ Years",
                desc: "Deep Nagpur real estate experience across multiple market cycles.",
              },
              {
                icon: <Award size={28} className="text-orange" />,
                title: "Zero Hidden Charges",
                desc: "Our fee is disclosed upfront. No last-minute surprises at registration.",
              },
              {
                icon: <Users size={28} className="text-orange" />,
                title: "500+ Clients",
                desc: "Over five hundred families have found their Nagpur property through us.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-10 text-center">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-charcoal/10" />
              <div className="flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    <div className="sm:w-1/2 pl-10 sm:pl-0">
                      <div
                        className={`bg-white rounded-xl p-5 border border-charcoal/10 ${
                          i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                        }`}
                      >
                        <p className="text-orange font-bold text-sm mb-1">{m.year}</p>
                        <p className="text-charcoal/70 text-sm">{m.event}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-3 sm:left-1/2 top-5 w-3 h-3 -ml-1.5 rounded-full bg-orange border-2 border-white shadow" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8 text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-orange text-sm">★</span>
                    ))}
                  </div>
                  <blockquote className="text-charcoal/70 text-sm leading-relaxed italic mb-4">
                    &ldquo;{t.text.substring(0, 200)}...&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-xs text-charcoal/50">{t.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-16 text-center bg-navy rounded-2xl p-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Ready to work with us?
            </h2>
            <p className="text-white/65 mb-6 max-w-md mx-auto">
              Start with a no-obligation conversation about your requirements.
            </p>
            <Link href="/contact">
              <button className="bg-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Get in Touch
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
