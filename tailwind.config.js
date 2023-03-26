/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,ts,jsx,tsx}",

  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.1rem',
      '3xl': '1.4rem',
      '4xl': '1.8rem',
      '5xl': '2rem',
      '6xl': '4rem',
    },
    screens: {
      sm: "150px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
      
        red: {
          pr: "#A10000",
        },
        yellow: {
          sc: "#E5AB46",
        },
        black: {
          sc: "#000000",
        },
        hero: {
          sc: "#F1593A",
        },
        gray: {
          sc: "#242323",
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
     
      fontFamily: {
        franklin: ["Franklin", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    
    },
  },
  plugins: [
   require("daisyui"),

  ],
}
