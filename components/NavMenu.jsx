import { func } from 'prop-types';
import { scrollToTarget } from '../helpers';

const menuItems = {
  about: '#about',
  services: '#services',
  gallery: '#gallery',
  contacts: '#contacts',
};

export const NavMenu = ({ onItemClick = Function.prototype }) => {
  return (
    <ul className="menu-list">
      {Object.entries(menuItems).map(([name, target]) => (
        <li key={name}>
          <button
            className="menu-item__btn"
            type="button"
            onClick={e => {
              onItemClick(e);
              setTimeout(() => scrollToTarget(target), 0);
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
