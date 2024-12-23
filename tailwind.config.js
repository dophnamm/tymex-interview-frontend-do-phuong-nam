import colors from "./src/theme/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          ...colors.black,
        },
        yellow: {
          ...colors.yellow,
        },
        pink: {
          ...colors.pink,
        },
        grey: {
          ...colors.grey,
        },
      },
    },
    fontFamily: {
      ["drone-ranger"]: ["Drone Ranger Pro", "sans-serif"],
    },
    fontSize: {
      sm: ["12px", "20px"],
      s: ["14px", "20px"],
      base: ["16px", "24px"],
      xl: ["18px", "28px"],
      "2xl": ["20px", "32px"],
      "3xl": "31.25px",
      "4xl": "39.06px",
      "5xl": "48.83px",
      "7xl": ["72px", "88px"],
    },
    boxShadow: {
      "drop-shadow": "-12px 12px 0px 0px #101010",
      "btn-shadow": "0px 0px 50px 0px #BB4BFF52",
    },
    screens: {
      xxs: { max: "620px" },
      xs: { min: "621px", max: "767px" },
      sm: { min: "768px", max: "1023px" },
      md: { min: "1024px", max: "1279px" },
      lg: { min: "1280px", max: "1439px" },
      xl: { min: "1440px", max: "1599px" },
      xxl: { min: "1600px" },
    },
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1600px",
    },
  },
  plugins: [],
};
