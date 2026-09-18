import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-neutral flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl font-bold text-orange mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-charcoal mb-3">
          Page not found
        </h1>
        <p className="text-charcoal/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors">
              Go Home
            </button>
          </Link>
          <Link href="/projects">
            <button className="bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
