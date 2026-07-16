import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { animation } from "./animation";

export const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  animation,
} as const;

export type Theme = typeof theme;

export default theme;

