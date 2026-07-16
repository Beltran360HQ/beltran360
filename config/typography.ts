/**
 * ============================================================================
 * BELTRAN360 DESIGN SYSTEM
 * Typography
 * ============================================================================
 */

export const typography = {
  /**
   * Fuente oficial
   */
  fontFamily: {
    sans: "Inter, sans-serif",
    mono: '"JetBrains Mono", monospace',
  },

  /**
   * Pesos
   */
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  /**
   * Tamaños
   */
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
  },

  /**
   * Altura de línea
   */
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },

  /**
   * Espaciado entre letras
   */
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
  },

  /**
   * Estilos reutilizables
   */
  styles: {
    hero: {
      fontSize: "60px",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.05em",
    },

    h1: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: 1.25,
    },

    h3: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h4: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.35,
    },

    body: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.6,
    },

    small: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.4,
    },

    button: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
} as const;

export default typography;
