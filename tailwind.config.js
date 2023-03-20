const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: '#FDFDFD',
        transparent: colors.transparent,
        dargBlue: '#151D2A',
        middleBlue: '#1F283B',
        yellow: '#F5D540',
        borderColor: '#232D3E',
        gray: '#7C7F85',
      },
      keyframes: {
        roller: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        roller: 'roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
    },
  },
  plugins: [],
};
