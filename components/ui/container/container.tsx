"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Container
 * -----------------------------------------------------------------------------
 * Componente base para controlar el ancho máximo y el espaciado horizontal.
 * =============================================================================
 */

import { cn } from "@/lib/utils";

import { containerVariants } from "./container.variants";
import type { ContainerProps } from "./container.types";

const Container = ({
  className,
  size,
  padding,
  centered = true,
  fluid = false,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          size,
          padding,
          centered,
          fluid,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";

export { Container };
