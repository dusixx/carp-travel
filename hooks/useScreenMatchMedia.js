import { useState, useEffect } from 'react';

export const useScreenMatchMedia = ({
  query,
  handler = Function.prototype,
  initialState = false,
}) => {
  const [matched, setMatched] = useState(initialState);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handleChangeMediaQuery = e => {
      setMatched(e.matches);
      handler?.(e);
    };

    mq.addEventListener('change', handleChangeMediaQuery);
    handleChangeMediaQuery(mq);
  }, [query, handler]);

  return matched;
};
