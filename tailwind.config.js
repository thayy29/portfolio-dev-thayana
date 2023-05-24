/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    fontFamily: {
      'body': ['"Poppins"'],
    },
    extend: {
      content: {
        'link': 'url("/src/svg/house.svg")',
      }
    },
  },
  plugins: [],
}
