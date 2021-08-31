module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mos': '414px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
