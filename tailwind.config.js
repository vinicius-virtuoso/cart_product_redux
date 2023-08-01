/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "brand-color": "#EA3E33",
        "brand-color-light": "#F77255",
        "brand-color-lighter":"#FCA884",
        "text-color-primary": '#F9FAFB',
        "text-color-secondary": '#E4E4E7',
        "close-button-color": '#A1A1AA',
        'stroke-color': '#3F3F46',
        'surface-color': '#18181B',
        'background-dark': "#09090B"
      }
    },
  },
  plugins: [],
}
