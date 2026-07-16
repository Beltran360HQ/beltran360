"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Section
 * -----------------------------------------------------------------------------
 * Componente semántico para estructurar bloques de una página.
 * =============================================================================
 */

import { cn } from "@/lib/utils";

import { sectionVariants } from "./section.variants";
import type { SectionProps } from "./section.types";

const Section = ({
  className,
  spacing,
  background,
  fullHeight = false,
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        sectionVariants({
          spacing,
          background,
          fullHeight,
        }),
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.displayName = "Section";

export { Section };

