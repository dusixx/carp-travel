'use client';

import { PageTitle, SectionTitle, JoinNowBtn } from '@/components';
import { heroData } from '@/data';

const { bgPhotoCaption, weOffer } = heroData;

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <PageTitle />

          <SectionTitle
            caption="Uncover Carpathian&rsquo;s Secrets"
            accent={0}
          />

          <p className="hero__photo-caption">{bgPhotoCaption}</p>

          <div className="hero__join-now">
            <p className="hero__offer">{weOffer}</p>
            <JoinNowBtn />
          </div>
        </div>
      </div>
    </section>
  );
};
