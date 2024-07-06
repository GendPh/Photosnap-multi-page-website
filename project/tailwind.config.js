/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Light-Grey': '#dfdfdf',
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}