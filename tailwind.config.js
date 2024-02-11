/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.4)",
          "200": "rgba(255, 255, 255, 0.16)",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(0, 0, 0, 0.16)",
        },
        darkturquoise: "#2ebcc7",
        indianred: "rgba(235, 87, 87, 0.04)",
        red: "#eb5757",
      },
      spacing: {},
      fontFamily: {
        "portfolio-thumbnails-14-18-aa": "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
