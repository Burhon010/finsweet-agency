import { Link } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import type { Employee } from '../model/types';
import styles from './EmployeeCard.module.css';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src={employee.photo} alt={employee.name} loading="lazy" />
      <div className={styles.overlay}>
        <h3 className={styles.name}>
          <Link to={ROUTES.employee(employee.id)} className={styles.link}>
            {employee.name}
          </Link>
        </h3>
        <p className={styles.role}>{employee.role}</p>
        <ul className={styles.socials}>
          {employee.socials.slice(1).map((social) => (
            <li key={social.network}>
              <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${employee.name} on ${social.network}`}>
                <Icon name={social.network} size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
