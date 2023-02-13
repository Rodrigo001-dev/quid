/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFE6FF",
          200: "#EECDFF",
          300: "#D4B3FE",
          400: "#BB9AE5",
          500: "#A180CB",
        },
        text: {
          500: "#29282D",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
