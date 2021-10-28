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
        secondary:"#8338ec"
      }),
      textColor:{
        main:"#292929",
        violet: "#8338ec"
      },
      screens: {
        'xl': {'max': '1200px'},
        // => @media (max-width: 1200px) { ... }
        'camera': {'max': '1155px'},
        'remove': {'max': '1038px'},

        'lg': {'max': '916px'},
        // => @media (max-width: 960px) { ... }
        'lgg': {'max': '899px'},

        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'sm': {'max': '560px'},
        // => @media (max-width: 560px) { ... }
  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
