'use client';

import { useRef } from 'react';

export const Counter = ({ value, total, className }) => {
  const totalRef = useRef(String(total)?.padStart?.(2, '0') ?? '0');
  const formattedValue = `${value + 1}`.padStart(2, '0');

  return (
    <span className={className}>
      <span>{`${formattedValue}/`}</span>
      {totalRef.current}
    </span>
  );
};
