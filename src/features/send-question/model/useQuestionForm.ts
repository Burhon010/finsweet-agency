import { useState, type ChangeEvent, type FormEvent } from 'react';
import { email, hasErrors, required, validate } from '@/shared/lib';
import { SUBMIT_DELAY } from '@/shared/config/constants';
import type { FormErrors, FormStatus } from '@/shared/types/common';

export interface QuestionFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

const INITIAL: QuestionFormValues = { name: '', email: '', subject: '', message: '' };

const RULES = {
  name: [required('Please enter your name')],
  email: [required('Please enter your email'), email()],
  message: [required('Please type your question')],
};

export function useQuestionForm() {
  const [values, setValues] = useState<QuestionFormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors<QuestionFormValues>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
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
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, handleChange, handleSubmit, reset };
}
