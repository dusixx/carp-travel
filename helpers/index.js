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
