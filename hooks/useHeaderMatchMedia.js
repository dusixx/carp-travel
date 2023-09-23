import throttle from 'lodash.throttle';
import { useRef, useState, useEffect } from 'react';

export const useHeaderMatchMedia = () => {
  const [shaded, setShaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767.99px)');

    const handleChangeMediaQuery = e => {
      setShowNav(!e.matches);
      setShowMenu(false);
    };
    mediaQuery.addEventListener('change', handleChangeMediaQuery);

    const handleScroll = () =>
      setShaded(headerRef.current.offsetHeight < window.scrollY);
    document.addEventListener('scroll', throttle(handleScroll, 150));

    handleChangeMediaQuery(mediaQuery);
    handleScroll();
  }, []);

  return { headerRef, setShowMenu, showMenu, shaded, showNav };
};
