import type { ReactNode } from "react";

import { useFormFieldContext } from "../FormField.context";

interface FormFieldLabelProps {
  children: ReactNode;
}

export default function FormFieldLabel({
  children,
}: FormFieldLabelProps) {
  const { inputId, required } = useFormFieldContext();

  return (
    <label
      htmlFor={inputId}
      className="mb-2 block text-sm font-medium text-foreground"
    >
      {children}

      {required && (
        <span
          aria-hidden="true"
          className="ml-1 text-destructive"
        >
          *
        </span>
      )}
    </label>
  );
}