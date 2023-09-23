/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

