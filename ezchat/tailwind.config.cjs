/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0f0e17',
        'headline': '#fffffe',
        'paragraph': '#a7a9be',
        'cta': '#ff8906',
        'ctatext': '#fffffe',
        'secondary': '#f25f4c',
        'tertiary': '#e53170'
      },
    },
  },
  plugins: [],
}
