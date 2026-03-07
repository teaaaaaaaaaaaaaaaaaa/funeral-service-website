/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sedef: {
          darkest: "#0C1821",
          dark: "#2e424c",
          mid: "#505E65",
          muted: "#7D8486",
          light: "#B6BAB9",
          lightest: "#eaecd5",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        garamond: ["'EB Garamond'", "Georgia", "serif"],
        lato: ["'Lato'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(1.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
}
