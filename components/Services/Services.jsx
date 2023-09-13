/* eslint-disable @next/next/no-img-element */
'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { SectionTitle } from '../misc';
import { services, bgi } from './services-data';
import clsx from 'clsx';

register();

const params = {
  loop: true,
  speed: 350,
  keyboard: {
    enabled: true,
  },
  allowTouchMove: false,
  // navigation: true,
  slidesPerView: 1,
  effect: 'fade',
};

export const Services = () => {
  const swiperRef = useRef(null);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const swiperEl = swiperRef.current;

    // swiperEl.addEventListener('slidechange', () => {
    //   console.log(swiperEl.swiper);
    //   setCurrentService(swiperEl.swiper.activeIndex);
    // });

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  const handleMenuItemClick = idx => {
    const swiper = swiperRef.current?.swiper;
    setCurrentService(idx);
    swiper?.slideToLoop(idx);
  };

  const currentNum = `${currentService + 1}`.padStart(2, '0');
  const servicesNum = `${services.length}`.padStart(2, '0');
  const { tagline, about } = services[currentService];

  return (
    <section
      className="services"
      id="services"
      style={{ backgroundImage: bgi(currentService + 1) }}
    >
      <div className="inner-container">
        <div className="services__content">
          <SectionTitle caption="We offer" accent={1} />

          <span className="services__current-num">
            <span>{`${currentNum}/`}</span>
            {servicesNum}
          </span>

          {/* swiper */}
          <swiper-container
            class="services__swiper"
            ref={swiperRef}
            init="false"
          >
            {services.map(({ image, name }) => (
              <swiper-slide key={name} class="services__swiper-slide">
                {/* NOTE: при попытке использовать Image - ошибка в register() */}
                <img
                  className="services__swiper-img"
                  src={`/services/${image}`}
                  alt={`${name}`}
                  loading="lazy"
                />
              </swiper-slide>
            ))}
          </swiper-container>

          <div className="services__desc">
            <span className="services__tagline">{tagline}</span>

            <ul className="services__menu">
              {services.map(({ name }, idx) => (
                <li
                  key={name}
                  className={clsx(
                    'services__menu-item',
                    idx === currentService && 'services__menu-item--current'
                  )}
                  onClick={() => handleMenuItemClick(idx)}
                >
                  {name}
                </li>
              ))}
            </ul>

            <p className="services__about">{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
