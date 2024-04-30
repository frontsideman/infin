module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: '__neueHaasDisplay_d17afa, var(--font-hanken-grotesk), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        'custom-yellow': '#FFCD00',
        'custom-dark': '#121212',
        'custom-gray': {
          light: '#C1C1C1',
          dark: '#6B6B6B',
          e8: '#e8e8e8',
          d7: '#d7d7d7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
