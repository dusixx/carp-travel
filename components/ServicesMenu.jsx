import clsx from 'clsx';
import { func, string, array, number } from 'prop-types';

export const ServicesMenu = ({
  items,
  current,
  tagline = '',
  onClick = Function.prototype,
}) => {
  return (
    <ul className="services-menu">
      {items.map(({ name }, idx) => {
        const isCurrent = idx === current;

        return (
          <li
            key={name}
            className={clsx(
              'services-menu__item',
              isCurrent && 'services-menu__item--current'
            )}
          >
            <div data-caption>
              <button onClick={() => onClick(idx)}>
                <span>{name}</span>
              </button>
              {isCurrent && <span data-tagline>{tagline}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ServicesMenu.propTypes = {
  items: array,
  onClick: func,
  current: number,
  tagline: string,
};
