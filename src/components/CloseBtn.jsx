'use client';

import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { string, number, func } from 'prop-types';

export const CloseBtn = ({
  onClick = Function.prototype,
  className = 'close-btn',
  size = 25,
  ...rest
}) => (
  <button className={className} type="button" onClick={onClick} {...rest}>
    <IconClose size={size} />
  </button>
);

CloseBtn.propTypes = {
  onClick: func,
  className: string,
  size: number,
};
