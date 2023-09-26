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
  const cls = {
    menu,
    menuItem: `${menu}-item`,
    menuItemCurrent: `${menu}-item--current`,
  };

  return (
    <ul className={cls.menu}>
      {items.map(({ name }, idx) => {
        const isCurrent = idx === current;

        return (
          <li
            key={name}
            className={clsx(cls.menuItem, isCurrent && cls.menuItemCurrent)}
          >
            <div data-caption>
              <span data-name onClick={() => onClick(idx)}>
                {name}
              </span>
              {isCurrent && <span data-tagline>{tagline}</span>}
            </div>
          </li>
        );
      })}
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
