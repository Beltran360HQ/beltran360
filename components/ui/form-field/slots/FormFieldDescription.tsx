import type { ReactNode } from "react";

import { useFormFieldContext } from "../FormField.context";

interface FormFieldDescriptionProps {
  children: ReactNode;
}

export default function FormFieldDescription({
  children,
}: FormFieldDescriptionProps) {
  const { descriptionId } = useFormFieldContext();

  return (
    <p
      id={descriptionId}
      className="mt-2 text-sm text-muted-foreground"
    >
      {children}
    </p>
  );
}