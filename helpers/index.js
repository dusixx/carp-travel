const SERVICES_OVERLAY_COLOR = 'rgba(2 15 8 / 0.5)';
const SERVICES_OVERLAY_GRADIENT =
  'linear-gradient(180deg, rgba(0 0 0 / 0.7), transparent 40%)';

export const scrollToTarget = selector => {
  document
    .querySelector(String(selector))
    ?.scrollIntoView({ behavior: 'smooth' });
};

export const isVScrollBarVisible = () => {
  const { body } = document;
  const curBodyClientWidth = body.clientWidth;
  const curBodyOverflow = body.style.overflow;

  body.style.overflow = 'hidden';
  const res = curBodyClientWidth !== body.clientWidth;
  body.style.overflow = curBodyOverflow;

  return res;
};

export const getServicesBgi = bgiUrl => {
  const url = `url(${bgiUrl})`;
  const str = [
    SERVICES_OVERLAY_GRADIENT,
    `linear-gradient(${SERVICES_OVERLAY_COLOR}, ${SERVICES_OVERLAY_COLOR})`,
    url,
  ];
  // избежать мерцания при смене на голом фоне страницы
  if (getServicesBgi.currentURL) str.push(getServicesBgi.currentURL);
  getServicesBgi.currentURL = url;

  return { backgroundImage: str.join(',') };
};
