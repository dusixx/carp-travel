import { func } from 'prop-types';
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { BodyScrollLock, NavMenu } from '.';

export const MobileMenu = ({ onItemClick = Function.prototype }) => (
  <div className="header__mobile-menu">
    <BodyScrollLock />
    <button
      className="close-btn"
      type="button"
      onClick={() => setShowMenu(false)}
    >
      <IconClose size={25} />
    </button>
    <NavMenu onItemClick={onItemClick} />
  </div>
);

MobileMenu.propTypes = {
  onItemClick: func,
};
