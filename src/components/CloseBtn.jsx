import { AiOutlineClose as IconClose } from 'react-icons/ai';

export const CloseBtn = ({
  onClick = Function.prototype,
  size = 25,
  ...rest
}) => (
  <button className="close-btn" type="button" onClick={onClick} {...rest}>
    <IconClose size={size} />
  </button>
);
