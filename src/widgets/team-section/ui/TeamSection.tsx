import { Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import { EMPLOYEES, EmployeeCard } from '@/entities/employee';
import styles from './TeamSection.module.css';

export function TeamSection() {
  const { ref, className } = useScrollAnimation<HTMLUListElement>();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <SectionLabel>Meet our team</SectionLabel>
          <SectionTitle className={styles.title}>Teamwork is the only way we work</SectionTitle>
          <p className={styles.text}>
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
            we up ecstatic unsatiable.
          </p>
        </div>
        <ul ref={ref} className={[styles.grid, className].join(' ')}>
          {EMPLOYEES.map((employee) => (
            <li key={employee.id}>
              <EmployeeCard employee={employee} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
