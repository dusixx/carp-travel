import { useEffect, useState } from 'react';

export const useKeydown = ({
  keyCode,
  modifier,
  handler = Function.prototype,
}) => {
  const [code, setCode] = useState('');
  const [modifierKey, setModifierKey] = useState({});

  useEffect(() => {
    const handleKeydown = ({ code, altKey, shiftKey, ctrlKey }) => {
      setCode(code);
      setModifierKey({ altKey, ctrlKey, shiftKey });

      code === keyCode &&
        altKey === !!modifier?.altKey &&
        shiftKey === !!modifier?.shiftKey &&
        ctrlKey === !!modifier?.ctrlKey &&
        handler?.();
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handler, keyCode, modifier]);

  return [code, modifierKey];
};
