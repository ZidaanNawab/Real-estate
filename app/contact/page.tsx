import { buildMetadata } from "@/lib/metadata";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata = buildMetadata({
  title: "Contact Us — Real Estate Broker in Nagpur",
  description:
    "Contact Mauli Infra Plots — Nagpur's RERA-registered real estate broker. Call, WhatsApp, or email us for queries about plots in Wardha Road, Besa, MIHAN, Shankarpur.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-neutral">
      {/* Header */}
      <section className="bg-neutral pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
              Contact
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Get in Touch
            </h1>
            <p className="text-charcoal/70 max-w-xl text-lg">
              Whether you have a specific project in mind or just want to understand
              what&apos;s available in your budget &mdash; we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-charcoal/10">
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                  Contact Details
                </h2>

                {/* NAP block — must be identical to footer and GBP */}
                <address className="not-italic flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Office Address</p>
                      <a
                        href="https://share.google/ZZbGqGjkfQXzCRqRh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charcoal/70 text-sm leading-relaxed hover:text-orange transition-colors"
                      >
                        Mauli Infra Plots<br />
                        Prince Castle, Plot No. 105,<br />
                        Opp. Madhav Netralay, Gajanan Nagar,<br />
                        Wardha Road, Nagpur &ndash; 440015
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Phone</p>
                      <a
                        href="tel:+919359306709"
                        className="text-orange font-semibold text-lg hover:text-orange/80 transition-colors"
                      >
                        +91 93593 06709
                      </a>
                      <p className="text-charcoal/50 text-xs mt-0.5">Mon&ndash;Sat, 9am&ndash;7pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Email</p>
                      <a
                        href="mailto:Mauliinfra06@gmail.com"
                        className="text-orange hover:text-orange/80 transition-colors text-sm"
                      >
                        Mauliinfra06@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/919359306709?text=Hi%2C%20I%20am%20looking%20for%20residential%20plots%20in%20Nagpur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                      >
                        <MessageCircle size={16} />
                        Open WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </address>

                <div className="mt-6 pt-6 border-t border-charcoal/10">
                  <p className="text-xs text-charcoal/50">
                    <a
                      href="https://maharerait.maharashtra.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange text-xs"
                    >Verify our registration on MahaRERA &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Map embed — Google Maps shared link */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-4 border border-charcoal/10">
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=Prince+Castle+Plot+105+Opp+Madhav+Netralay+Gajanan+Nagar+Wardha+Road+Nagpur+440015&output=embed"
                    title="Office location map — Mauli Infra Plots, Nagpur"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                    aria-label="Map showing Mauli Infra Plots office on Wardha Road, Nagpur"
                  />
                </div>
                <p className="text-xs text-charcoal/50 mt-2 text-center">
                  <a
                    href="https://share.google/ZZbGqGjkfQXzCRqRh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Enquiry form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-charcoal/10 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Send Us a Message
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                Fill in your details and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
