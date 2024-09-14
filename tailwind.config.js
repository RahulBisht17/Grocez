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
        xss: "370px",
        xs1: "520px",
        xs2: "570px",
        s1: "640px",
        s2: "698px",
        md1: "910px",
        lg1: "1180px",
      },
      backgroundImage: {
        slider1: "url('./assets/images/slider-1-min.png')",
        slider2: "url('../../assets/images/slider-2-min.png')",
      },
    },
  },
  plugins: [],
};
