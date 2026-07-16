/**
 * ============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * Spacing
 * ============================================================================
 */

export const spacing = {
  /**
   * Sistema base (8px Grid)
   */
  base: 8,

  /**
   * Espaciado
   */
  scale: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
    32: "128px",
  },

  /**
   * Contenedor principal
   */
  container: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },

  /**
   * Padding estándar
   */
  padding: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },

  /**
   * Gap entre elementos
   */
  gap: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },

  /**
   * Alturas estándar
   */
  height: {
    navbar: "72px",
    footer: "96px",
    button: "48px",
    input: "48px",
    cardHeader: "64px",
  },

  /**
   * Anchos estándar
   */
  width: {
    sidebar: "280px",
    dashboard: "1440px",
    content: "1200px",
  },
} as const;

export default spacing;