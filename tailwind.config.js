/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        background: {
          plain: 'var(--background-plain)',
          pink: 'var(--background-pink)',
          secondary: 'var(--background-secondary)',
        },
        gray: {
          border: 'var(--gray-border)',
        },
        headline: 'var(--headline)',
        paragraph: 'var(--paragraph)',
        button: 'var(--button)',
        'button-text': 'var(--button-text)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        highlight: 'var(--highlight)',
      },
    },
  },
  plugins: [],
}