'use client';

import { careerData } from '@/data';
import { Advantages, JoinUsForm, SectionTitle } from '@/components';
import { useScreenMatchMedia } from '@/hooks';
import config from '../../tailwind.config';
import { CareerJoinUs } from './CareerJoinUs';

const tablet = parseInt(config.theme.screens.md) - 0.1;
const { intro, advantages, appeal } = careerData;

export const Career = () => {
  const mobile = useScreenMatchMedia({ query: `(max-width: ${tablet}px)` });

  return (
    <>
      <section className="career" id="career">
        <div className="career__container">
          <div className="career__content">
            <SectionTitle caption="Choose us" accent={1} />

            <p className="career__intro">{intro}</p>

            <h3 className="career__subtitle">Why us ?</h3>
            <Advantages data={advantages} />

            {!mobile && <p className="career__appeal">{appeal}</p>}
            {!mobile && <JoinUsForm />}
          </div>
        </div>
      </section>

      {mobile && <CareerJoinUs />}
    </>
  );
};
