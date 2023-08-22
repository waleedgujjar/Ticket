/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#4c4d8b",
          "200": "#242565",
          "300": "#1d275f",
        },
        gray: {
          "100": "#fefefe",
          "200": "#272727",
        },
        deeppink: "#f5167e",
        darkgray: {
          "100": "#a5a5a5",
          "200": "#959595",
        },
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#f1f1f1",
        },
        midnightblue: {
          "100": "#141572",
          "200": "#0a075f",
        },
        mediumblue: "#3d37f1",
        black: "#000",
        dimgray: "#6a6a6a",
        ghostwhite: "#f2f4ff",
        steelblue: "#7778b0",
        lavender: "#eee1ff",
      },
      fontFamily: {
        "averta-demo-pe-cutted-demo": "'Averta Demo PE Cutted Demo'",
        "dm-sans": "'DM Sans'",
        "proxima-nova": "'Proxima Nova'",
      },
      borderRadius: {
        "31xl": "50px",
        "26xl-6": "45.6px",
        xl: "20px",
        lgi: "19px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      "smi-2": "0.76rem",
      lg: "1.13rem",
      "9xl-5": "1.78rem",
      base: "1rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      "9xl-4": "1.78rem",
      "xs-4": "0.71rem",
      "3xl": "1.38rem",
      "15xl": "2.13rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
