import type { ReactNode } from "react";

import { useFormFieldContext } from "../FormField.context";

interface FormFieldErrorProps {
  children: ReactNode;
}

export default function FormFieldError({
  children,
}: FormFieldErrorProps) {
  const { errorId } = useFormFieldContext();

  return (
    <p
      id={errorId}
      role="alert"
      className="mt-2 text-sm font-medium text-destructive"
    >
      {children}
    </p>
  );
}