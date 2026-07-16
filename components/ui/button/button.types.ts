/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Button Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Button.
 * =============================================================================
 */

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "danger";

export type ButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "icon";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante visual.
   */
  variant?: ButtonVariant;

  /**
   * Tamaño.
   */
  size?: ButtonSize;

  /**
   * Estado de carga.
   */
  loading?: boolean;

  /**
   * Ocupa todo el ancho disponible.
   */
  fullWidth?: boolean;

  /**
   * Icono izquierdo.
   */
  leftIcon?: ReactNode;

  /**
   * Icono derecho.
   */
  rightIcon?: ReactNode;

  /**
   * Contenido.
   */
  children: ReactNode;
}