/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#101010",
          100: "#17161A",
        },
        yellow: {
          100: "#FBC625",
        },
      },
    },
    fontFamily: {
      ["drone-ranger"]: ["Drone Ranger Pro", "sans-serif"],
    },
    fontSize: {
      nav: ["14px", "20px"],
      sm: "12.8px",
      base: ["16px", "24px"],
      xl: ["18px", "28px"],
      "2xl": "25px",
      "3xl": "31.25px",
      "4xl": "39.06px",
      "5xl": "48.83px",
      "7xl": ["72px", "88px"],
    },
    boxShadow: {
      "drop-shadow": "-12px 12px 0px 0px #101010",
    },
  },
  plugins: [],
};
