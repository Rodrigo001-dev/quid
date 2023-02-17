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

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
