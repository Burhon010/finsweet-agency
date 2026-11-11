import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import type { FieldVariant } from '../input/Input';
import styles from '../field.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: FieldVariant;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, variant = 'filled', wrapperClassName = '', className = '', id, rows = 4, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;

  return (
    <div className={[styles.field, styles[variant], error ? styles.invalid : '', wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={fieldId} className={variant === 'underline' ? styles.label : 'visually-hidden'}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        className={[styles.control, styles.textarea, className].join(' ')}
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
