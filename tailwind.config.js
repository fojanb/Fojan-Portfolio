module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/Hero.png')",
      },
      zIndex: {
        "-1": "-1",
      },
      gridTemplateColumns: {
        Header: "repeat(6, 40px)",
      },
      backgroundColor: (theme) => ({
        primary: "#626262",
        secondary:"#21C298"
      }),
      textColor:{
        green: "#21C298"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
