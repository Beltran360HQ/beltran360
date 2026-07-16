/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Typography Foundation - Heading Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Heading.
 * =============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type HeadingElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type HeadingVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type HeadingWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {

  /**
   * Elemento HTML renderizado.
   */
  as?: HeadingElement;

  /**
   * Variante visual.
   */
  variant?: HeadingVariant;

  /**
   * Peso tipográfico.
   */
  weight?: HeadingWeight;

  /**
   * Contenido.
   */
  children: ReactNode;
}

