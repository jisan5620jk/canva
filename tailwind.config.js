/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        PrimaryColor: ["#089acd"],
        CommonBg: ["#f5f6f8"],
        HeadingColor: ["#222222"],
        TextColor: ["#777777"],
        TextColor2: ["#838f95"],
      },
    },
  },
  plugins: [],
};
