module.exports = {
  darkMode: 'class',
  presets: [require('./blackcat-preset.js')],
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/custom-forms'),
    require('nightwind'),
  ],
};
