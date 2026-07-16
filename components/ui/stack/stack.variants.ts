/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Stack Variants
 * -----------------------------------------------------------------------------
 * Define las variantes visuales del componente Stack.
 * =============================================================================
 */

import { cva } from "class-variance-authority";

export const stackVariants = cva(
  [
    "flex",
    "box-border",
  ],
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col",
      },

      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },

      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },

      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },

      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      direction: "column",
      gap: "md",
      align: "stretch",
      justify: "start",
      wrap: false,
      fullWidth: false,
    },
  }
);

