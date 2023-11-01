/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "serif"],
        labelle: ["La Belle Aurore", "cursive"],
      },
      colors: {
        "dark-gray": "#232324",
        black: "#000000",
        white: "#fafafa",
        "pinkish-red": "#da627d",
        "light-gray": "#f2f2f3",
        "off-white": "#f4f1de",
        maroon: "#42091F",
        gray: "#808080",
        "medium-gray": "#555555",
        "darker-gray": "#404040",
      },
    },
  },
  plugins: [],
};
