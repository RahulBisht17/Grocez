/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        119: "476px",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
