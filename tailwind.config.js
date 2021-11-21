module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.png')",
        md: "url('./assets/hero-md.png')",
        galaxy: "url('./assets/galaxy.png')",
        sm: "url('./assets/hero-sm.png')",
        blob1: "url('./assets/blob1.png')",
        blob2: "url('./assets/blob2.png')",
        blob3: "url('./assets/blob3.png')",
        blob4: "url('./assets/blob4.png')",
        blob5: "url('./assets/btnBg.png')",
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
        violet: "#454464",
        ruby: "#C22121",
      },
      screens: {
        lg: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }
        md: { max: "768px" },
        galaxy: { max: "540px" },
        sm: { max: "480px" },
      },
      borderColor: theme => ({
        'primary': '#663399',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
