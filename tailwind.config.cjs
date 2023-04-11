/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'qr_code_bg': '#d5e1ef',
      'sunnyside_soft_red': 'hsl(7, 99%, 70%)',
      'sunnyside_yellow': 'hsl(51, 100%, 49%)',
      'sunnyside_dark_cyan': 'hsl(167, 40%, 24%)',
      'sunnyside_dark_blue': 'hsl(198, 62%, 26%)',
      'sunnyside_dark_moderate_cyan': 'hsl(168, 34%, 41%)',
      'sunnyside_very_dark_blue': 'hsl(212, 27%, 19%)',
      'sunnyside_very_dark_grayish_blue': 'hsl(213, 9%, 39%)',
      'sunnyside_dark_grayish_blue': 'hsl(232, 10%, 55%)',
      'sunnyside_grayish_blue': 'hsl(210, 4%, 67%)',
      'sunnyside_blue': '#3ebeff',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow
    },
    extend: {
      backgroundImage: {
        'sunnyside-header-desktop': "url('/src/assets/sunnyside/desktop/image-header.jpg')",
        'sunnyside-header-mobile': "url('/src/assets/sunnyside/mobile/image-header.jpg')",
      }
    },
    fontFamily: {
      outfit: ['"Outfit"'],
      fraunces: ['"Fraunces"'],
      barlow: ['"Barlow"']
    },
  },
  plugins: [],
}
