"use client";

import { useId } from "react";

import FormFieldContext from "./FormField.context";

import type {
  FormFieldContextValue,
  FormFieldProps,
} from "./FormField.types";

import FormFieldDescription from "./slots/FormFieldDescription";
import FormFieldError from "./slots/FormFieldError";
import FormFieldLabel from "./slots/FormFieldLabel";

export default function FormField({
  label,
  description,
  error,
  required = false,
  disabled = false,
  className,
  children,
}: FormFieldProps) {
  const id = useId();

  const context: FormFieldContextValue = {
    inputId: `${id}-input`,
    descriptionId: `${id}-description`,
    errorId: `${id}-error`,
    required,
    disabled,
    invalid: Boolean(error),
  };

  return (
    <FormFieldContext.Provider value={context}>
      <div className={className}>
        {label && (
          <FormFieldLabel>
            {label}
          </FormFieldLabel>
        )}

        {children}

        {description && (
          <FormFieldDescription>
            {description}
          </FormFieldDescription>
        )}

        {error && (
          <FormFieldError>
            {error}
          </FormFieldError>
        )}
      </div>
    </FormFieldContext.Provider>
  );
}