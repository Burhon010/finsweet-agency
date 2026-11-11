import { useSubscribe } from '../model/useSubscribe';
import styles from './SubscribeForm.module.css';

export function SubscribeForm() {
  const { email, error, status, handleChange, handleSubmit } = useSubscribe();
  const isActive = email.length > 0 || status === 'submitting';

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={[styles.row, isActive ? styles.active : ''].join(' ')}>
        <label htmlFor="newsletter-email" className="visually-hidden">
          Email address
        </label>
        <input
          id="newsletter-email"
          className={styles.input}
          type="email"
          placeholder="Paresh@Pixeto.com"
          autoComplete="email"
          value={email}
          onChange={(event) => handleChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'newsletter-error' : undefined}
        />
        <button type="submit" className={styles.button} disabled={status === 'submitting'} tabIndex={isActive ? 0 : -1}>
          {status === 'submitting' ? '…' : 'Subscribe'}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className={styles.message} role="alert">
          {error}
        </p>
      )}
      {status === 'success' && (
        <p className={styles.message} role="status">
          Thanks! You are subscribed to our updates.
        </p>
      )}
    </form>
  );
}
