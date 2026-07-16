/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Typography Foundation - Heading Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Heading.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const headingVariants = cva(
  [
    "text-foreground",
    "tracking-tight",
  ],
  {
    variants: {
      variant: {
        display: "text-6xl leading-tight",

        h1: "text-5xl leading-tight",

        h2: "text-4xl leading-tight",

        h3: "text-3xl leading-snug",

        h4: "text-2xl leading-snug",

        h5: "text-xl leading-normal",

        h6: "text-lg leading-normal",
      },

      weight: {
        normal: "font-normal",

        medium: "font-medium",

        semibold: "font-semibold",

        bold: "font-bold",
      },
    },

    defaultVariants: {
      variant: "h2",
      weight: "bold",
    },
  }
);


