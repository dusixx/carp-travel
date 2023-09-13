'use client';

import clsx from 'clsx';
import Image from 'next/image';
import throttle from 'lodash.throttle';
import logo from '../../public/logo.svg';
import { useEffect, useState, useRef } from 'react';
import { IoIosMenu as IconMenu } from 'react-icons/io';
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { BodyScrollLock } from '../misc';
import { NavMenu } from './NavMenu';

export const Header = () => {
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
    handleChangeMediaQuery(mediaQuery);

    document.addEventListener(
      'scroll',
      throttle(
        () => setShaded(headerRef.current.offsetHeight < window.scrollY),
        150
      )
    );
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx('header', shaded && 'header--shaded')}
      >
        <div className="header__container">
          <a href="/">
            <Image className="logo" src={logo} alt="Logo" />
          </a>
          {!showNav && (
            <button type="button" onClick={() => setShowMenu(true)}>
              <IconMenu size={30} />
            </button>
          )}
          {showNav && (
            <nav className="header__nav-links">
              <NavMenu />
            </nav>
          )}
        </div>
      </header>
      {showMenu && (
        <div className="header__mobile-menu">
          <BodyScrollLock />
          <button
            className="close-btn"
            type="button"
            onClick={() => setShowMenu(false)}
          >
            <IconClose size={25} />
          </button>
          <NavMenu onItemClick={() => setShowMenu(false)} />
        </div>
      )}
    </>
  );
};
