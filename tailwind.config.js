/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%"
      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      // добавляет класс для всех ребенков кроме первого
      addVariant('children-except-first', '& > *:not(:first-child)')
    })
  ],
}