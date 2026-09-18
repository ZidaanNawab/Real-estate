import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-charcoal/10",
        className
      )}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-charcoal/10 bg-white">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-3 mt-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
