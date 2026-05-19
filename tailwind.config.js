// tailwind.config.js
module.exports = {
  darkMode: "class", // next-themes injects the "dark" class on <html>
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base:    "rgb(var(--color-bg-base) / <alpha-value>)",
        card:    "rgb(var(--color-bg-card) / <alpha-value>)",
        input:   "rgb(var(--color-bg-input) / <alpha-value>)",
        price:   "rgb(var(--color-bg-price) / <alpha-value>)",
        border:  "rgb(var(--color-border) / <alpha-value>)",
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        muted:   "rgb(var(--color-text-muted) / <alpha-value>)",
        accent:  "rgb(var(--color-accent) / <alpha-value>)",
        danger:  "rgb(var(--color-danger) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};