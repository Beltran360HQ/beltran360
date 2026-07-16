/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Button Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Button.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-lg",
    "font-medium",
    "transition-all",
    "duration-200",
    "select-none",
    "whitespace-nowrap",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary-hover",
          "active:bg-primary-active",
        ],

        secondary: [
          "bg-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary-hover",
          "active:bg-secondary-active",
        ],

        outline: [
          "border",
          "border-border",
          "bg-transparent",
          "text-foreground",
          "hover:bg-surface",
        ],

        ghost: [
          "bg-transparent",
          "text-foreground",
          "hover:bg-surface",
        ],

        link: [
          "bg-transparent",
          "text-primary",
          "underline-offset-4",
          "hover:underline",
        ],

        danger: [
          "bg-danger",
          "text-white",
          "hover:opacity-90",
        ],
      },

      size: {
        sm: "h-8 px-3 text-sm",

        md: "h-10 px-4 text-sm",

        lg: "h-12 px-6 text-base",

        icon: "h-10 w-10 p-0",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);