export const ContactItem = ({ label, value, className }) => {
  if (!value) return null;
  const list = Array.isArray(value) ? value : [value];

  return (
    <div className={`contacts-item ${className ?? ''}`}>
      <ul className="contacts-item__value">
        {list.map((itm, idx) => (
          <li key={idx}>{itm}</li>
        ))}
      </ul>
      <span className="contacts-item__label">{label}</span>
    </div>
  );
};
