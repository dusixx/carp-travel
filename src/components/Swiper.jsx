/* eslint-disable react/display-name */
'use client';

import Image from 'next/image';
import { useEffect, forwardRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const Swiper = forwardRef(({ config, data }, ref) => {
  const { items, imgDir } = data;

  useEffect(() => {
    const swiperEl = ref.current;
    Object.assign(swiperEl, config);
    swiperEl.initialize();
  }, [config, ref]);

  return (
    <swiper-container ref={ref} class="swiper" init="false">
      {items?.map(({ img, name }) => (
        <swiper-slide key={name} class="swiper__slide">
          <Image
            className="swiper__img"
            src={`${imgDir}/${img}`}
            alt={`${name}`}
            fill
            objectFit="cover"
            priority={true}
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
});
