const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
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
        lightBlue: '#05C3DD',
        darkAquaBlue: '#04AEC4',
        yellow: '#F5D540',
        darkYellow: '#DBA800',
        borderColor: '#232D3E',
        gray: '#7C7F85',
        darkGray: '#63666A',
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
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.gradient-1': {
          background: 'linear-gradient(135deg, rgba(21,29,42,1) 0%, rgba(41,52,75,1) 100%)',
        },
        '.gradient-2': {
          background: 'linear-gradient(135deg, rgb(95, 224, 253), rgb(218, 255, 247) 75%)',
        },
        '.gradient-3': {
          background: 'linear-gradient(180deg, rgba(4,174,196,1) 41%, rgba(253,253,253,1) 100%)',
        },
      });
    }),
  ],
};
