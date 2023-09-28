import throttle from 'lodash.throttle';
import { useRef, useState, useEffect } from 'react';
import config from '../tailwind.config';

const maxWidth = parseInt(config.theme.screens.md) - 0.1;

export const useHeaderMatchMedia = () => {
  const [shaded, setShaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

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
