import { scrollToTarget } from '@/common';
import { func, string } from 'prop-types';

export const navItems = {
  about: '#about',
  services: '#services',
  career: '#career',
  gallery: '#gallery',
  contacts: '#contacts',
};

export const NavMenu = ({
  onItemClick = Function.prototype,
  className = 'nav-menu',
}) => {
  return (
    <ul className={className}>
      {Object.entries(navItems).map(([name, target]) => (
        <li key={name} className={`${className}__item`}>
          <button
            className={`${className}__btn`}
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
  className: string,
};
