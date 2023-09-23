import clsx from 'clsx';
import { func, string, array } from 'prop-types';

export const ServicesMenu = ({
  parentClass,
  items,
  current,
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
          {name}
        </li>
      ))}
    </ul>
  );
};

ServicesMenu.propTypes = {
  parentClass: string,
  items: array,
  onClick: func,
};
