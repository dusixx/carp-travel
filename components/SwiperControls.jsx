export const SwiperControls = ({ parentClass }) => {
  const swiper = `${parentClass}__swiper`;

  const className = {
    constrols: `${swiper}-controls`,
    prev: `${swiper}-prev`,
    next: `${swiper}-next`,
  };

  return (
    <div className={className.constrols}>
      <button className={className.prev} type="button">
        back
      </button>
      <button className={className.next} type="button">
        next
      </button>
    </div>
  );
};
