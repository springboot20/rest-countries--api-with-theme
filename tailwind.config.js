/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: 'class',
  important: true,
  theme: {
    screens: {
      xs: '480px',
      '2sxl': '1440px',
      ...defaultTheme.screens,
    },
    colors: {
      'dark-blue-dark-DME': '#2b3945',
      'very-dark-blue-DMB': '#202c37',
      'dark-blue-dark-LMT': '#111517',
      'dark-gray-LMT': '#858585',
      'very-light-gray-LMB': '#fafafa',
      ...colors,
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [require('autoprefixer'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
});
