import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import { PROCESS_STEPS, ProcessStep } from '@/entities/process-step';
import styles from './ProcessSection.module.css';

interface ProcessSectionProps {
  background?: 'white' | 'lavender';
}

export function ProcessSection({ background = 'white' }: ProcessSectionProps) {
  const { ref, className } = useScrollAnimation<HTMLOListElement>();
  const lastIndex = PROCESS_STEPS.length - 1;

  return (
    <section className={[styles.section, styles[background]].join(' ')}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <SectionLabel>Our Process</SectionLabel>
            <SectionTitle className={styles.title}>The process we are working With Our client Worldwide</SectionTitle>
            <p className={styles.text}>
              Through True Rich Attended does no end it his mother since real had half every him case in packages
              enquire we up ecstatic unsatiable.
            </p>
          </div>
          <img src={sectionShape} alt="" width={27} height={29} className={styles.shape} />
        </div>

        <ol ref={ref} className={[styles.grid, className].join(' ')}>
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.id} className={styles.item}>
              <ProcessStep step={step} accent={index === 0 ? 'bottom' : index === lastIndex ? 'top' : undefined} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
