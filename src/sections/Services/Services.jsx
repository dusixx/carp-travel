'use client';

import { getServicesBgi, swiperConfig } from '@/common';
import { Counter, SectionTitle, Swiper } from '@/components';
import { useRef, useState } from 'react';
import { ServicesData } from './Services.constants.js';
import { ServicesMenu } from './ServicesMenu.jsx';

const BG_PATH = '/services/bg';

export const Services = () => {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const handleMenuItemClick = idx => {
    const swiper = swiperRef.current?.swiper;
    setCurrent(idx);
    swiper?.slideToLoop?.(idx);
  };

  const { items } = ServicesData;
  const { tagline, about } = items[current];
  const bgiPath = `${BG_PATH}/services-bg-${current + 1}.jpg`;

  return (
    <section className="services" id="services" style={getServicesBgi(bgiPath)}>
      <div className="services__container">
        <div className="services__content">
          <SectionTitle caption="We offer" accent={1} />

          <Counter value={current} total={items.length} />

          <Swiper
            ref={swiperRef}
            data={ServicesData}
            config={swiperConfig.services}
          />

          <div className="services__desc">
            <span className="services__tagline">{tagline}</span>
            <ServicesMenu
              items={items}
              onClick={handleMenuItemClick}
              current={current}
              tagline={tagline}
            />
            <p className="services__about">{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
