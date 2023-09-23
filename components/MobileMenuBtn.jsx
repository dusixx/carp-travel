import { func } from 'prop-types';
import { IoIosMenu as IconMenu } from 'react-icons/io';

export const MobileMenuBtn = ({ onClick = Function.prototype }) => (
  <button type="button" onClick={onClick}>
    <IconMenu size={30} />
  </button>
);

MobileMenuBtn.propTypes = {
  onClick: func,
};
