'use client';

import { JSONParse } from '@/common';
import { useEffect } from 'react';
import { useForm as useFormHook, useFormState } from 'react-hook-form';

export const useForm = ({ storageKey, localStorage = true }) => {
  const data = useFormHook();
  const { watch, control, reset } = data;
  const { isValid } = useFormState({ control });

  const storage = localStorage
    ? globalThis.localStorage
    : globalThis.sessionStorage;

  useEffect(() => {
    const parsed = JSONParse(storage.getItem(storageKey));
    reset(parsed);

    const { unsubscribe } = watch(value => {
      storage.setItem(storageKey, JSON.stringify(value));
    });
    return () => unsubscribe();
  }, [watch, reset, storage, storageKey]);

  return { ...data, isValid };
};
