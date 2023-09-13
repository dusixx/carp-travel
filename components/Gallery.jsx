/* eslint-disable @next/next/no-img-element */
'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { SectionTitle } from './misc/SectionTitle';

register();

const images = 'forest hill lake polar-lights lagoon field horsehoe'.split(' ');

const params = {
  loop: true,
  speed: 500,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true,
  // },
  // zoom: {
  //   maxRatio: 1.5,
  //   minRatio: 1,
  //   toggle: true,
  // },
  zoom: false,
  keyboard: {
    enabled: true,
  },

  grabCursor: true,
  centeredSlides: true,
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'coverflow',
  navigation: {
    nextEl: '.gallery__swiper-next',
    prevEl: '.gallery__swiper-prev',
  },
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
};

export const Gallery = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;
    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="inner-container">
        <SectionTitle
          className="gallery__section-title"
          caption="Our gallery"
          accent={1}
        />
        <div className="gallery__wrapper">
          {/* swiper-container */}
          <swiper-container
            class="gallery__swiper"
            ref={swiperRef}
            init="false"
          >
            {images.map(name => (
              <swiper-slide key={name} class="gallery__swiper-slide">
                {/* NOTE: при попытке использовать Image - ошибка в register() */}
                <div className="swiper-zoom-container">
                  <img
                    className="gallery__swiper-img"
                    src={`/gallery/${name}.jpg`}
                    alt={name}
                    loading="lazy"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          {/* controls */}
          <div className="gallery__swiper-controls">
            <button className="gallery__swiper-prev" type="button">
              back
            </button>
            <button className="gallery__swiper-next" type="button">
              next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
