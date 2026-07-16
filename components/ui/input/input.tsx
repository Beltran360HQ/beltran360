"use client";

/**
 * =============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * -----------------------------------------------------------------------------
 * Foundation UI - Input
 * -----------------------------------------------------------------------------
 * Primitive input control.
 * =============================================================================
 */

import { forwardRef } from "react";

import { useOptionalFormFieldContext } from "@/components/ui/form-field/FormField.context";
import { cn } from "@/lib/utils";

import type { InputProps } from "./input.types";
import { inputVariants } from "./input.variants";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      uiSize,
      leftIcon,
      rightIcon,
      fullWidth = true,

      id,
      disabled,

      "aria-invalid": ariaInvalid,
      "aria-describedby": ariaDescribedBy,

      ...props
    },
    ref
  ) => {
    const field = useOptionalFormFieldContext();

    const inputId = id ?? field?.inputId;

    const isDisabled = disabled ?? field?.disabled ?? false;

    /**
     * Internal visual state.
     */
    const invalid = field?.invalid ?? false;

    /**
     * Accessibility state.
     */
    const resolvedAriaInvalid =
      ariaInvalid ?? (invalid ? true : undefined);

    const describedBy =
      ariaDescribedBy ??
      (field
        ? [
            field.descriptionId,
            field.invalid ? field.errorId : undefined,
          ]
            .filter(Boolean)
            .join(" ")
        : undefined);

    return (
      <div className={cn(fullWidth && "w-full")}>
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={isDisabled}
            aria-invalid={resolvedAriaInvalid}
            aria-describedby={describedBy}
            className={cn(
              inputVariants({
                variant,
                size: uiSize,
                error: invalid,
                fullWidth,
              }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };