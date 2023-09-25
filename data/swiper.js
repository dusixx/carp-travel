import config from '../tailwind.config';

const tablet = parseInt(config.theme.screens.md);

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
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: `.${parentClass}__swiper-next`,
      prevEl: `.${parentClass}__swiper-prev`,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
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
        direction: 'horizontal',
        /* слайдов должно быть минимум вдвое больше */
        slidesPerView: 2,
        coverflowEffect: {
          stretch: 1,
          depth: 400,
        },
      },
    },
  }),
};
