/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'btc-color': '#f7931a',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
