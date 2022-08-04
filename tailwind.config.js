/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#518581",
        brown: "#AD7E5C",
        yellow: "#FFB23F",
        black: "#151411",
        grey: "#AFADB5",
        white: "#F9F9F9",
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
