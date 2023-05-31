/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      body: ['"Poppins"'],
    },
    screens: {
      lg: { max: "1199px" },
      // => @media (max-width: 1280px) { ... }

      md: { max: "940px" },
      // => @media (min-width: 640px) { ... }

      sm: { max: "576px" },
    },

    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      75: 75,
      100: 100,
      auto: "auto",
    },
  },
};
