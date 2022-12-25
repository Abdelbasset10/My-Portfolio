/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors:{
      bgColor:"#1f1f38",
      bgVariant:"#2c2c6c",
      colorPrimary:"#4db5ff",
      colorWhite:"#fff",
      primaryVariant:"rgba(77,181,255,0.4)",
      colorLight:"rgba(255,255,255,0.6)",
      navBg:"rgba(0,0,0,0.3)"
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    
  },
  plugins: [],
}
