import { Container } from '@/shared/ui';
import { VACANCIES, VacancyCard } from '@/entities/vacancy';
import { VacancyFilter, useVacancyFilter } from '@/features/filter-vacancies';
import styles from './VacancyList.module.css';

interface VacancyListProps {
  id?: string;
}

export function VacancyList({ id = 'open-positions' }: VacancyListProps) {
  const { filter, setFilter, filtered, counts, options } = useVacancyFilter(VACANCIES);

  return (
    <section id={id} className={styles.section} aria-label="Open positions">
      <Container>
        <div className={styles.box}>
          <VacancyFilter value={filter} options={options} counts={counts} onChange={setFilter} />
          <ul className={styles.grid}>
            {filtered.map((vacancy) => (
              <li key={vacancy.id} className={styles.item}>
                <VacancyCard vacancy={vacancy} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
