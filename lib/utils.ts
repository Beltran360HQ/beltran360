import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS condicionales y resuelve conflictos de Tailwind.
 *
 * Ejemplo:
 *
 * cn(
 *   "px-4 py-2",
 *   isActive && "bg-primary",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
