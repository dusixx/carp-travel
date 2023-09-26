export const SwiperControls = ({ parentClass }) => {
  const swiper = `${parentClass}__swiper`;

  const cls = {
    constrols: `${swiper}-controls`,
    prev: `${swiper}-prev`,
    next: `${swiper}-next`,
  };

  return (
    <div className={cls.constrols}>
      <button className={cls.prev} type="button">
        back
      </button>
      <button className={cls.next} type="button">
        next
      </button>
    </div>
  );
};
