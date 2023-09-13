export const SectionTitle = ({ caption, accent, className }) => {
  return (
    <h2 className={className ?? 'section-title'}>
      {caption?.split(/\s+/).map((word, idx) => (
        <span
          key={idx}
          className={idx === accent ? 'section-title__accent' : null}
        >
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};
