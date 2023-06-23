/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: 20,
    },
    extend: {},
    colors: {
      primary: '#A020F0',
      'primary-hover': '#BF40BF',
    },
  },
  plugins: [require('flowbite/plugin')],
};
