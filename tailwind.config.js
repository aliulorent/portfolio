/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FCEEC8',
        'off-red': '#ED9A9F',
        'off-blue': '#AFD4E8',
        'navy-blue': '#194787',
        'off-white-2':'#F5F7EA',
        'dark-off-red': '#ec8188',
        'normal': '#A8A77A',
        'fire': '#EE8130',
        'water': '#6390F0',
        'electric': '#F7D02C',
        'grass': '#7AC74C',
        'ice': '#96D9D6',
        'fighting': '#C22E28',
        'poison': '#A33EA1',
        'ground': '#E2BF65',
        'flying': '#A98FF3',
        'psychic': '#F95587',
        'bug': '#A6B91A',
        'rock': '#B6A136',
        'ghost': '#735797',
        'dragon': '#6F35FC',
        'dark': '#705746',
        'steel': '#B7B7CE',
        'fairy': '#D685AD',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
