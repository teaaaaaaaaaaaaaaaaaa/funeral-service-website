/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'antic-black':      '#080808',
        'antic-marble':     '#111111',
        'antic-dark':       '#1A1A1A',
        'antic-border':     '#2A2A2A',
        'antic-muted':      '#6B6B6B',
        'antic-light':      '#C8C4BC',
        'antic-cream':      '#F0EBE1',
        'antic-gold':       '#C9A96E',
        'antic-bronze':     '#8B6340',
        'antic-gold-light': '#E8D5A3',
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        garamond: ["'EB Garamond'", "Georgia", "serif"],
        lato: ["'Lato'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.7s ease forwards",
        "shimmer":    "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(1.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        'marble-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
