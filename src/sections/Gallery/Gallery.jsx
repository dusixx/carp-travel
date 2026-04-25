'use client';

import { swiperConfig as config } from '@/common';
import { SectionTitle, Swiper } from '@/components';
import React, { useRef } from 'react';
import { GalleryData } from './Gallery.constants.js';

export const Gallery = () => {
  const swiperRef = useRef(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <SectionTitle caption="Our gallery" accent={1} />

        <div className="gallery__wrapper">
          <Swiper
            ref={swiperRef}
            parentClass="gallery"
            data={GalleryData}
            config={config.gallery('gallery')}
          />
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
