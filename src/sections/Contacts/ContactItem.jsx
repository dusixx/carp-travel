'use client';

import { string, oneOfType, arrayOf, node } from 'prop-types';

export const ContactItem = ({ label, value, className }) => {
  if (!value) {
    return null;
  }
  const list = Array.isArray(value) ? value : [value];

  return (
    <div className={`contact-item ${className ?? ''}`}>
      <ul className="contact-item__value">
        {list.map((itm, idx) => (
          <li key={idx}>{itm}</li>
        ))}
      </ul>
      <span className="contact-item__label">{label}</span>
    </div>
  );
};

ContactItem.propTypes = {
  label: string,
  className: string,
  value: oneOfType([node, arrayOf(node)]),
};
