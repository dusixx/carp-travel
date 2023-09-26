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

export const getServicesBgi = bgiURL => {
  const OVERLAY_COLOR = 'rgba(2 15 8 / 0.5)';
  const OVERLAY_GRADIENT =
    'linear-gradient(180deg, rgba(0 0 0 / 0.7), transparent 40%)';

  const url = `url(${bgiURL})`;
  const str = [
    OVERLAY_GRADIENT,
    `linear-gradient(${OVERLAY_COLOR}, ${OVERLAY_COLOR})`,
    url,
  ];

  if (getServicesBgi.currentURL) str.push(getServicesBgi.currentURL);
  getServicesBgi.currentURL = url;

  return { backgroundImage: str.join(',') };
};
