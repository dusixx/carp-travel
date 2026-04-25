'use client';

import { Placeholder, validation } from '@/common';
import { Checkbox, FormField } from '@/components';
import { useForm } from '@/hooks';
import { toast } from 'react-toastify';

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
    console.debug(data);
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
            placeholder={Placeholder.FullName}
            onClearError={() => setError('fullName', null)}
            {...regProps}
          />
          <FormField
            name="email"
            caption="E-mail"
            placeholder={Placeholder.Email}
            onClearError={() => setError('email', null)}
            {...regProps}
          />
          <FormField
            name="position"
            caption="Position"
            placeholder={Placeholder.Position}
            onClearError={() => setError('position', null)}
            {...regProps}
          />
          <FormField
            name="phone"
            caption="Phone"
            placeholder={Placeholder.Phone}
            inputWrapper={true}
            onClearError={() => setError('phone', null)}
            {...regProps}
          />
        </div>

        <FormField
          multiline={true}
          name="message"
          caption="Message"
          placeholder={Placeholder.Message}
          {...regProps}
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
