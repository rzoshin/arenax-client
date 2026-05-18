/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        sora: ["var(--font-sora)"],
        bebasNeue: ["var(--font-bebas-neue)"],
      },
    },
  },
  plugins: [],
};