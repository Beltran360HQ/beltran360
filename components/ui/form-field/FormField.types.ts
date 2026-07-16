import type { ReactNode } from "react";

export interface FormFieldProps {
  /**
   * Label displayed above the field.
   */
  label?: string;

  /**
   * Helper text displayed below the field.
   */
  description?: string;

  /**
   * Validation error message.
   */
  error?: string;

  /**
   * Indicates whether the field is required.
   */
  required?: boolean;

  /**
   * Indicates whether the field is disabled.
   */
  disabled?: boolean;

  /**
   * Additional CSS classes.
   */
  className?: string;

  /**
   * Form control.
   */
  children: ReactNode;
}

export interface FormFieldContextValue {
  inputId: string;

  descriptionId: string;

  errorId: string;

  required: boolean;

  disabled: boolean;

  invalid: boolean;
}