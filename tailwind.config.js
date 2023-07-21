const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      man: ["Manrope"],
    },
    extend: {
      colors: {
        colorNav: "#394360",
        secondaryPurple: "#8C82FC",
        heroSlate: "#22293E",
        secondaryBg: "#F8F8FF",
        cardsTeal: "#44E4C9",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
