/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Input Types
 * -----------------------------------------------------------------------------
 * Public contract for the Input component.
 * =============================================================================
 */

import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

import type { FormControlProps } from "../core";

export type InputVariant =
  | "default"
  | "filled"
  | "ghost";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size"
    >,
    FormControlProps {
  /**
   * Visual variant.
   */
  variant?: InputVariant;

  /**
   * Visual size.
   */
  uiSize?: InputSize;

  /**
   * Left icon.
   */
  leftIcon?: ReactNode;

  /**
   * Right icon.
   */
  rightIcon?: ReactNode;

  /**
   * Occupies the available width.
   *
   * @default true
   */
  fullWidth?: boolean;
}