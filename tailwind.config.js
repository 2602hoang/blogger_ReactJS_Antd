/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'float-image': 'floatImage 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

