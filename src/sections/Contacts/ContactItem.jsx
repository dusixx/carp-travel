export const ContactItem = ({ label, value, className }) => {
  if (!value) return null;
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
