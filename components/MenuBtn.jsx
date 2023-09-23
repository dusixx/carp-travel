import { func } from 'prop-types';
import { IoIosMenu as IconMenu } from 'react-icons/io';

export const MenuBtn = ({ onClick = Function.prototype }) => (
  <button type="button" onClick={onClick}>
    <IconMenu size={30} />
  </button>
);

MenuBtn.propTypes = {
  onClick: func,
};
