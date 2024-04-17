/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        background: "rgba(var(--background))",
        secondary: "rgba(var(--secondary))",
        tertiary: "#ff9341",
        angular: "#c3002f",
        react: "#61DBFB",
        javascript: "#F0DB4F",
        css: "#2965f1",
        html: "#f06529",
      },
      fontFamily: {
        noto_sans: ["Noto Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
