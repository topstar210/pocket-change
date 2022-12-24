/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fixedsys': ["fixedsys"]
      },
      animation: {
        wave: 'wave 3s linear infinite',
        'wave-revert': 'wave-revert 3s linear infinite'
      },
      keyframes: {
        wave: {
          '0, 100%': {
            top: '32px'
          },
          '50%': {
            top: '0px'
          }
        },
        'wave-revert': {
          '0, 100%': {
            top: '0px'
          },
          '50%': {
            top: '32px'
          }
        }
      },
      boxShadow: {
        card: '0 0 20px 5px #28130950'
      },
    },
  },
  plugins: [],
}