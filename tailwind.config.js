/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // ...
      'biru': {
        light: '#A5BECC',
        DEFAULT: '#243A73',
      },
      'ungu': {
        DEFAULT: '#7C3E66',
      },
      'putih': {
        DEFAULT: '#F7F9FF',
      }

      // ...
    },
  },
  plugins: [],
}

