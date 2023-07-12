/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
    },
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
