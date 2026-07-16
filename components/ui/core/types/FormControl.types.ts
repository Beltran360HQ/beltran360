import type { AriaAttributes } from "react";

export interface FormControlProps
  extends Pick<
    AriaAttributes,
    "aria-describedby" | "aria-invalid"
  > {
  /**
   * Unique identifier used by labels.
   */
  id?: string;

  /**
   * Indicates whether the control is disabled.
   */
  disabled?: boolean;
}

