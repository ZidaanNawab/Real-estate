import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { posts, getPostBySlug } from "@/data/posts";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQAccordion } from "../FAQAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/resources/${slug}`,
    image: post.heroImage,
  });
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default async function ResourcePostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faqJsonLd = faqSchema(post.faqs);
  const crumbJsonLd = breadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Resources", url: `${siteUrl}/resources` },
    { name: post.title, url: `${siteUrl}/resources/${slug}` },
  ]);

  // Convert markdown-ish content to HTML-ish paragraphs
  const sections = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />

      <div className="pt-20 min-h-screen bg-neutral">
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[260px] max-h-[400px] bg-navy">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 max-w-5xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Resources", href: "/resources" },
                { label: post.category, href: "/resources" },
                { label: post.title },
              ]}
            />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <AnimatedSection>
                <Badge variant="navy" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-charcoal/50 mb-8 pb-8 border-b border-charcoal/10">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readingTime} min read
                  </span>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection>
                <div className="prose-content">
                  {sections.map((section, i) => {
                    if (section.startsWith("## ")) {
                      return (
                        <h2
                          key={i}
                          className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4"
                        >
                          {section.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (section.startsWith("### ")) {
                      return (
                        <h3
                          key={i}
                          className="font-serif text-xl font-bold text-charcoal mt-6 mb-3"
                        >
                          {section.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (section.startsWith("| ")) {
                      // Render table
                      const rows = section.split("\n").filter((r) => !r.match(/^\|[-\s|]+\|$/));
                      return (
                        <div key={i} className="overflow-x-auto my-6">
                          <table className="w-full border border-charcoal/10 rounded-lg overflow-hidden text-sm">
                            {rows.map((row, ri) => {
                              const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                              if (ri === 0) {
                                return (
                                  <thead key={ri}>
                                    <tr className="bg-navy/5">
                                      {cells.map((c, ci) => (
                                        <th key={ci} className="text-left px-4 py-2 font-semibold text-charcoal/70 text-xs uppercase tracking-wide">
                                          {c}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                );
                              }
                              return (
                                <tbody key={ri}>
                                  <tr className="border-t border-charcoal/10">
                                    {cells.map((c, ci) => (
                                      <td key={ci} className="px-4 py-2 text-charcoal/70">{c}</td>
                                    ))}
                                  </tr>
                                </tbody>
                              );
                            })}
                          </table>
                        </div>
                      );
                    }
                    if (section.match(/^- \[/)) {
                      // Checklist
                      const items = section.split("\n");
                      return (
                        <ul key={i} className="my-4 flex flex-col gap-2">
                          {items.map((item, ii) => (
                            <li key={ii} className="flex items-center gap-2 text-charcoal/70 text-sm">
                              <input type="checkbox" readOnly className="accent-orange" />
                              {item.replace(/^- \[.\] /, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Default paragraph — handle **bold**
                    const html = section
                      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
                    return (
                      <p
                        key={i}
                        className="text-charcoal/70 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    );
                  })}
                </div>
              </AnimatedSection>

              {/* FAQ */}
              {post.faqs.length > 0 && (
                <AnimatedSection>
                  <div className="mt-12 bg-white rounded-2xl p-6 border border-charcoal/10">
                    <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                      Frequently Asked Questions
                    </h2>
                    <FAQAccordion faqs={post.faqs} />
                  </div>
                </AnimatedSection>
              )}

              {/* Back link */}
              <AnimatedSection>
                <div className="mt-10">
                  <Link
                    href="/resources"
                    className="flex items-center gap-2 text-navy hover:text-orange transition-colors font-medium"
                  >
                    <ArrowLeft size={16} />
                    Back to all guides
                  </Link>
                </div>
              </AnimatedSection>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-5">
                {/* Related posts */}
                <AnimatedSection>
                  <div className="bg-white rounded-2xl p-5 border border-charcoal/10">
                    <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                      More Guides
                    </h3>
                    <div className="flex flex-col gap-3">
                      {posts
                        .filter((p) => p.slug !== slug)
                        .map((p) => (
                          <Link
                            key={p.slug}
                            href={`/resources/${p.slug}`}
                            className="group"
                          >
                            <p className="text-sm font-medium text-charcoal group-hover:text-orange transition-colors leading-snug">
                              {p.title}
                            </p>
                            <p className="text-xs text-charcoal/40 mt-0.5">
                              {p.readingTime} min read
                            </p>
                          </Link>
                        ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-navy rounded-2xl p-5 text-center">
                    <p className="text-white font-serif font-bold mb-2">
                      Have questions?
                    </p>
                    <p className="text-white/60 text-sm mb-4">
                      Our team can walk you through any aspect of buying a plot in Nagpur.
                    </p>
                    <Link href="/contact">
                      <button className="w-full bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90 transition-colors text-sm">
                        Talk to an Expert
                      </button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
