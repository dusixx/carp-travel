'use client';

import { string, bool } from 'prop-types';

export const Checkbox = ({ caption, disabled, required }) => {
  return (
    <label className="checkbox" disabled={disabled}>
      <input
        className="checkbox__input"
        type="checkbox"
        required={required}
        disabled={disabled}
      />
      <span className="checkbox__caption">{caption}</span>
    </label>
  );
};

Checkbox.propTypes = {
  caption: string,
  disabled: bool,
  required: bool,
};
