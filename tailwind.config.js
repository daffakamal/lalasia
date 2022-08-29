/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        '3xl': '1920px',
      },
      colors: {
        green: "#518581",
        green2: "#6E9996",
        green3: "#8BAEAB",
        brown: "#AD7E5C",
        yellow: "#FFB23F",
        black: "#151411",
        grey: "#AFADB5",
        greyBorder: "#ECE4DE",
        white: "#F9F9F9",
        whitebasic: "#FFFFFF",
      },
      fontFamily: {
        eudoxusBold: ["EudoxusBold"],
        eudoxusMedium: ["EudoxusMedium"],
        eudoxusRegular: ["EudoxusRegular"],
      },
    },
  },
  plugins: [],
}
