import config from '../tailwind.config';

const tablet = parseInt(config.theme.screens.md);
const desktop = parseInt(config.theme.screens.lg);

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
    speed: 500,
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
    /* слайдов должно быть минимум вдвое больше */
    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 20,
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
      [tablet]: {
        spaceBetween: 25,
        direction: 'horizontal',
        slidesPerView: 2,
      },
    },
  }),
};
