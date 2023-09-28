import { useForm as useFormHook, useFormState } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

export const useForm = ({ storageKey, localStorage = true }) => {
  const data = useFormHook();
  const { watch, setValue, control } = data;
  const { isValid } = useFormState({ control });

  const storage = localStorage
    ? globalThis.localStorage
    : globalThis.sessionStorage;

  useFormPersist(storageKey, {
    watch,
    setValue,
    storage,
  });

  return { ...data, isValid };
};
