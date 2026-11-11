import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import type { Vacancy } from '../model/types';
import { VacancyTags } from './VacancyTags';
import styles from './VacancyCard.module.css';

interface VacancyCardProps {
  vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{vacancy.title}</h3>
      <VacancyTags vacancy={vacancy} />
      <Button to={ROUTES.vacancy(vacancy.id)} variant="link" className={styles.apply}>
        Apply Now
      </Button>
    </article>
  );
}
