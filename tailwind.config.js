module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        accent: '#393e46',
        secondary: '#ffd369'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
