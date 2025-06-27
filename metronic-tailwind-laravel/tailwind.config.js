/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'background': 'rgb(var(--tw-color-background) / <alpha-value>)',
        'foreground': 'rgb(var(--tw-color-foreground) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--tw-color-muted-foreground) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--tw-color-secondary-foreground) / <alpha-value>)',
        'border': 'rgb(var(--tw-color-border) / <alpha-value>)',
        'mono': 'rgb(var(--tw-color-mono) / <alpha-value>)',
      },
      spacing: {
        '5.5': '1.375rem',
        '7.5': '1.875rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  safelist: [
    // Preserve all kt- prefixed classes
    {
      pattern: /^kt-/,
    },
    // Preserve data attributes
    {
      pattern: /^data-kt-/,
    }
  ]
};