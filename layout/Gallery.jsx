'use client';

import { useRef } from 'react';
import { SectionTitle, Swiper, SwiperControls } from '@/components';
import { galleryData, swiperConfig as config } from '@/data';

export const Gallery = () => {
  const swiperRef = useRef(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <SectionTitle
          className="gallery__section-title"
          caption="Our gallery"
          accent={1}
        />

        <div className="gallery__wrapper">
          <Swiper
            ref={swiperRef}
            parentClass="gallery"
            data={galleryData}
            config={config.gallery('gallery')}
          />
          <SwiperControls parentClass={'gallery'} />
        </div>
      </div>
    </section>
  );
};
