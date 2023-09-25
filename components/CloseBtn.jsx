import { AiOutlineClose as IconClose } from 'react-icons/ai';

export const CloseBtn = ({ onClick = Function.prototype }) => (
  <button
    className="close-btn"
    type="button"
    onClick={onClick}
    aria-label="Menu close"
  >
    <IconClose size={25} />
  </button>
);
