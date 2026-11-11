import type { ProcessStepModel } from '../model/types';
import styles from './ProcessStep.module.css';

interface ProcessStepProps {
  step: ProcessStepModel;
  accent?: 'top' | 'bottom';
}

export function ProcessStep({ step, accent }: ProcessStepProps) {
  return (
    <article className={[styles.step, accent ? styles[accent] : ''].join(' ')}>
      <span className={styles.icon}>
        <img src={step.icon} alt="" width={24} height={24} loading="lazy" />
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.text}>{step.description}</p>
      </div>
      <span className={styles.number} aria-hidden="true">
        {step.number}
      </span>
    </article>
  );
}
