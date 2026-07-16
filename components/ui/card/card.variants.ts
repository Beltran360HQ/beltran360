/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Card Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Card.
 * =============================================================================
 */

import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "transition-all",
    "duration-200",
    "bg-surface",
    "text-foreground",
    "border",
    "border-border",
  ],
  {
    variants: {
      variant: {
        default: "",

        elevated: [
          "border-transparent",
          "shadow-md",
        ],

        outlined: [
          "border",
          "border-border",
          "shadow-none",
        ],

        ghost: [
          "border-transparent",
          "bg-transparent",
          "shadow-none",
        ],
      },

      padding: {
        none: "p-0",

        sm: "p-3",

        md: "p-5",

        lg: "p-8",
      },

      radius: {
        sm: "rounded-sm",

        md: "rounded-md",

        lg: "rounded-lg",

        xl: "rounded-xl",
      },

      shadow: {
        none: "shadow-none",

        sm: "shadow-sm",

        md: "shadow-md",

        lg: "shadow-lg",
      },

      hover: {
        true: [
          "hover:-translate-y-0.5",
          "hover:shadow-lg",
        ],

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
      radius: "lg",
      shadow: "sm",
      hover: false,
    },
  }
);

export type CardVariants = VariantProps<typeof cardVariants>;
