import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { localBusinessSchema } from "@/lib/schema";

// Inter for body text — next/font serves fonts locally, no Google CDN request
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Fraunces for headings — next/font serves fonts locally
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  axes: ["SOFT", "WONK"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mauli Infra Plots | Real Estate Broker in Nagpur",
    template: "%s | Mauli Infra Plots",
  },
  description:
    "Trusted RERA-registered real estate broker in Nagpur. Verified residential plots across Wardha Road, Besa, MIHAN corridor & Shankarpur. Call us today.",
  keywords: [
    "real estate broker Nagpur",
    "residential plots Nagpur",
    "plots in Wardha Road Nagpur",
    "MIHAN plots Nagpur",
    "Besa plots Nagpur",
    "RERA registered broker Nagpur",
    "Mauli Infra Plots Nagpur",
  ],
  authors: [{ name: "Mauli Infra Plots" }],
  creator: "Mauli Infra Plots",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mauli Infra Plots",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = localBusinessSchema();

  return (
    <html lang="en-IN" dir="ltr" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* LocalBusiness JSON-LD — site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-neutral text-charcoal font-sans min-h-screen flex flex-col">
        {/* Skip to content — first focusable element for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Navbar />

        <PageTransition>
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}
