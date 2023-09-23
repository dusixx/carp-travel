'use client';

import { useRef, useState } from 'react';
import { getServicesBgi } from '@/helpers';
import { servicesData, swiperConfig } from '@/data';
import { SectionTitle, Swiper, Counter, ServicesMenu } from '@/components';

const BG_PATH = '/services/bg';

export const Services = () => {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const handleMenuItemClick = idx => {
    const swiper = swiperRef.current?.swiper;
    setCurrent(idx);
    swiper?.slideToLoop?.(idx);
  };

  const { items } = servicesData;
  const { tagline, about } = items[current];

  return (
    <section
      className="services"
      id="services"
      style={getServicesBgi(`${BG_PATH}/services-bg-${current + 1}.jpg`)}
    >
      <div className="services__container">
        <div className="services__content">
          <SectionTitle caption="We offer" accent={1} />

          <Counter
            className="services__counter"
            value={current}
            total={items.length}
          />

          <Swiper
            ref={swiperRef}
            parentClass="services"
            data={servicesData}
            config={swiperConfig.services}
          />

          <div className="services__desc">
            <span className="services__tagline">{tagline}</span>
            <ServicesMenu
              parentClass="services"
              items={items}
              onClick={handleMenuItemClick}
              current={current}
            />
            <p className="services__about">{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
