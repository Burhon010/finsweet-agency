import type { FormErrors } from '../../types/common';

export type Rule = (value: string) => string | undefined;

export const required =
  (message = 'This field is required'): Rule =>
  (value) =>
    value.trim() ? undefined : message;

export const email =
  (message = 'Enter a valid email'): Rule =>
  (value) =>
    !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? undefined : message;

export const phone =
  (message = 'Enter a valid phone number'): Rule =>
  (value) =>
    !value.trim() || /^[+\d][\d\s()-]{6,}$/.test(value.trim()) ? undefined : message;

export const minLength =
  (length: number, message?: string): Rule =>
  (value) =>
    !value.trim() || value.trim().length >= length
      ? undefined
      : (message ?? `Must be at least ${length} characters`);

export function validate<T extends Record<string, string>>(
  values: T,
  rules: Partial<Record<keyof T, Rule[]>>,
): FormErrors<T> {
  const errors: FormErrors<T> = {};
  (Object.keys(rules) as (keyof T)[]).forEach((key) => {
    for (const rule of rules[key] ?? []) {
      const error = rule(values[key] ?? '');
      if (error) {
        errors[key] = error;
        break;
      }
    }
  });
  return errors;
}

export const hasErrors = <T,>(errors: FormErrors<T>) => Object.keys(errors).length > 0;
