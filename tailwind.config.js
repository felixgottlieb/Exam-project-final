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
      xs: '0.563rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.375rem',
      '2xl': '1.625rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '1.1rem',
     
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
      scale: {
        '500': '5',
      },
    
      colors: {
      
        red: {
          pr: "#FA050D",
        },
        blue: {
          pr: "#0A24F5",
        },
        yellow: {
          pr: "#FBEC87",
        },
        black: {
          pr: "#000000",
        },
        white: {
          pr: "#FFFFFF",
        },
        darkgrey: {
          pr: "#515151",
          sc: "#666666",
        },
        lightgrey: {
          pr: "#C8C8C8",
          sc: "#F7F7F7",
        },
      },
      animation: {
        marquee: "marquee 170s linear infinite",
        
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
          
        },
      },
     
      fontFamily: {
        mulish: ["mulish", "sans-serif"],
       
      },
      backgroundImage: {
        "header": "url('./img/testeer.gif')",
        "hero": "url('./img/blossom.gif')",
        "skierdesk": "url('./img/skier-desktop.png')",
        "blossomski1": "url('./img/blossomski1.png')",
        "blossomski2": "url('./img/blossomski2.png')",
        "skibuag1.1": "url('./img/skibua-g-1.2.png')",
        "skibuag1.2": "url('./img/skibua-g-1.3.png')",
        "skibuag2.1": "url('./img/skibua-g-2.1.png')",
        "skibuag2.2": "url('./img/skibua-g-2.2.png')",
        "bootfit1": "url('./img/bootfitting-1.png')",
        "bootfit2": "url('./img/bootfitting-2.png')",
        "bootfit3": "url('./img/stretching.gif')",
        "bootfit4": "url('./img/bootfitting-4.png')",
        "bootfit5": "url('./img/bootfitting-5.png')",
        "goggles1.1": "url('./img/goggles-l-white.png')",
        "goggles1.2": "url('./img/goggles-l-white2.png')",
        "goggles2.1": "url('./img/goggles-l-black.png')",
        "goggles2.2": "url('./img/goggles-l-black2.png')",
        "goggles3.1": "url('./img/goggles-s-white.png')",
        "goggles3.2": "url('./img/goggles-s-white2.png')",
        "instagram": "url('./img/instagram-bg.jpeg')",
        "ganalog1": "url('./img/goggle-b-analog.jpg')",
        "ganalog2": "url('./img/goggle-w-analog.jpg')",
        "ganalog3": "url('./img/goggle-w-analog2.jpg')",
        "ganalog4": "url('./img/ganalog4.png')",
        "ganalog5": "url('./img/ganalog5.jpg')",

        "strolz1.1": "url('./img/strolzracenew.png')",
        "strolz1.2": "url('./img/racepdp.png')",
        "strolz2.1": "url('./img/strolzfreeridenew.png')",
        "strolz2.2": "url('./img/freerider-pdp.png')",

        "blossombg": "url('./img/blossombg.png')",

        "blossom1.1": "url('./img/xc1.png')",
        "blossom1.2": "url('./img/xc2.png')",
        "blossom2.1": "url('./img/rc1.png')",
        "blossom2.2": "url('./img/rc2.png')",
        "blossom3.1": "url('./img/gs1.png')",
        "blossom3.2": "url('./img/gs2.png')",



        "solvang": "url('./img/solvang-school.jpeg')",
        "building": "url('./img/building.jpeg')",
        "building2": "url('./img/building2.jpeg')",



        "analog": "url('./img/analog.jpg')",
        "analog2": "url('./img/analogtest.png')",
        "analog3": "url('./img/analogtest2.png')",
        "analog4": "url('./img/analogtest3.jpg')",




       
      },
      cursor: {
        
      },
   
    },
  },
  plugins: [
   require("daisyui"),

  ],
}
