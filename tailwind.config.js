/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '576px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // ...
        
        'biru': {
          light: '#A5BECC',
          light_50 : '#D1DEE5',
          pastel : "#243A73",
          DEFAULT: '#001220',
        },
        'ungu': {
          DEFAULT: '#7C3E66',
          bright : '#BE5079',
        },
        'putih': {
          DEFAULT: '#F7F9FF',
        },
      },
      fontFamily:{
        // 'sans' : ['Montserrat'],
        'body' : ['Work Sans'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/wave3.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
  safelist : [
    
      /(bg|text|border)-(biru|ungu|putih)/,
      /(bg|text|border)-(biru)-(light|light_50|pastel|DEFAULT)/,
      /(bg|text|border)-(ungu)-(bright|DEFAULT)/,
      

  ],
};

