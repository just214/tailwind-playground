const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        uglybrown: 'brown',
      },
      screens: {
        xxl: '2200px',
        xxxxl: '3000px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '-18': '-6rem',
      },
    },
  },
  variants: {
    inset: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      // layout: 'sidebar',
    }),
  ],
};
