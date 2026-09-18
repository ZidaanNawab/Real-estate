import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { posts } from "@/data/posts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Real Estate Guides & Resources — Nagpur Property Investment",
  description:
    "Expert guides on RERA, stamp duty, and Nagpur property investment. Learn everything you need to make a confident, informed plot purchase in Nagpur.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="pt-24 min-h-screen bg-neutral">
      {/* Header */}
      <section className="bg-neutral pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-charcoal/10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <p className="text-orange text-sm font-semibold uppercase tracking-widest mb-2">
              Guides & Resources
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Everything You Need to Know
              <br />Before Buying a Plot in Nagpur
            </h1>
            <p className="text-charcoal/70 max-w-2xl text-lg">
              Genuine, actionable guides — not marketing fluff. Written by our team
              based on 15+ years of Nagpur real estate transactions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <article className="group bg-white rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-200 hover:scale-[1.02] flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge variant="navy" className="self-start mb-3">
                    {post.category}
                  </Badge>
                  <h2 className="font-serif text-xl font-bold text-charcoal leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-charcoal/40 mt-auto mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
