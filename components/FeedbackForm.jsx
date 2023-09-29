'use client';

import clsx from 'clsx';
import { toast } from 'react-toastify';
import { validation, placeholder as ph } from '@/data';
import { useForm } from '@/hooks';
import { FormField } from './FormField';

const storageKey = 'feedback-form';
const MSG_SUBMIT_SUCCESS = 'The data has been sent. We will contact you';

export const FeedbackForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ storageKey });

  const handleFormSubmit = handleSubmit(data => {
    toast.success(MSG_SUBMIT_SUCCESS);
    reset();
  });

  const regProps = {
    register,
    validation,
    errors,
  };

  return (
    <form
      className="feedback-form"
      autoComplete="off"
      {...props}
      onSubmit={handleFormSubmit}
    >
      <div className="form-field-group">
        <FormField
          placeholder={ph.fullName}
          name="fullName"
          caption="Full name"
          onClearError={() => setError('fullName', null)}
          {...regProps}
        />

        <FormField
          placeholder={ph.email}
          name="email"
          caption="E-mail"
          onClearError={() => setError('email', null)}
          {...regProps}
        />
      </div>

      <div className="form-group">
        <FormField
          multiline={true}
          name="message"
          caption="Message"
          placeholder={ph.message}
          onClearError={() => setError('message', null)}
          {...regProps}
        />
        <button type="submit" className="form-submit-btn">
          send
        </button>
      </div>
    </form>
  );
};
