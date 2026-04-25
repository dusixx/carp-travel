'use client';

import { useHeaderMatchMedia } from '@/hooks';
import clsx from 'clsx';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { MenuBtn } from './MenuBtn';
import { MobileMenu } from './MobileMenu';
import { NavMenu } from './NavMenu';

export const Header = () => {
  const { headerRef, showMenu, setShowMenu, shaded, showNav } =
    useHeaderMatchMedia();

  return (
    <>
      <header
        ref={headerRef}
        className={clsx('header', shaded && 'header--shaded')}
      >
        <div className="header__container">
          <a href="/">
            <Image
              className="logo"
              src={logo}
              alt="Carp travel logo"
              priority={true}
            />
          </a>
          {showNav ? (
            <nav className="header__nav-links">
              <NavMenu />
            </nav>
          ) : (
            <MenuBtn onClick={() => setShowMenu(true)} />
          )}
        </div>
      </header>
      {showMenu && (
        <MobileMenu
          onItemClick={() => setShowMenu(false)}
          onCloseClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};
