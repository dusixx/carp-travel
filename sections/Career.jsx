'use client';

import { useState, useEffect } from 'react';
import { careerData } from '@/data';
import { Advantages, SectionTitle, JoinUsForm } from '@/components';
import { CareerJoinUs } from './CareerJoinUs';
import config from '../tailwind.config';

const maxWidth = parseInt(config.theme.screens.md) - 0.1;
const { intro, advantages, appeal } = careerData;

export const Career = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleChangeMediaQuery = e => {
      setMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleChangeMediaQuery);
    handleChangeMediaQuery(mediaQuery);
  }, []);

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
