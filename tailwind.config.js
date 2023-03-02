/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      textColor: {
        white: "#EFF0F3",
        black: "#4a5366",
        layout: "#20244290",
        active: "#4266D0",
        secondary: "#d3d4dd",
        logo: "#A7A9BE",
      },
      backgroundColor: {
        layout: "#202442ce",
        mobileNav: "#202442",
        active: "#4266D095",
        rarity1: "#818486",
        rarity2: "#5a977a",
        rarity3: "#5987ad",
        rarity4: "#7b5c90",
        rarity5: "#926d44",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
