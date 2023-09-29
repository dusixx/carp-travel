import throttle from 'lodash.throttle';
import { useRef, useState, useEffect } from 'react';
import { useScreenMatchMedia } from './useScreenMatchMedia';
import config from '../tailwind.config';

const tablet = parseInt(config.theme.screens.md) - 0.1;

export const useHeaderMatchMedia = () => {
  const [shaded, setShaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const headerRef = useRef(null);

  useScreenMatchMedia({
    query: `(max-width: ${tablet}px)`,
    initialState: true,
    handler: ({ matches }) => {
      setShowNav(!matches);
      if (!matches) setShowMenu(false);
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setShaded(headerRef.current.offsetHeight < window.scrollY);
    };
    document.addEventListener('scroll', throttle(handleScroll, 150));
    handleScroll();
  }, []);

  return { headerRef, setShowMenu, showMenu, shaded, showNav };
};
