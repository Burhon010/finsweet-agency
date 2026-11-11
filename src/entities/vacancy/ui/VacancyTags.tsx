import type { Vacancy } from '../model/types';
import styles from './VacancyTags.module.css';

interface VacancyTagsProps {
  vacancy: Pick<Vacancy, 'location' | 'employment' | 'salary' | 'extra'>;
}

export function VacancyTags({ vacancy }: VacancyTagsProps) {
  return (
    <ul className={styles.tags}>
      <li>
        <span>{vacancy.location}</span>
        <span>{vacancy.employment}</span>
      </li>
      <li>
        <span>{vacancy.salary}</span>
        <span>{vacancy.extra}</span>
      </li>
    </ul>
  );
}
