import { useState, type FormEvent } from 'react';
import { email as emailRule, required } from '@/shared/lib';
import { SUBMIT_DELAY } from '@/shared/config/constants';
import type { FormStatus } from '@/shared/types/common';

export function useSubscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (value: string) => {
    setEmail(value);
    if (error) setError(undefined);
    if (status === 'success') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const message = required('Please enter your email')(email) ?? emailRule()(email);
    if (message) {
      setError(message);
      return;
    }
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY));
    setStatus('success');
    setEmail('');
  };

  return { email, error, status, handleChange, handleSubmit };
}
