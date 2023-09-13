import PropTypes from 'prop-types';
import { func } from 'prop-types';
import { scrollToTarget } from '@/helpers';

const menuItems = {
  services: () => scrollToTarget('#services'),
  gallery: () => scrollToTarget('#gallery'),
  contacts: () => scrollToTarget('#contacts'),
};

export const NavMenu = ({ onItemClick }) => {
  return (
    <ul className="menu-list">
      {Object.entries(menuItems).map(([name, action]) => (
        <li key={name}>
          <button
            className="menu-item__btn"
            type="button"
            onClick={e => {
              onItemClick?.call(e);
              setTimeout(action, 0);
            }}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

NavMenu.propTypes = {
  onItemClick: func,
};
