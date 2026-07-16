/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Badge Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Badge.
 * =============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export type BadgeRadius =
  | "sm"
  | "md"
  | "lg"
  | "full";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Variante visual.
   */
  variant?: BadgeVariant;

  /**
   * Tamaño.
   */
  size?: BadgeSize;

  /**
   * Radio de borde.
   */
  radius?: BadgeRadius;

  /**
   * Icono antes del contenido.
   */
  leftIcon?: ReactNode;

  /**
   * Icono después del contenido.
   */
  rightIcon?: ReactNode;

  /**
   * Contenido.
   */
  children: ReactNode;
}
