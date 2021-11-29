module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        blob1: "url('./assets/blob1.png')",
        blob2: "url('./assets/blob2.png')",
        blob3: "url('./assets/blob3.png')",
        blob4: "url('./assets/blob4.png')",
        blob5: "url('./assets/btnBg.png')",
        blob6: "url('./assets/work.png')",
      },
      zIndex: {
        "-100": "-100",
      },
      gridTemplateColumns: {
        Header: "repeat(4, 100px)",
      },
      backgroundColor: (theme) => ({
        primary: "#626262",
        secondary: "#454464",
        light: "#454464",
        dark: "#25253f",
      }),
      textColor: {
        main: "#292929",
        light: "#454464",
        dark: "#25253f",
      },
      screens: {
        lg: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }
        md: { max: "768px" },
        galaxy: { max: "540px" },
        sm: { max: "480px" },
      },
      borderColor: (theme) => ({
        primary: "#663399",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
