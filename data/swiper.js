import config from '../tailwind.config';

const { sm, md, lg } = config.theme.screens;

const mobile = parseInt(sm);
const tablet = parseInt(md);
const desktop = parseInt(lg);

export const swiperConfig = {
  services: {
    loop: true,
    speed: 350,
    allowTouchMove: false,
    slidesPerView: 1,
    effect: 'fade',
  },

  gallery: parentClass => ({
    loop: true,
    zoom: false,
    keyboard: {
      enabled: true,
    },
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: `.${parentClass}__swiper-next`,
      prevEl: `.${parentClass}__swiper-prev`,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
      slideShadows: false,
    },
    on: {
      breakpoint: function () {
        // сразу заполняем про-во сверху для моб
        this.slideNext();
      },
    },
    breakpoints: {
      [mobile]: {
        // слайдов должно быть минимум вдвое больше
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'vertical',
      },
      [tablet]: {
        speed: 350,
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  }),
};
