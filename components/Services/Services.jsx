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
  slidesPerView: 1,
  effect: 'fade',
};

export const Services = () => {
  const swiperRef = useRef(null);
  const swiper = swiperRef.current?.swiper;
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const swiperEl = swiperRef.current;
    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  const handleMenuItemClick = idx => {
    setCurrentService(idx);
    swiper?.slideToLoop(idx);
  };

  const currentNum = `${currentService + 1}`.padStart(2, '0');

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
            <span>{`${currentNum}/`}</span>05
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
            <span className="services__tagline">
              {services[currentService].tagline}
            </span>

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

            <p className="services__about">{services[currentService].about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
