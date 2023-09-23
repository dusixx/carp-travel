import { scrollToTarget } from '@/helpers';

const JOIN_NOW_TARGET = '#contacts';

export const JoinNowBtn = () => (
  <button
    className="button-primary"
    onClick={() => scrollToTarget(JOIN_NOW_TARGET)}
  >
    join now
  </button>
);
