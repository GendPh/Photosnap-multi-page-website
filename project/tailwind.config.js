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
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": 'fade-in 0.5s ease-in',
      }
    },
  },
  plugins: [],
}