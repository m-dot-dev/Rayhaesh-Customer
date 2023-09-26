/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        navBlack: "#3E3D3D",
        accentRed: "#D92228",
        borderLightGray: "#DEDEDE",
        borderDarkGray: "#C9C9C9",
        borderGreen: "#20DC49",
        dividerBlack: "#4F4F4F",
        headingBlue: "#231D4F",
        subheadingGray: "#848199",
        activeOfferBlue: "#3382C3",
        inputBorder: "#B2BCCA",
        labelColor: "#828282",
        detailsColor: "#9794A6",
        headingBackground: "#EAF1FF",
        subTextBlack: "#7E7E7E",
      },
    },
  },
  plugins: [],
};
