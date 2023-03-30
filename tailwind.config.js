/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          header:'#231b2c',
          body:'#2a1e32'
        },
        light: {
          header:'#d6d6d8',
          body:'#dddee2',
        },
      }
    },
  },
  plugins: [],
}

