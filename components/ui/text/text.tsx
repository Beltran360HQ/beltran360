"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Text
 * -----------------------------------------------------------------------------
 * Componente base reutilizable para mostrar texto.
 * =============================================================================
 */

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import type { TextProps } from "./text.types";
import { textVariants } from "./text.variants";

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      variant,
      size,
      weight,
      align,
      truncate = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        className={cn(
          textVariants({
            variant,
            size,
            weight,
            align,
            truncate,
          }),
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export { Text };