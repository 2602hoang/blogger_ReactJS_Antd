/** @type {import('tailwindcss').Config} */
module.exports = {
  // methods: {
  //   rotateCard() {
  //     this.$refs.content.classList.toggle('rotate');
  //   }
  // },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'float-image': 'floatImage 4s ease-in-out infinite',
        // "floating":"rotation_481 5000ms infinite linear",
        // "rotate-border":"rotateBorder 5s linear infinite;",
      },
      rotateBorder: {
        '0%': { transform: 'rotate(0deg)', borderColor: 'red' },
        '100%': { transform: 'rotate(360deg)', borderColor: 'blue' },
      },
    },
  },
  plugins: [],
}

