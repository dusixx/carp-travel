import { useForm } from 'react-hook-form';
import { validation } from './validation';
import clsx from 'clsx';

export const FeedbackForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const { fullName, email, message } = errors;

  return (
    <form
      autoComplete="off"
      {...props}
      onSubmit={handleSubmit(data => console.log(data))}
    >
      <div className="feedback__field-group">
        <label className="feedback__field">
          <span>Full name</span>
          <input
            className={clsx(
              'feedback__input',
              fullName?.message && 'feedback__input--invalid'
            )}
            placeholder="John Smith"
            {...register('fullName', validation.fullName)}
          />
          <p className="feedback__input-error">
            {fullName?.message && (
              <>
                <span onClick={() => setError('fullName', null)}>&times;</span>
                {fullName.message}
              </>
            )}
          </p>
        </label>

        <label className="feedback__field">
          <span>E-mail</span>
          <input
            className={clsx(
              'feedback__input',
              email?.message && 'feedback__input--invalid'
            )}
            placeholder="johnsmith@email.com"
            {...register('email', validation.email)}
          />
          <p className="feedback__input-error">
            {email?.message && (
              <>
                <span onClick={() => setError('email', null)}>&times;</span>
                {email.message}
              </>
            )}
          </p>
        </label>
      </div>

      <div className="feedback__group">
        <label className="feedback__field">
          <span>Message</span>
          <textarea
            className={clsx(
              'feedback__message',
              message?.message && 'feedback__input--invalid'
            )}
            {...register('message', validation.message)}
          />
          <p className="feedback__input-error">
            {message?.message && (
              <>
                <span onClick={() => setError('message', null)}>&times;</span>
                {message.message}
              </>
            )}
          </p>
        </label>
        <label className="feedback__submit">
          send
          <input type="submit" />
        </label>
      </div>
    </form>
  );
};
