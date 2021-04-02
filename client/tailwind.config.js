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
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      48: '3rem',
    },
    extend: {
      lineHeight: {
        small: '52.5px',
        large: '84px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
