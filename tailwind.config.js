/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ["drone-ranger"]: ["Drone Ranger Pro", "sans-serif"],
    },
    fontSize: {
      nav: ["14px", "20px"],
      sm: "12.8px",
      base: ["16px", "24px"],
      xl: "20px",
      "2xl": "25px",
      "3xl": "31.25px",
      "4xl": "39.06px",
      "5xl": "48.83px",
      "7xl": ["72px", "88px"],
    },
  },
  plugins: [],
};
