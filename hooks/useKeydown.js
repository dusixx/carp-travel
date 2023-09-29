import { useEffect, useState } from 'react';

export const useKeydown = ({ keyCode, handler = Function.prototype }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const handleKeydown = ({ code }) => {
      setCode(code);
      code === keyCode && handler?.();
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handler, keyCode]);

  return code;
};
