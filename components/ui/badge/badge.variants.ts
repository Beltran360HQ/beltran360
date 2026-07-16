/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Badge Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Badge.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1",
    "font-medium",
    "whitespace-nowrap",
    "transition-colors",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-surface",
          "text-foreground",
          "border",
          "border-border",
        ],

        primary: [
          "bg-primary",
          "text-primary-foreground",
        ],

        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
        ],

        success: [
          "bg-success",
          "text-white",
        ],

        warning: [
          "bg-warning",
          "text-white",
        ],

        danger: [
          "bg-danger",
          "text-white",
        ],

        info: [
          "bg-info",
          "text-white",
        ],

        outline: [
          "border",
          "border-border",
          "bg-transparent",
          "text-foreground",
        ],
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        md: "px-2.5 py-1 text-sm",

        lg: "px-3 py-1.5 text-base",
      },

      radius: {
        sm: "rounded-sm",

        md: "rounded-md",

        lg: "rounded-lg",

        full: "rounded-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "full",
    },
  }
);

