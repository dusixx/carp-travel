'use client';

import { useRef } from 'react';
import { number } from 'prop-types';

export const Counter = ({ value, total }) => {
  const totalRef = useRef(String(total)?.padStart?.(2, '0') ?? '0');
  const formattedValue = `${value + 1}`.padStart(2, '0');

  return (
    <span className="counter">
      <span>{`${formattedValue}/`}</span>
      {totalRef.current}
    </span>
  );
};

Counter.propTypes = {
  value: number,
  total: number,
};
