const SERVICES_OVERLAY = 'rgba(2 15 8 / 0.5)';
const PAGE_HEADER_GRADIENT =
  'linear-gradient(180deg, rgba(0 0 0 / 0.7), transparent 40%)';

export const bgi = num => {
  const url = `url(/services-bg-0${num}.jpg)`;
  const str = [
    `${PAGE_HEADER_GRADIENT}`,
    `linear-gradient(${SERVICES_OVERLAY}, ${SERVICES_OVERLAY})`,
    url,
  ];
  // избежать мерцания при смене на голом фоне страницы
  if (bgi.currentURL) str.push(bgi.currentURL);
  bgi.currentURL = url;

  return str.join(',');
};

export const services = [
  {
    name: 'ATVs Traveling',
    image: '01.jpg',
    tagline: 'Feel the adrenaline rush',
    about:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    name: 'Rock climbing',
    image: '02.jpg',
    tagline: 'Destroy your limitations',
    about:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    name: 'Hot air ballooning',
    image: '03.jpg',
    tagline: 'Get Inspired',
    about:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    name: 'Skydiving',
    image: '04.jpg',
    tagline: 'Overcome your fears',
    about:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    name: 'Rafting',
    image: '05.jpg',
    tagline: 'Trust the flow',
    about:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];
