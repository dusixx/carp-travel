'use client';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { validation } from '@/data';
import { FormField } from './FormField';

const MSG_SUBMIT_SUCCESS = 'The data has been sent. We will contact you';

export const FeedbackForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

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
    <form autoComplete="off" {...props} onSubmit={handleFormSubmit}>
      <div className="feedback__field-group">
        <FormField
          formClass="feedback"
          placeholder="John Smith"
          name="fullName"
          caption="Full name"
          onClearError={() => setError('fullName', null)}
          {...regProps}
        />

        <FormField
          formClass="feedback"
          placeholder="johnsmith@email.com"
          name="email"
          caption="E-mail"
          onClearError={() => setError('email', null)}
          {...regProps}
        />
      </div>

      <div className="feedback__group">
        <FormField
          formClass="feedback"
          multiline={true}
          inputElName="message"
          name="message"
          caption="Message"
          onClearError={() => setError('message', null)}
          {...regProps}
        />
        <button type="submit" className="feedback__submit">
          send
        </button>
      </div>
    </form>
  );
};
