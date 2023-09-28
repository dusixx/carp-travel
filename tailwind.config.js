/** @type {import('tailwindcss').Config} */
const HERO_OVERLAY = 'rgba(2 15 8 / 0.6)';
const GALLERY_OVERLAY = 'rgba(2 15 8 / 0.85)';
const CONTACTS_OVERLAY = 'rgba(2 15 8 / 0.75)';
const CONTACTS_OVERLAY_SEC = 'rgba(2 15 8 / 0.8)';
const SERVICES_OVERLAY = 'rgba(2 15 8 / 0.5)';

const PAGE_HEADER_GRADIENT_PRI =
  'linear-gradient(180deg, rgba(0 24 38 / 1), transparent 30%)';

export const PAGE_HEADER_GRADIENT_SEC =
  'linear-gradient(180deg, rgba(0 0 0 / 0.6), transparent 40%)';

export const PAGE_HEADER_GRADIENT_TER =
  'linear-gradient(180deg, rgba(2 15 8 / 0.8), transparent 50%)';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
      150: '150ms',
    },
    screens: {
      sm: '320px',
      xs: '475px',
      md: '768px',
      lg: '1280px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        textMain: 'white',
        shaded: 'rgba(5 25 30 / 0.9)',
        failed: '#FF5757',
        white: {
          DEFAULT: 'white',
          10: 'rgba(255 255 255 / 0.1)',
          20: 'rgba(255 255 255 / 0.2)',
          50: 'rgba(255 255 255 / 0.5)',
        },
        button: 'rgba(255 255 255 / 0.05)',
        buttonStateSec: 'rgba(255 255 255 / 0.1)',
        buttonHover: 'rgba(255 255 255 / 0.2)',
      },
      backgroundImage: {
        'hero-bg': `${PAGE_HEADER_GRADIENT_PRI}, linear-gradient(${HERO_OVERLAY}, ${HERO_OVERLAY}), url(/hero-bg.jpg);`,
        'gallery-bg': `${PAGE_HEADER_GRADIENT_SEC}, linear-gradient(${GALLERY_OVERLAY}, ${GALLERY_OVERLAY}), url(/gallery-bg.jpg);`,
        'contacts-bg': `${PAGE_HEADER_GRADIENT_PRI}, linear-gradient(${CONTACTS_OVERLAY}, ${CONTACTS_OVERLAY}), url(/contacts-bg.jpg);`,
        'about-bg': `${PAGE_HEADER_GRADIENT_PRI}, linear-gradient(${SERVICES_OVERLAY}, ${SERVICES_OVERLAY}), url(/about-bg.jpg);`,
        'career-bg': `${PAGE_HEADER_GRADIENT_TER}, linear-gradient(${CONTACTS_OVERLAY_SEC}, ${CONTACTS_OVERLAY_SEC}), url(/career-bg.jpg);`,
      },
    },
  },
  plugins: [],
};

export default config;
