/* eslint-disable react/display-name */
'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';

export const FormField = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const input = `${formClass}__${inputElName}`;

    const className = {
      input,
      field: `${formClass}__field`,
      inputInvalid: `${input}--invalid`,
      inputError: `${input}-error`,
    };

    const errorMessage = errors[name]?.message;

    const inputProps = {
      ref,
      placeholder,
      className: clsx(className.input, errorMessage && className.inputInvalid),
      ...register(name, validation[name]),
    };

    return (
      <label className={className.field}>
        <span>{caption}</span>
        {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
        <p className={className.inputError}>
          {errorMessage && (
            <>
              <span onClick={onClearError}>&times;</span>
              {errorMessage}
            </>
          )}
        </p>
      </label>
    );
  }
);
