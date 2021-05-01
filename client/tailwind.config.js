module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Chirp', 'Verdana', 'System'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blueSecondary: '#1DA1F2',
    }),
    screens: {
      tablet: '500px',
      desktop: '1000px',
    },
  },
  variants: {
    extend: {},
  },
}
