import { func } from 'prop-types';
import { IoIosMenu as IconMenu } from 'react-icons/io';

export const MenuBtn = ({
  onClick = Function.prototype,
  size = 30,
  ...rest
}) => (
  <button
    className="menu-btn"
    type="button"
    onClick={onClick}
    aria-label="Menu open"
    {...rest}
  >
    <IconMenu size={size} />
  </button>
);

MenuBtn.propTypes = {
  onClick: func,
};
