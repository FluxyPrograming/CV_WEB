/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx", "./components/**/*.{html,js}"],
  theme: {
    colors: {
      "main-bg": "#040606",
      "main-text": "#EBF2F1",
      primary: "#A4D0CA",
      secondary: "#337067",
      accent: "#61C0B3",
    },
    fontFamily: {
      grotesk: ["CabinetGrotesk-Variable", "sans-serif"],
      general: ["GeneralSans-Variable", "sans-serif"],
      "general-italic": ["GeneralSans-VariableItalic", "sans-serif"],
    },
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.157rem",
      "5xl": "4.209rem",
      "6xl": "5.61rem",
    },
  },
  plugins: [require("./fontVariationSetting.js")],
};
