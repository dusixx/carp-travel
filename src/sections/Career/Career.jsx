'use client';

import { SectionTitle } from '@/components';
import { useScreenMatchMedia } from '@/hooks';
import config from '../../../tailwind.config.js';
import { CareerData } from './Career.constants.js';
import { CareerJoinUs } from './CareerJoinUs.jsx';
import { JoinUsForm } from './JoinUsForm.jsx';

const tablet = parseInt(config.theme.screens.md) - 0.1;

export const Career = () => {
  const mobile = useScreenMatchMedia({ query: `(max-width: ${tablet}px)` });

  return (
    <>
      <section className="career" id="career">
        <div className="career__container">
          <div className="career__content">
            <SectionTitle caption="Choose us" accent={1} />
            <p className="career__intro">{CareerData.Intro}</p>
            <h3 className="career__subtitle">Why us ?</h3>
            <ul className="advantages">
              {CareerData.Advantages.map(({ caption, desc }, idx) => {
                return (
                  <li key={idx} className="advantages__item">
                    <h4 className="advantages__caption">{caption}</h4>
                    <p className="advantages__desc">{desc}</p>
                  </li>
                );
              })}
            </ul>
            {!mobile && <p className="career__appeal">{CareerData.Appeal}</p>}
            {!mobile && <JoinUsForm />}
          </div>
        </div>
      </section>

      {mobile && <CareerJoinUs />}
    </>
  );
};
