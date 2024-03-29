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
          dark: '#733535',
          main: '#FA5454',
        },
        primary: {
          light: '#92A5EF',
          main: '#006ADA',
        },
        secondary: {
          main: '#FA59A6',
        },
      },
      fontSize: {
        body: ['24px', {
          letterSpacing: '-0.24px',
          lineHeight: '32px',
        }],
        'body--secondary': ['16px', {
          lineHeight: '24px',
        }],
        'body--bold': ['24px', {
          fontWeight: 600,
          lineHeight: '32px',
        }],
        'button--medium': ['16px', {
          fontWeight: 700,
          lineHeight: '24px',
        }],
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
        h1: ['64px', {
          fontWeight: 700,
          letterSpacing: '-1.28px',
          lineHeight: '64px',
        }],
        h2: ['48px', {
          fontWeight: 700,
          letterSpacing: '-0.96px',
          lineHeight: '56px',
        }],
        h3: ['40px', {
          fontWeight: 700,
          letterSpacing: '-0.4px',
          lineHeight: '48px',
        }],
        h4: ['32px', {
          fontWeight: 700,
          letterSpacing: '-0.32px',
          lineHeight: '40px',
        }],
        hero: ['72px', {
          fontWeight: 700,
          letterSpacing: '-1.44px',
          lineHeight: '86px',
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
      gridTemplateColumns: {
        '1fr_600px': '1fr minmax(0, 600px)',
        '600_1fr': 'minmax(0, 600px) 1fr',
      },
      padding: {
        25: '6.25rem',
        29: '7.5rem',
      },
      screens: {
        sm: { max: '576px' },
        md: { max: '768px' },
        lg: { max: '992px' },
        xl: { max: '1200px' },
        xxl: { max: '1400px' },
      },
    },
  },
};
