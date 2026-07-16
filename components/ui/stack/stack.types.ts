/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Stack Types
 * -----------------------------------------------------------------------------
 * Contrato público del componente Stack.
 * =============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

export type StackDirection =
  | "row"
  | "column";

export type StackGap =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";

export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Dirección del Stack.
   */
  direction?: StackDirection;

  /**
   * Espaciado entre elementos.
   */
  gap?: StackGap;

  /**
   * Alineación transversal.
   */
  align?: StackAlign;

  /**
   * Distribución principal.
   */
  justify?: StackJustify;

  /**
   * Permite que los elementos hagan wrap.
   */
  wrap?: boolean;

  /**
   * Ocupa todo el ancho disponible.
   */
  fullWidth?: boolean;

  /**
   * Contenido.
   */
  children: ReactNode;
}