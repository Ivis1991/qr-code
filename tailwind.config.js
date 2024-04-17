/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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
        "dark-navy": "#1F314F",
        "light-navy": "#7D889E",
      },
      fontFamily: {
        'outfit-bold': ["Outfit-Bold", "sans-serif"],
        'outfit-regular': ["Outfit-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
