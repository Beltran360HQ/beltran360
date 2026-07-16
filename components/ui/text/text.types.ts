/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Text Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Text.
 * =============================================================================
 */

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TextVariant =
  | "default"
  | "muted"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type TextWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Variante visual.
   */
  variant?: TextVariant;

  /**
   * Tamaño.
   */
  size?: TextSize;

  /**
   * Peso tipográfico.
   */
  weight?: TextWeight;

  /**
   * Alineación.
   */
  align?: TextAlign;

  /**
   * Limita el texto a una sola línea.
   */
  truncate?: boolean;

  /**
   * Contenido.
   */
  children: ReactNode;
}