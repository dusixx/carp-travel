'use client';

import { scrollToTarget } from '@/common';
import { PageTitle, SectionTitle } from '@/components';
import { HeroData } from './Hero.constants.js';

const JOIN_NOW_TARGET = '#contacts';

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

          <p className="hero__photo-caption">{HeroData.PhotoCaption}</p>

          <div className="hero__join-now">
            <p className="hero__offer">{HeroData.WeOffer}</p>
            <button
              className="button-primary"
              onClick={() => scrollToTarget(JOIN_NOW_TARGET)}
            >
              join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
