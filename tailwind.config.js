/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    // screens: {
    //   'sm': '567px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1180px',
    //   '2xl': '1320px'
    // },
    extend: {
      fontFamily: {
        poppins: "'poppins', san-serif",
        roboto: "'roboto', san-serif",
        WorkSans: "'Work Sans', sans-serif",
        inter: "'Inter', sans-serif"
      },
      colors: {
        'primary': '#040809',
        'secondary': '#30FFEB',
        'offwhite': '#FFFFFF',
        'dang': '#5033FF'
      }
    },
  },
  plugins: [],
}

