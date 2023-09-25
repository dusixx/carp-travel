import { func } from 'prop-types';
import { IoIosMenu as IconMenu } from 'react-icons/io';

export const MenuBtn = ({ onClick = Function.prototype }) => (
  <button type="button" onClick={onClick} aria-label="Menu open">
    <IconMenu size={30} />
  </button>
);

MenuBtn.propTypes = {
  onClick: func,
};
