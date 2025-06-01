export const plugins = {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
        features: { 'nesting-rules': false },
    },
    tailwindcss: {},
    autoprefixer: {},
};
