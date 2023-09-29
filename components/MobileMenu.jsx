'use client';

import { func } from 'prop-types';
import { useFocusTrap, useKeydown } from '@/hooks';
import { BodyScrollLock } from './BodyScrollLock';
import { NavMenu } from './NavMenu';
import { CloseBtn } from './CloseBtn';

export const MobileMenu = ({
  onItemClick = Function.prototype,
  onCloseClick = Function.prototype,
}) => {
  useFocusTrap({ target: '.mobile-menu' });
  useKeydown({ keyCode: 'Escape', handler: onCloseClick });

  return (
    <div className="mobile-menu">
      <BodyScrollLock />
      <CloseBtn onClick={onCloseClick} title="Close" aria-label="Menu close" />
      <NavMenu onItemClick={onItemClick} />
    </div>
  );
};

MobileMenu.propTypes = {
  onItemClick: func,
  onCloseClick: func,
};
