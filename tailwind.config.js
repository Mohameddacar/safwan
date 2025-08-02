/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#00413D',
      'secondary': '#E5745D',
    },
      fontFamily: {
      'jost': ['jost'],     
      'voll': ['Vollkorn'],     
    },
    maxWidth: {
        'container': '1170px',
      },backgroundImage:{
        'banner': "url('./public/daacr.png')"
      }

  },
  plugins: [],
}
}