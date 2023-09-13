export const SectionTitle = ({ caption, accent, className }) => {
  const accentList = Array.isArray(accent) ? accent : [accent];

  return (
    <h2 className={className ?? 'section-title'}>
      {caption?.split(/\s+/).map((word, idx) => (
        <span
          key={idx}
          className={accentList.includes(idx) ? 'section-title__accent' : null}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};
