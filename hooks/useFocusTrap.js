import { useEffect } from 'react';

export const useFocusTrap = ({ target }) => {
  useEffect(() => {
    try {
      const container = document.querySelector(target) ?? target;
      const firstEl = container.firstElementChild;

      const handleFocusout = e => {
        !container.contains(e.relatedTarget) && (firstEl || container).focus();
      };
      container.setAttribute('tabindex', '-1');
      container.addEventListener('focusout', handleFocusout);

      return () => {
        container.removeAttribute('tabindex');
        container.removeEventListener('focusout', handleFocusout);
      };
    } catch {}
  }, [target]);
};
