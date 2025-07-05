module.exports = {
  purge: [],
  darkMode: false, 


  content: [
     './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          "0%": { transform: "scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "scale(1.3)", opacity: "0" }
        }
      },
      animation: {
        zoomInOut: "zoomInOut 5s ease-in-out"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};