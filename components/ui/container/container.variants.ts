/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Container Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Container.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const containerVariants = cva(
  [
    "w-full",
    "box-border",
  ],
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },

      padding: {
        none: "px-0",
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
      },

      centered: {
        true: "mx-auto",
        false: "",
      },

      fluid: {
        true: "max-w-full",
        false: "",
      },
    },

    defaultVariants: {
      size: "xl",
      padding: "md",
      centered: true,
      fluid: false,
    },
  }
);

