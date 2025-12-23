/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.06)'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: []
}
