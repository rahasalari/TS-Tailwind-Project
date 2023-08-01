/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxsm: 7,
        xsm: 9,
        lg: 11,
      },
      colors: {
        purple: "#A88AFA",
        gray: "#F3F4F6",
        red: "#F04444",
      },
      spacing: {
        128: "32rem",
        120: "27rem",
        110: "25rem",
        1200: 1200,
      },
      margin: {
        100: "26rem",
      },
    },
  },
  plugins: [],
};

// EC4999
