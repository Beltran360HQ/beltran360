"use client";
import {
  createContext,
  useContext,
} from "react";

import type { FormFieldContextValue } from "./FormField.types";

const FormFieldContext =
  createContext<FormFieldContextValue | null>(null);

FormFieldContext.displayName = "FormFieldContext";

/**
 * Required context.
 * Throws if used outside <FormField>.
 */
export function useFormFieldContext(): FormFieldContextValue {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw new Error(
      "useFormFieldContext must be used within <FormField>."
    );
  }

  return context;
}

/**
 * Optional context.
 * Returns null when Input is used standalone.
 */
export function useOptionalFormFieldContext() {
  return useContext(FormFieldContext);
}

export default FormFieldContext;