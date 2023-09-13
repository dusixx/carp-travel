'use client';

import { PageTitle } from './misc/PageTitle';
import { SectionTitle } from './misc/SectionTitle';
import { scrollToTarget } from '@/helpers';

const JOIN_NOW_TARGET = '#contacts';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <PageTitle />

          <SectionTitle
            className="hero__section-title"
            caption="Uncover Carpathian&rsquo;s Secrets"
            accent={0}
          />

          <p className="hero__photo-caption">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>

          <div className="hero__join-now">
            <p className="hero__offer">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
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
