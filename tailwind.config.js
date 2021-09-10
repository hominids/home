module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Ubuntu', 'sans-serif'],

      },
      fontWeight:{
        "medium": "400",
        "bold": "700"
      },
      backgroundImage: theme => ({
        'video-thumbnail': "url(https://spee.ch/a/cfa20e4425a42074.png)"
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
