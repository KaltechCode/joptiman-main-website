/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: "Syne",
        secondaryFont: "DM Sans",
      },
      colors: {
        mainColor: "#fff",
        secondaryColor: "#040b1e",
        paraColor: "#767676",
        BTNColor: "#0c0544",
      },
      screens: {
        "mobile-landscape": {
          raw: "(max-width:768px) and (orientation:landscape)",
        },
        "3k": {
          raw: "(min-width:1920px)",
        },
        "4k": {
          raw: "(min-width:2560px)",
        },
        "5k": {
          raw: "(min-width:3200px)",
        },
      },
    },
  },
  plugins: [],
};
