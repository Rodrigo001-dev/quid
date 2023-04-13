/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-mim": { min: "460px" },
      },

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
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};
