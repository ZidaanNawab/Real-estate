import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand + tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-white">
                Mauli Infra Plots
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Nagpur&apos;s trusted RERA-registered real estate broker. Specialising in
              verified residential plots across Wardha Road, Besa, MIHAN corridor,
              and Shankarpur.
            </p>
            <p className="text-xs text-white/40">
              RERA Reg. No. [PLACEHOLDER]
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "All Projects" },
                { href: "/about", label: "About Us" },
                { href: "/resources", label: "Guides & Resources" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Areas We Serve
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {loc.name}, Nagpur
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4 mt-6">
              Featured Projects
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {projects.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: NAP contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Contact Us
            </h3>
            {/* NAP block — must be identical to contact page and GBP */}
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-orange mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  [PLACEHOLDER: Office Address]
                  <br />
                  Nagpur, Maharashtra [PLACEHOLDER: 440XXX]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange shrink-0" />
                <a
                  href="tel:+919359306709"
                  className="text-white/70 hover:text-orange transition-colors text-sm"
                >
                  +91 93593 06709
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-orange shrink-0" />
                <a
                  href="https://wa.me/919359306709?text=Hi%2C%20I%20am%20interested%20in%20plots%20in%20Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-orange transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange shrink-0" />
                <a
                  href="mailto:[PLACEHOLDER]"
                  className="text-white/70 hover:text-orange transition-colors text-sm"
                >
                  [PLACEHOLDER: email@domain.com]
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Mauli Infra Plots. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            All prices are indicative. Verify all details before purchase.
          </p>
        </div>
      </div>

      {/* WhatsApp floating button — mobile only */}
      <a
        href="https://wa.me/919359306709?text=Hi%2C%20I%20am%20interested%20in%20residential%20plots%20in%20Nagpur"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-40 flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg px-4 py-3 font-semibold text-sm hover:bg-green-600 transition-colors lg:hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </footer>
  );
}
