/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "--heading": "RecoletaAlt",
        "--heading-2": "Unbounded",
        "--body-font": "Inter",
        "--body-color": "#fefcf8",
        "--base-color": "#ED213A",
        "--title-color": "#0e0e0e",
        "--body-bg-color": "#171926",
      },
      fontFamily: {
        kanit: ["Kanit", "sans - serif"],
        inter: ["Inter", "sans - serif"],
        fira: ["Fira Sans"],
      },
      fontSize: {
        "font-14x": "14px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
  important: true,
};
