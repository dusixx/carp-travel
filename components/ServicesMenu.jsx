import clsx from 'clsx';
import { func, string, array, number } from 'prop-types';

export const ServicesMenu = ({
  parentClass,
  items,
  current,
  tagline = '',
  onClick = Function.prototype,
}) => {
  const menu = `${parentClass}__menu`;
  const className = {
    menu,
    menuItem: `${menu}-item`,
    menuItemCurrent: `${menu}-item--current`,
  };

  return (
    <ul className={className.menu}>
      {items.map(({ name }, idx) => (
        <li
          key={name}
          className={clsx(
            className.menuItem,
            idx === current && className.menuItemCurrent
          )}
          onClick={() => onClick(idx)}
        >
          <div data-content>
            <span data-name>{name}</span>
            {idx === current && <span data-tagline>{tagline}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
};

ServicesMenu.propTypes = {
  parentClass: string,
  items: array,
  onClick: func,
  current: number,
  tagline: string,
};
