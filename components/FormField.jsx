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
  onClearError = Function.prototype,
  register = Function.prototype,
  onChange = Function.prototype,
  validation,
  value,
}) => {
  const errorMessage = errors?.[name]?.message;
  const registeredField = register && register(name, validation?.[name]);

  const handleInputChange = e => {
    registeredField?.onChange?.(e);
    onChange(e);
  };

  const inputProps = {
    ...registeredField,
    placeholder,
    className: clsx('form-input', errorMessage && 'form-input--invalid'),
    onChange: handleInputChange,
    value,
  };

  const inputEl = multiline ? (
    <textarea {...inputProps} />
  ) : (
    <input {...inputProps} />
  );

  return (
    <label
      className={clsx('form-field', multiline && 'form-field--multiline')}
      name={name}
    >
      <span>{caption}</span>
      <div className="form-input-wrapper">{inputEl}</div>
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
