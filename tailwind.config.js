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
          DEFAULT: '#243A73',
        },
        'ungu': {
          DEFAULT: '#7C3E66',
        },
        'putih': {
          DEFAULT: '#F7F9FF',
        },
  
  
        // ...
      },
    },
    fontFamily:{
      // 'sans' : ['Montserrat'],
      'body' : ['Work Sans'],
    },

  },
  plugins: [],
  safelist : [
    {
      pattern : 
        /(bg|text|border)-(biru|ungu|putih)/,
    },
    {
      pattern: /(bg|text|border)-(biru)-(light|light_50|DEFAULT)/,
    },

  ],
};

