/** @type {import('tailwindcss').Config} */
const HERO_OVERLAY = 'rgba(2 15 8 / 0.6)';
const GALLERY_OVERLAY = 'rgba(2 15 8 / 0.85)';
const CONTACTS_OVERLAY = 'rgba(2 15 8 / 0.75)';
const SERVICES_OVERLAY = 'rgba(2 15 8 / 0.5)';

const PAGE_HEADER_GRADIENT_30 =
  'linear-gradient(180deg, rgba(0 24 38 / 1), transparent 30%)';

export const PAGE_HEADER_GRADIENT_SEC =
  'linear-gradient(180deg, rgba(0 0 0 / 0.6), transparent 30%)';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        textMain: 'white',
        heroOverlay: HERO_OVERLAY,
        shaded: 'rgba(5 25 30 / 0.9)',
        failed: '#FF5757',
        'white-10': 'rgba(255 255 255 / 0.1)',
        button: 'rgba(255 255 255 / 0.05)',
        buttonState2: 'rgba(255 255 255 / 0.1)',
        buttonHover: 'rgba(255 255 255 / 0.2)',
      },
      backgroundImage: {
        'hero-bg': `${PAGE_HEADER_GRADIENT_30}, linear-gradient(${HERO_OVERLAY}, ${HERO_OVERLAY}), url(/hero-bg.jpg);`,
        'gallery-bg': `${PAGE_HEADER_GRADIENT_SEC}, linear-gradient(${GALLERY_OVERLAY}, ${GALLERY_OVERLAY}), url(/gallery-bg.jpg);`,
        'contacts-bg': `${PAGE_HEADER_GRADIENT_30}, linear-gradient(${CONTACTS_OVERLAY}, ${CONTACTS_OVERLAY}), url(/contacts-bg.jpg);`,
        'about-bg': `${PAGE_HEADER_GRADIENT_30}, linear-gradient(${SERVICES_OVERLAY}, ${SERVICES_OVERLAY}), url(/about-bg.jpg);`,
      },
    },
  },
  plugins: [],
};
