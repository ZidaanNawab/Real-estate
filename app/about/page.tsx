import Link from "next/link";
import { Shield, Clock, Award, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata = buildMetadata({
  title: "About Us — RERA-Registered Real Estate Broker in Nagpur",
  description:
    "Learn about Mauli Infra Plots — Nagpur's trusted real estate broker with 7+ years of experience. RERA registered, 8,000+ happy clients, zero hidden charges.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-neutral">
      {/* ── Header ── */}
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
              straightforward, transparent, and stress-free. 7 years on, 8,000+
              families have put their trust in us — and kept it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Meet the Team ── */}
        <AnimatedSection>
          <div className="mb-20">
            <div className="text-center mb-10">
              <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
                Our Leadership
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Meet the Team
              </h2>
              <p className="text-charcoal/60 mt-3 max-w-xl mx-auto">
                The people behind Mauli Infra Plots — decades of combined experience
                in Nagpur&apos;s real estate market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  name: "Pravin Jain",
                  role: "[PLACEHOLDER — confirm title: Founder / Co-Founder / Director]",
                },
                {
                  name: "Ashwin Vairagade",
                  role: "[PLACEHOLDER — confirm title: Founder / Co-Founder / Director]",
                },
                {
                  name: "Pravin Rahate",
                  role: "[PLACEHOLDER — confirm title: Founder / Co-Founder / Director]",
                },
              ].map((person, i) => (
                <AnimatedSection key={person.name} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 border border-charcoal/10 text-center flex flex-col items-center shadow-sm">
                    {/* Photo placeholder — replace div with Image once photos are provided */}
                    {/* Usage: <Image src="/team/pravin-jain.jpg" alt="Pravin Jain" width={112} height={112} className="rounded-full object-cover" /> */}
                    <div className="w-28 h-28 rounded-full bg-charcoal/10 mb-5 flex items-center justify-center">
                      <span className="text-charcoal/30 text-xs">Photo</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                      {person.name}
                    </h3>
                    <p className="text-sm text-orange font-semibold">
                      {person.role}
                    </p>
                    {/* MahaRERA registration box — fill in once confirmed */}
                    <div className="mt-5 w-full p-4 bg-navy/5 rounded-xl border border-navy/10">
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">
                        MahaRERA Registration
                      </p>
                      <p className="font-mono font-bold text-navy">
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
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Trust stat cards — matched to home page trust stats ── */}
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
                title: "7+ Years",
                desc: "Deep Nagpur real estate experience across multiple market cycles.",
              },
              {
                icon: <Award size={28} className="text-orange" />,
                title: "Zero Hidden Charges",
                desc: "Our fee is disclosed upfront. No last-minute surprises at registration.",
              },
              {
                icon: <Users size={28} className="text-orange" />,
                title: "8,000+ Clients",
                desc: "Over eight thousand families have found their Nagpur property through us.",
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

        {/* ── Testimonials ── */}
        <AnimatedSection>
          <div className="mb-20">
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

        {/* ── CTA ── */}
        <AnimatedSection>
          <div className="mt-4 text-center bg-navy rounded-2xl p-10">
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