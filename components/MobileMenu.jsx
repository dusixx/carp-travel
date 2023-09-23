import { func } from 'prop-types';
import { BodyScrollLock, NavMenu, CloseBtn } from '.';

export const MobileMenu = ({
  onItemClick = Function.prototype,
  onCloseClick = Function.prototype,
}) => (
  <div className="header__mobile-menu">
    <BodyScrollLock />
    <CloseBtn onClick={onCloseClick} />
    <NavMenu onItemClick={onItemClick} />
  </div>
);

MobileMenu.propTypes = {
  onItemClick: func,
  onCloseClick: func,
};
