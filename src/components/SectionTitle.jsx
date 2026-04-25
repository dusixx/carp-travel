'use client';

import clsx from 'clsx';
import { string, oneOfType, arrayOf, number } from 'prop-types';

export const SectionTitle = ({ caption, accent }) => {
  const accentList = Array.isArray(accent) ? accent : [accent];

  return (
    <h2 className="section-title">
      {caption?.split(/\s+/).map((word, idx) => (
        <span
          key={idx}
          className={clsx(accentList.includes(idx) && 'section-title__accent')}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};

SectionTitle.propTypes = {
  caption: string,
  accent: oneOfType([number, arrayOf(number)]),
};
