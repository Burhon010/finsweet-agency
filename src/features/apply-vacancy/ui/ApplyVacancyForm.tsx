import { Button, FileUpload, Icon, Input, Textarea } from '@/shared/ui';
import { useApplyVacancy } from '../model/useApplyVacancy';
import styles from './ApplyVacancyForm.module.css';

interface ApplyVacancyFormProps {
  companyName?: string;
}

export function ApplyVacancyForm({ companyName = 'Ether' }: ApplyVacancyFormProps) {
  const { values, file, agree, errors, status, handleChange, setFile, toggleAgree, handleSubmit } = useApplyVacancy();

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <Input label="First Name" name="firstName" placeholder="First Name" autoComplete="given-name" value={values.firstName} onChange={handleChange} error={errors.firstName} />
        <Input label="Last Name" name="lastName" placeholder="Last Name" autoComplete="family-name" value={values.lastName} onChange={handleChange} error={errors.lastName} />
        <Input label="Email Id" name="email" type="email" placeholder="Email Id" autoComplete="email" value={values.email} onChange={handleChange} error={errors.email} />
        <Input label="Mobile No" name="phone" type="tel" placeholder="Mobile No" autoComplete="tel" value={values.phone} onChange={handleChange} error={errors.phone} />
        <Textarea
          label={`Why do you think you are good fit for ${companyName}?`}
          name="motivation"
          placeholder={`Why do you think you are good fit for ${companyName}?`}
          value={values.motivation}
          onChange={handleChange}
          wrapperClassName={styles.wide}
        />
        <div className={styles.wide}>
          <FileUpload value={file} onChange={setFile} />
        </div>
      </div>

      <label className={styles.agree}>
        <input type="checkbox" className="visually-hidden" checked={agree} onChange={toggleAgree} />
        <span className={[styles.checkbox, agree ? styles.checked : ''].join(' ')} aria-hidden="true">
          {agree && <Icon name="check" size={16} />}
        </span>
        <span className={styles.agreeText}>
          I agree to accept the privacy policy, &nbsp;We will add your contact details provided in this form to our system
          for contacting you regarding your request.
        </span>
      </label>
      {errors.agree && (
        <p className={styles.error} role="alert">
          {errors.agree}
        </p>
      )}

      <Button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
      </Button>
      {status === 'success' && (
        <p className={styles.success} role="status">
          Your application has been sent. We will contact you soon!
        </p>
      )}
    </form>
  );
}
