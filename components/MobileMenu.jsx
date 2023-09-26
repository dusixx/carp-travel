import { func } from 'prop-types';
import { BodyScrollLock, NavMenu, CloseBtn } from '.';

export const MobileMenu = ({
  onItemClick = Function.prototype,
  onCloseClick = Function.prototype,
}) => (
  <div className="mobile-menu">
    <BodyScrollLock />
    <CloseBtn onClick={onCloseClick} title="Close" aria-label="Menu close" />
    <NavMenu onItemClick={onItemClick} />
  </div>
);

MobileMenu.propTypes = {
  onItemClick: func,
  onCloseClick: func,
};
