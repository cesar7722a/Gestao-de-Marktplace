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
        textPrimary: "#666",
        textSecondary: "#3D3D3D",
        textTerciary: "#949494",
        bgBlue: "#009CF0",
        bgGeral: "#F5EAEA",
      },
    },
  },
  plugins: [],
};
