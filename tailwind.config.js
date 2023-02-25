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
        layout: "#20244290",
        active: "#4266D0",
        secondary: "#A7A9BE",
      },
      backgroundColor: {
        layout: "#20244290",
        active: "#4266D095",
      },
    },
  },
  plugins: [],
};
