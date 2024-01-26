/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        primary: '#3C887E',
        primaryLighter: '#9ebab7',
        secondary: '#F2F2F2',
        tertiary: '#B5C9D8',
        inactive: '#D1D5DB',
        disabledBackground: '#E5E7EB',
        disabledFontColor: '#c3bcbc',
        error: 'red',
        success: 'green',
        gray: '#e4dfdf',
        mintGreen: "#22E84D"
      },
      fontFamily: {
        titles: ['Inter-Bold', 'sans-serif'],
        content: ['Inter-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
  mode: 'jit',
};