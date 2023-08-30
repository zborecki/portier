/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '.wrapper': {
          boxSizing: 'content-box',
          margin: '0 auto',
          maxWidth: '1260px',
          paddingLeft: theme('padding.4'),
          paddingRight: theme('padding.4'),
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#FFFFFF',
          50: '#FCFCFD',
          100: '#E6E8EC',
          150: '#B1B5C3',
          200: '#88888D',
          300: '#353945',
          350: '#222233',
          400: '#12121C',
        },
        error: {
          main: '#FA5454',
        },
        primary: {
          light: '#FA59A6',
          main: '#006ADA',
        },
      },
      fontSize: {
        'button--small': ['14px', {
          fontWeight: 700,
          lineHeight: '20px',
        }],
        caption: ['14px', {
          lineHeight: '24px',
        }],
        'caption--secondary': ['14px', {
          fontWeight: 600,
          lineHeight: '24px',
        }],
        link: ['14px', {
          fontWeight: 700,
          lineHeight: '16px',
        }],
        logotype: ['27px', {
          fontWeight: 700,
          lineHeight: 'normal',
        }],
        tooltip: ['12px', {
          fontWeight: 600,
          lineHeight: '12px',
        }],
      },
    },
  },
};
