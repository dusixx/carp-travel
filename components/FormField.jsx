'use client';

import clsx from 'clsx';
import { string, func, object, bool } from 'prop-types';

export const FormField = ({
  formClass,
  name,
  inputElName = 'input',
  placeholder,
  caption,
  errors,
  multiline,
  onClearError = Function.prototype,
  register = Function.prototype,
  validation,
}) => {
  const input = `${formClass}__${inputElName}`;

  const className = {
    input,
    field: `${formClass}__field`,
    inputInvalid: `${input}--invalid`,
    inputError: `${input}-error`,
  };

  const errorMessage = errors[name]?.message;

  const inputProps = {
    placeholder,
    className: clsx(className.input, errorMessage && className.inputInvalid),
    ...register(name, validation[name]),
  };

  return (
    <label className={className.field}>
      <span>{caption}</span>
      {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
      <span className={className.inputError}>
        {errorMessage && (
          <>
            <span onClick={onClearError}>&times;</span>
            {errorMessage}
          </>
        )}
      </span>
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
