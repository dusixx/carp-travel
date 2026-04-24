export const Advantages = ({ data }) => {
  return (
    <ul className="advantages">
      {data.map(({ caption, desc }, idx) => {
        return (
          <li key={idx} className="advantages__item">
            <h4 className="advantages__caption">{caption}</h4>
            <p className="advantages__desc">{desc}</p>
          </li>
        );
      })}
    </ul>
  );
};
