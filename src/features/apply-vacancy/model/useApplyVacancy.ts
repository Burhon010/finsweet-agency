import { useState, type ChangeEvent, type FormEvent } from 'react';
import { email, hasErrors, phone, required, validate } from '@/shared/lib';
import { SUBMIT_DELAY } from '@/shared/config/constants';
import type { FormErrors, FormStatus } from '@/shared/types/common';

export interface ApplyVacancyValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  motivation: string;
  [key: string]: string;
}

const INITIAL: ApplyVacancyValues = { firstName: '', lastName: '', email: '', phone: '', motivation: '' };

const RULES = {
  firstName: [required('Please enter your first name')],
  lastName: [required('Please enter your last name')],
  email: [required('Please enter your email'), email()],
  phone: [required('Please enter your mobile number'), phone()],
};

type ApplyErrors = FormErrors<ApplyVacancyValues> & { agree?: string };

export function useApplyVacancy() {
  const [values, setValues] = useState<ApplyVacancyValues>(INITIAL);
  const [file, setFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(true);
  const [errors, setErrors] = useState<ApplyErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'success') setStatus('idle');
  };

  const toggleAgree = () => {
    setAgree((prev) => !prev);
    setErrors((prev) => ({ ...prev, agree: undefined }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: ApplyErrors = validate(values, RULES);
    if (!agree) nextErrors.agree = 'Please accept the privacy policy';
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) return;

    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY));
    setStatus('success');
    setValues(INITIAL);
    setFile(null);
  };

  return { values, file, agree, errors, status, handleChange, setFile, toggleAgree, handleSubmit };
}
