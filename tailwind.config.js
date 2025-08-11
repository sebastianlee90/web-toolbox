/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%, 0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%, 100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%, 0% 50%",
          },
        },
      },
    },
  },
};
