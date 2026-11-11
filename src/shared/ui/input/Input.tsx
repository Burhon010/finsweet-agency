import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import styles from '../field.module.css';

export type FieldVariant = 'underline' | 'filled' | 'plain';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: FieldVariant;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, variant = 'filled', wrapperClassName = '', className = '', id, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;

  return (
    <div className={[styles.field, styles[variant], error ? styles.invalid : '', wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={inputId} className={variant === 'underline' ? styles.label : 'visually-hidden'}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={[styles.control, className].join(' ')}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
});
