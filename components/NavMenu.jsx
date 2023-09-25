import { func } from 'prop-types';
import { scrollToTarget } from '../helpers';
import { navItems } from '@/data';

export const NavMenu = ({ onItemClick = Function.prototype }) => {
  return (
    <ul className="menu-list">
      {Object.entries(navItems).map(([name, target]) => (
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
