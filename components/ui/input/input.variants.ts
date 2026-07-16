/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Input Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Input.
 * =============================================================================
 */

import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex",
    "w-full",
    "rounded-lg",
    "border",
    "bg-background",
    "text-foreground",
    "transition-colors",
    "outline-none",
    "placeholder:text-muted-foreground",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-border",
          "bg-background",
        ],

        filled: [
          "border-transparent",
          "bg-muted",
        ],

        ghost: [
          "border-transparent",
          "bg-transparent",
        ],
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-10 px-4 text-sm",

        lg: "h-12 px-5 text-base",
      },

      error: {
        true: [
          "border-red-500",
          "focus-visible:ring-red-500",
        ],

        false: "",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
      fullWidth: true,
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;