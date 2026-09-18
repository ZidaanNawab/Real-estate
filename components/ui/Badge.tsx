import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "green" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "orange", className }: BadgeProps) {
  const variants = {
    orange: "bg-orange/10 text-orange border border-orange/20",
    navy: "bg-navy/10 text-navy border border-navy/20",
    green: "bg-green-100 text-green-800 border border-green-200",
    neutral: "bg-charcoal/10 text-charcoal border border-charcoal/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Status badge with automatic color
export function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; variant: BadgeProps["variant"] }> = {
    "new-launch": { label: "New Launch", variant: "orange" },
    ongoing: { label: "Ongoing", variant: "navy" },
    "ready-to-move": { label: "Ready to Move", variant: "green" },
  };

  const { label, variant } = config[status] || { label: status, variant: "neutral" };

  return <Badge variant={variant}>{label}</Badge>;
}
