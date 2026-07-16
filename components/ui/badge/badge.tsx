"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Badge
 * -----------------------------------------------------------------------------
 * Componente reutilizable para etiquetas y estados.
 * =============================================================================
 */

import { cn } from "@/lib/utils";

import { badgeVariants } from "./badge.variants";
import type { BadgeProps } from "./badge.types";

const Badge = ({
  className,
  variant,
  size,
  radius,
  leftIcon,
  rightIcon,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          size,
          radius,
        }),
        className
      )}
      {...props}
    >
      {leftIcon}

      {children}

      {rightIcon}
    </span>
  );
};

Badge.displayName = "Badge";

export { Badge };

