import { scrollToTarget } from '@/common';
import { func } from 'prop-types';

export const navItems = {
  about: '#about',
  services: '#services',
  career: '#career',
  gallery: '#gallery',
  contacts: '#contacts',
};

export const NavMenu = ({ onItemClick = Function.prototype }) => {
  return (
    <ul className="nav-menu">
      {Object.entries(navItems).map(([name, target]) => (
        <li key={name} className="nav-menu__item">
          <button
            className="nav-menu__btn"
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
