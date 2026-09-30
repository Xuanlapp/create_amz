import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.php', './src/**/*.{css,js}'],
  theme: { extend: {} },
  plugins: [forms]
};
