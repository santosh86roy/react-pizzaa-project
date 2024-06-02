/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-image": "url('./src/assets/footer-pizza.png')",
      },
      colors: {
        primary: {
          light: "#FEC834",
          DEFAULT: "#FEBD0B",
          dark: "#DFA401",
        },
        base: {
          black: "#221D1C",
          white: "#FCF8EE",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
