/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Container Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Container.
 * =============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export type ContainerPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Ancho máximo del contenedor.
   */
  size?: ContainerSize;

  /**
   * Espaciado horizontal interno.
   */
  padding?: ContainerPadding;

  /**
   * Centra automáticamente el contenedor.
   */
  centered?: boolean;

  /**
   * Ocupa todo el ancho disponible.
   */
  fluid?: boolean;

  /**
   * Contenido del componente.
   */
  children: ReactNode;
}
