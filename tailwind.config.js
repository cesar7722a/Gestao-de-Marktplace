/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      colors: {
        bgDark: "#C43C08",
        bg: "#F24D0D",
        bgBase: "#FBF4F4",
      },
    },
  },
  plugins: [],
};
