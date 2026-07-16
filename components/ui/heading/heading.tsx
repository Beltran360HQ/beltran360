"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Typography Foundation - Heading
 * -----------------------------------------------------------------------------
 * Componente base para títulos y encabezados.
 * =============================================================================
 */

import { cn } from "@/lib/utils";

import { headingVariants } from "./heading.variants";
import type { HeadingProps } from "./heading.types";

const Heading = ({
  as: Component = "h2",
  variant,
  weight,
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <Component
      className={cn(
        headingVariants({
          variant,
          weight,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.displayName = "Heading";

export { Heading };
