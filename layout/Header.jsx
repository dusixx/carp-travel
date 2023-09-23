'use client';

import clsx from 'clsx';
import { useHeaderMatchMedia } from '@/hooks';

import { BodyScrollLock, Logo, MobileMenu, Nav, MenuBtn } from '@/components';

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
          <Logo />
          {showNav ? <Nav /> : <MenuBtn onClick={() => setShowMenu(true)} />}
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
