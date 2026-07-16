/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Section Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Section.
 * =============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

export type SectionSpacing =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type SectionBackground =
  | "transparent"
  | "surface"
  | "primary"
  | "secondary";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Espaciado vertical.
   */
  spacing?: SectionSpacing;

  /**
   * Color de fondo.
   */
  background?: SectionBackground;

  /**
   * Ocupa toda la altura de la ventana.
   */
  fullHeight?: boolean;

  /**
   * Contenido de la sección.
   */
  children: ReactNode;
}

