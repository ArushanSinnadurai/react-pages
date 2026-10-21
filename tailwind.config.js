/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0a0a0f",
        "dark-secondary": "#12121a",
        "dark-surface": "#1a1a2e",
        accent: "#e8b84b",
        "accent-hover": "#f0c95e",
        "text-primary": "#ffffff",
        "text-secondary": "#8b8b9e",
        "text-muted": "#4a4a5e",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["5rem", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
