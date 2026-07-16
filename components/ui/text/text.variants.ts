/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Text Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Text.
 * =============================================================================
 */

import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",

      muted: "text-muted-foreground",

      success: "text-green-600 dark:text-green-500",

      warning: "text-amber-600 dark:text-amber-500",

      danger: "text-red-600 dark:text-red-500",

      info: "text-blue-600 dark:text-blue-500",
    },

    size: {
      xs: "text-xs",

      sm: "text-sm",

      md: "text-base",

      lg: "text-lg",

      xl: "text-xl",
    },

    weight: {
      normal: "font-normal",

      medium: "font-medium",

      semibold: "font-semibold",

      bold: "font-bold",
    },

    align: {
      left: "text-left",

      center: "text-center",

      right: "text-right",

      justify: "text-justify",
    },

    truncate: {
      true: "truncate",

      false: "",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
    align: "left",
    truncate: false,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;