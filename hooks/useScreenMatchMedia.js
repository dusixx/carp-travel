import { useState, useEffect } from 'react';

export const useScreenMatchMedia = ({
  query,
  handler = Function.prototype,
}) => {
  const [matched, setMatched] = useState(false);

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
