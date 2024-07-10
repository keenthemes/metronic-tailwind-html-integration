/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
        "is-pseudo-class": false,
      },
    },
    'tailwindcss': {},
    'autoprefixer': {},
  },
};

export default config;
