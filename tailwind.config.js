/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        "light" : "#eff0f2",
      },
      colors : {
        "gray" : {
          1 : "#212529",
          2 : "#777777",
          3 : "#5d5d5d",
          4 : "#535353",
          5 : "#616161",
          6 : "#474747",
          7 : "#333333",
          8 : "#808080",
          9 : "#383838",
        },
        "gray-link" : "#007185",
      }
    },
  },
  plugins: [],
}

