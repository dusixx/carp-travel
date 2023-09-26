'use client';

import clsx from 'clsx';
import { string, func, object, bool } from 'prop-types';
import { CloseBtn } from './CloseBtn';

export const FormField = ({
  formClass,
  name,
  placeholder,
  caption,
  errors,
  multiline,
  onClearError = Function.prototype,
  register = Function.prototype,
  validation,
}) => {
  const input = `${formClass}__input`;
  const cls = {
    input,
    field: `${formClass}__field`,
    inputInvalid: `${input}--invalid`,
    inputError: `${input}-error`,
  };

  const errorMessage = errors?.[name]?.message;

  const inputProps = {
    placeholder,
    className: clsx(cls.input, errorMessage && cls.inputInvalid),
    ...(register && register(name, validation?.[name])),
  };

  return (
    <label className={cls.field}>
      <span>{caption}</span>
      {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
      {errorMessage && (
        <span className={cls.inputError}>
          <CloseBtn
            className={`${cls.inputError}-clear`}
            onClick={onClearError}
            aria-label="Clear error"
            title="Clear error"
            size={16}
          />
          {errorMessage}
        </span>
      )}
    </label>
  );
};

FormField.propTypes = {
  formClass: string,
  name: string,
  inputElName: string,
  placeholder: string,
  caption: string,
  errors: object,
  validation: object,
  multiline: bool,
  onClearError: func,
  register: func,
};
