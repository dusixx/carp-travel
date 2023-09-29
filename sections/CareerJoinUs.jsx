'use client';

import throttle from 'lodash.throttle';
import { careerData } from '@/data';
import { JoinUsForm } from '@/components';

const { appeal } = careerData;

export const CareerJoinUs = () => {
  return (
    <section className="career">
      <div
        style={{
          background: `linear-gradient(180deg, rgba(255 255 255 / 0.05), transparent 100%), 
            linear-gradient(rgba(2 15 10 / 0.5), rgba(2 15 10 / 0.5))`,
        }}
      >
        <div className="career__container">
          <p className="career__appeal">{appeal}</p>
          <JoinUsForm />
        </div>
      </div>
    </section>
  );
};
