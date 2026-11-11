import { useState, type ChangeEvent, type FormEvent } from 'react';
import { email, hasErrors, minLength, required, validate } from '@/shared/lib';
import { SUBMIT_DELAY } from '@/shared/config/constants';
import type { FormErrors, FormStatus } from '@/shared/types/common';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

const INITIAL: ContactFormValues = { name: '', email: '', subject: '', message: '' };

const RULES = {
  name: [required('Please enter your name')],
  email: [required('Please enter your email'), email()],
  subject: [required('Please enter a subject')],
  message: [required('Please type your message'), minLength(10)],
};

export function useContactForm(onSuccess?: () => void) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors<ContactFormValues>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'success') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values, RULES);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) return;

    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY));
    setStatus('success');
    setValues(INITIAL);
    onSuccess?.();
  };

  return { values, errors, status, handleChange, handleSubmit };
}
