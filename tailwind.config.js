/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {  
        'poppins': ['Poppins', 'sans-serif'], 
      },  
      colors: {  
        'custom-white': '#FFFFFF',  
        'custom-gray': '#6D6D6D',  
        'custom-dark': '#11101D',  
      },
    },
  },
  plugins: [],
}