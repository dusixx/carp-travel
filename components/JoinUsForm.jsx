'use client';

import clsx from 'clsx';
import { toast } from 'react-toastify';
import { validation, placeholder } from '@/data';
import { useForm } from '@/hooks';
import { FormField } from './FormField';
import { Checkbox } from './Checkbox';

const storageKey = 'join-us-form';
const MSG_SUBMIT_SUCCESS = 'The data has been sent. We will contact you';
const { fullName, email, position, phone, message } = placeholder;

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
      <div className="form-fields">
        <div className="form-field-group">
          <FormField
            name="fullName"
            caption="Full name"
            placeholder={fullName}
            onClearError={() => setError('fullName', null)}
            {...regProps}
          />

          <FormField
            name="email"
            caption="E-mail"
            placeholder={email}
            onClearError={() => setError('email', null)}
            {...regProps}
          />

          <FormField
            name="position"
            caption="Position"
            placeholder={position}
            onClearError={() => setError('position', null)}
            {...regProps}
          />

          <FormField
            name="phone"
            caption="Phone"
            placeholder={phone}
            inputWrapper={true}
            onClearError={() => setError('phone', null)}
            {...regProps}
          />
        </div>

        <FormField
          multiline={true}
          name="message"
          caption="Message"
          placeholder={message}
        />
      </div>

      <div className="form-group">
        <Checkbox
          required
          disabled={!isValid}
          caption="I confirm my consent to the processing of personal data."
        />
        <button type="submit" className="form-submit-btn">
          send
        </button>
      </div>
    </form>
  );
};
