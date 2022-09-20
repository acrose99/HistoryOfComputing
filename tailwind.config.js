module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('windy-radix-palette'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography'),
],
  darkMode: 'class',
}
