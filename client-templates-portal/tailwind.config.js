/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Creamy, light palette with subtle contrast
        cream: {
          50: "#FFFBF6",
          100: "#FDF6ED",
          200: "#F8EBDD",
          300: "#F1DEC9",
          400: "#E8CFB2",
        },
        ink: {
          700: "#30323D",
          800: "#232530",
          900: "#171923",
        },
        accent: {
          300: "#C6B79B",
          400: "#B8A683",
          500: "#A8946B",
        },
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(17, 24, 39, 0.15)",
      },
      transitionTimingFunction: {
        'out-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
