import { Link } from 'react-router-dom';
import {
  FOOTER_MAIN_LINKS,
  FOOTER_RESOURCE_LINKS,
  FOOTER_SERVICE_LINKS,
} from '@/shared/config/navigation';
import styles from './FooterNavigation.module.css';

export function FooterNavigation() {
  return (
    <nav className={styles.nav} aria-label="Footer">
      <ul className={styles.main}>
        {FOOTER_MAIN_LINKS.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className={styles.mainLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.column}>
        <p className={styles.heading}>Service</p>
        <ul className={styles.list}>
          {FOOTER_SERVICE_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.column}>
        <p className={styles.heading}>Resourses</p>
        <ul className={styles.list}>
          {FOOTER_RESOURCE_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
