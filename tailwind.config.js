/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        "light-grey": "#D5E1EF",
      },
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
