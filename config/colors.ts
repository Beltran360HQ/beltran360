/**
 * ============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * Colors
 * ============================================================================
 */

export const colors = {
  /**
   * Marca
   */
  brand: {
    primary: "#0D6EFD",
    primaryDark: "#0057D9",
    secondary: "#0DC8FF",
    accent: "#7C3AED",
  },

  /**
   * Estados
   */
  semantic: {
    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#0EA5E9",
  },

  /**
   * Fondos (Modo Claro)
   */
  background: {
    page: "#F8FAFC",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    muted: "#F1F5F9",
  },

  /**
   * Fondos (Modo Oscuro)
   */
  dark: {
    page: "#050816",
    surface: "#0F172A",
    card: "#111827",
    muted: "#1E293B",
  },

  /**
   * Texto
   */
  text: {
    primary: "#0F172A",
    secondary: "#64748B",
    muted: "#94A3B8",
    white: "#F8FAFC",
  },

  /**
   * Bordes
   */
  border: {
    light: "#E2E8F0",
    DEFAULT: "#CBD5E1",
    dark: "#334155",
  },

  /**
   * Gráficos (Dashboard)
   */
  chart: {
    blue: "#0D6EFD",
    cyan: "#0DC8FF",
    purple: "#7C3AED",
    green: "#16A34A",
    orange: "#F59E0B",
    red: "#EF4444",
  },

  /**
   * Gradientes
   */
  gradient: {
    primary: [
      "#0DC8FF",
      "#0D6EFD",
    ],

    dark: [
      "#050816",
      "#0F172A",
    ],
  },
} as const;

export default colors;
