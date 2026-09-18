import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(lakhs: number): string {
  if (lakhs >= 100) {
    return `₹${(lakhs / 100).toFixed(lakhs % 100 === 0 ? 0 : 1)} Cr`;
  }
  return `₹${lakhs} Lakh`;
}

export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}
