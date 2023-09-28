'use client';

import clsx from 'clsx';
import { string, func, object, bool } from 'prop-types';
import { CloseBtn } from './CloseBtn';

export const FormField = ({
  name,
  placeholder,
  caption,
  errors,
  multiline,
  inputWrapper,
  onClearError = Function.prototype,
  register = Function.prototype,
  validation,
}) => {
  const errorMessage = errors?.[name]?.message;

  const inputProps = {
    placeholder,
    className: clsx('form-input', errorMessage && 'form-input--invalid'),
    ...(register && register(name, validation?.[name])),
  };

  const inputEl = multiline ? (
    <textarea {...inputProps} />
  ) : (
    <input {...inputProps} />
  );

  const wrappedInputEl = inputWrapper ? (
    <div className="form-input-wrapper">{inputEl}</div>
  ) : (
    inputEl
  );

  return (
    <label
      className={clsx('form-field', multiline && 'form-field--multiline')}
      name={name}
    >
      <span>{caption}</span>
      {wrappedInputEl}
      {errorMessage && (
        <span className="form-input__error">
          <CloseBtn
            className="form-input__error-clear"
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
  inputWrapper: bool,
  onClearError: func,
  register: func,
};
