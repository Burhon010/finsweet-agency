import { Button, Input, Textarea } from '@/shared/ui';
import { useContactForm } from '../model/useContactForm';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <Input variant="underline" label="Name" name="name" placeholder="Paresh Srichandan" autoComplete="name" value={values.name} onChange={handleChange} error={errors.name} />
        <Input variant="underline" label="E-mail" name="email" type="email" placeholder="Paresh@pixeto.com" autoComplete="email" value={values.email} onChange={handleChange} error={errors.email} />
        <Input variant="underline" label="Subject" name="subject" placeholder="For web design work Enquire" value={values.subject} onChange={handleChange} error={errors.subject} />
        <Textarea variant="underline" label="Message" name="message" placeholder="Type your Message" rows={2} value={values.message} onChange={handleChange} error={errors.message} />
      </div>
      <Button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
      {status === 'success' && (
        <p className={styles.success} role="status">
          Thank you! Our team will get back to you within 24 hrs.
        </p>
      )}
    </form>
  );
}
