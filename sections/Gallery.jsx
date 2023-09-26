'use client';

import { useRef } from 'react';
import { galleryData, swiperConfig as config } from '@/data';
import { SectionTitle, Swiper, SwiperControls } from '@/components';

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
            data={galleryData}
            config={config.gallery('gallery')}
          />
          <SwiperControls parentClass={'gallery'} />
        </div>
      </div>
    </section>
  );
};
