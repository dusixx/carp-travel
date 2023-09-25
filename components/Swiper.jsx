/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { useRef, useEffect, useState, forwardRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const Swiper = forwardRef(
  ({ parentClass, config, data: { items, imgDir } }, ref) => {
    const swiper = `${parentClass}__swiper`;

    const className = {
      swiper,
      slide: `${swiper}-slide`,
      img: `${swiper}-img`,
    };

    useEffect(() => {
      const swiperEl = ref.current;
      Object.assign(swiperEl, config);
      swiperEl.initialize();
    }, [config, ref]);

    return (
      <swiper-container ref={ref} class={className.swiper} init="false">
        {items?.map(({ img, name }) => (
          <swiper-slide key={name} class={className.slide}>
            {/* NOTE: при попытке использовать Image - ошибка в register() */}
            <Image
              className={className.img}
              src={`${imgDir}/${img}`}
              alt={`${name}`}
              width={1000}
              height={1000}
              // loading="lazy"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    );
  }
);
