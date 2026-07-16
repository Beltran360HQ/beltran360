/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Card Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Card.
 * =============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant =
  | "default"
  | "elevated"
  | "outlined"
  | "ghost";

export type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

export type CardRadius =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type CardShadow =
  | "none"
  | "sm"
  | "md"
  | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Variante visual de la Card.
   */
  variant?: CardVariant;

  /**
   * Espaciado interno.
   */
  padding?: CardPadding;

  /**
   * Radio de las esquinas.
   */
  radius?: CardRadius;

  /**
   * Nivel de sombra.
   */
  shadow?: CardShadow;

  /**
   * Activa una animación al pasar el cursor.
   */
  hover?: boolean;

  /**
   * Ocupa todo el ancho disponible.
   */
  fullWidth?: boolean;

  /**
   * Ocupa toda la altura disponible.
   */
  fullHeight?: boolean;

  /**
   * Contenido de la Card.
   */
  children: ReactNode;
}
