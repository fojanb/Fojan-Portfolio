module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.png')",
        blob1 : "url('./assets/blob1.png')",
        blob2 : "url('./assets/blob2.png')",
        blob3 : "url('./assets/blob3.png')",
        blob4 : "url('./assets/blob4.png')"

      },
      zIndex: {
        "-1": "-1",
      },
      gridTemplateColumns: {
        Header: "repeat(4, 100px)",
      },
      backgroundColor: (theme) => ({
        primary: "#626262",
        secondary:"#8338ec",
        light : "#8A3FFC",
        ruby:"#C22121",
      }),
      textColor:{
        main:"#292929",
        violet: "#8338ec",
      },
      screens: {
        'mini': {'max': '560px'},
        // => @media (max-width: 1200px) { ... }
     

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
