'use client';

import { Logo, MenuBtn, MobileMenu, NavMenu } from '@/components';
import { useHeaderMatchMedia } from '@/hooks';
import clsx from 'clsx';

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
