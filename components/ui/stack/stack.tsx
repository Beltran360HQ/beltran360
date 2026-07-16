"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Stack
 * -----------------------------------------------------------------------------
 * Componente base para distribuir elementos utilizando Flexbox.
 * =============================================================================
 */

import { cn } from "@/lib/utils";

import { stackVariants } from "./stack.variants";
import type { StackProps } from "./stack.types";

const Stack = ({
  className,
  direction,
  gap,
  align,
  justify,
  wrap = false,
  fullWidth = false,
  children,
  ...props
}: StackProps) => {
  return (
    <div
      className={cn(
        stackVariants({
          direction,
          gap,
          align,
          justify,
          wrap,
          fullWidth,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Stack";

export { Stack };

