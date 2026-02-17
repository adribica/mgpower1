/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mg: {
          bg: '#F1F3F5',
          section: '#FFFFFF',
          black: '#1A1A1A',
          white: '#FFFFFF',
          red: '#D62828',
          gray: {
            light: '#E9ECEF',
            dark: '#495057'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
