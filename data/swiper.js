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
    spaceBetween: 0,
    navigation: {
      nextEl: `.${parentClass}__swiper-next`,
      prevEl: `.${parentClass}__swiper-prev`,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 2.5,
      slideShadows: false,
    },
    on: {
      breakpoint: function () {
        // сразу заполняем про-во сверху для моб
        this.slideNext();
      },
    },
    breakpoints: {
      768: {
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
