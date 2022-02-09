module.exports = {
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: "428px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "2k-down": "1920px",
      "2k": "2000px",
    },
    fontFamily: {
      robo: ["Roboto", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "20px",
        sm: "40px",
        md: "60px",
        lg: "85px",
        xl: "100px",
        "2xl": "210px",
      },
      maxWidth: "100%",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3.125rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "2xl": ["24px", { letterSpacing: "0.01em", lineHeight: "" }],
      "3xl": ["32px", { letterSpacing: "0.02em", lineHeight: "40px" }],
      h1: ["3.125rem", { letterSpacing: "0.01em", lineHeight: "1.2" }],
      "h1-sm": ["1.9375rem", { letterSpacing: "0.01em", lineHeight: "1.2" }],
      h2: ["2.5rem", { letterSpacing: "0.01em", lineHeight: "1.17" }],
      "h2-sm": ["1.875rem", { letterSpacing: "0.01em", lineHeight: "1.17" }],
      h3: ["1rem", { letterSpacing: "0.01em", lineHeight: "1.17" }],

      p: ["1.125rem", { letterSpacing: "0.01em", lineHeight: "1.5" }],
      "p-sm": [".875rem", { letterSpacing: "0.01em", lineHeight: "1.4" }],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      btn: "68px",
      card: "30px",
    },

    extend: {
      boxShadow: {
        card: "0px 18px 50px -15px #060F28",
      },
      backgroundImage: {
        header: "url('../image/background-top.png')",
        footer: "url('../image/background-bottom.png')",
      },
      colors: {
        "gray-secondary": "#8794BA",
        "blue-main": "#0F1F4B",
        "red-main": "#EF2A82",
        "blue-dark": "#2A407C",
        "gray-bg": "#F8F9FF",
      },
      spacing: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      minWidth: {
        "1/2": "50%",
      },
      maxWidth: {
        "1/2": "50%",
      },
      height: {
        128: "32rem",
      },
      minHeight: {
        "1/2": "50%",
      },
      maxHeight: {
        128: "32rem",
      },

      margin: {
        "5px": "5px",
      },
      padding: {
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
