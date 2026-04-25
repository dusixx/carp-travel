'use client';

import { Placeholder, validation } from '@/common';
import { FormField } from '@/components';
import { useForm } from '@/hooks';
import { toast } from 'react-toastify';

const STORAGE_KEY = 'feedback-form';
const MSG_SUBMIT_SUCCESS = 'The data has been sent. We will contact you';

export const FeedbackForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ storageKey: STORAGE_KEY });

  const handleFormSubmit = handleSubmit(_ => {
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
          placeholder={Placeholder.FullName}
          name="fullName"
          caption="Full name"
          onClearError={() => setError('fullName', null)}
          {...regProps}
        />

        <FormField
          placeholder={Placeholder.Email}
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
          placeholder={Placeholder.Message}
          onClearError={() => setError('message', null)}
          {...regProps}
        />
        <button type="submit" className="submit">
          send
        </button>
      </div>
    </form>
  );
};
