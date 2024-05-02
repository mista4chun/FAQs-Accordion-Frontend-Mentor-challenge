/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        softPink: 'hsl(282, 100%, 97%)',
        darkPink: 'hsl(294, 26%, 15%)'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: () => ({
        'lg-size': "url('../images/background-pattern-desktop.svg')",
        'mb-size': "url('../images/background-pattern-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
