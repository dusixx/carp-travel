'use client';

import clsx from 'clsx';
import { toast } from 'react-toastify';
import { validation } from '@/data';
import { useForm } from '@/hooks';
import { FormField } from './FormField';
import { Checkbox } from './Checkbox';

const storageKey = 'join-us-form';
const MSG_SUBMIT_SUCCESS = 'The data has been sent. We will contact you';

export const JoinUsForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    isValid,
  } = useForm({ storageKey });

  const handleFormSubmit = handleSubmit(data => {
    console.log(data);
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
      className="join-us-form"
      autoComplete="off"
      {...props}
      onSubmit={handleFormSubmit}
    >
      <div className="form-field-group">
        <FormField
          name="fullName"
          caption="Full name"
          placeholder="John Smith"
          onClearError={() => setError('fullName', null)}
          {...regProps}
        />

        <FormField
          name="email"
          caption="E-mail"
          placeholder="johnsmith@email.com"
          onClearError={() => setError('email', null)}
          {...regProps}
        />

        <FormField
          name="position"
          caption="Position"
          placeholder="Movie maker"
          onClearError={() => setError('position', null)}
          {...regProps}
        />

        <FormField
          name="phone"
          caption="Phone"
          placeholder="(097) 12 34 567"
          inputWrapper={true}
          onClearError={() => setError('phone', null)}
          {...regProps}
        />

        <FormField multiline={true} name="message" caption="Message" />
      </div>

      <div className="form-group">
        <Checkbox
          required
          disabled={!isValid}
          caption="I confirm my consent to the processing of
          personal data."
        />
        <button type="submit" className="form-submit-btn">
          send
        </button>
      </div>
    </form>
  );
};
