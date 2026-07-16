/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Section Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Section.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const sectionVariants = cva(
  [
    "relative",
    "w-full",
  ],
  {
    variants: {
      spacing: {
        none: "py-0",

        sm: "py-8",

        md: "py-12",

        lg: "py-20",

        xl: "py-32",
      },

      background: {
        transparent: "bg-transparent",

        surface: "bg-surface",

        primary: "bg-primary",

        secondary: "bg-secondary",
      },

      fullHeight: {
        true: "min-h-screen",

        false: "",
      },
    },

    defaultVariants: {
      spacing: "lg",
      background: "transparent",
      fullHeight: false,
    },
  }
);

