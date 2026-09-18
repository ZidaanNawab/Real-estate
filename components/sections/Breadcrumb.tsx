import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-charcoal/60 flex-wrap"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
        aria-label="Home"
      >
        <Home size={14} />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-charcoal/30" aria-hidden="true" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? "text-charcoal font-medium" : ""}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
