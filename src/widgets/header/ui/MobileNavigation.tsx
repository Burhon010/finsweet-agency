import { NavLink } from 'react-router-dom';
import { MobileMenu } from '@/features/mobile-menu';
import { Button } from '@/shared/ui';
import { HEADER_LINKS } from '@/shared/config/navigation';
import { CONTACTS } from '@/shared/config/constants';
import { openQuestionModal } from '@/shared/lib';
import styles from './MobileNavigation.module.css';

export function MobileNavigation() {
  return (
    <MobileMenu
      footer={
        <div className={styles.footer}>
          <Button onClick={openQuestionModal} fullWidth>
            Clone project
          </Button>
          <a href={CONTACTS.phoneHref} className={styles.contact}>
            {CONTACTS.phone}
          </a>
          <a href={`mailto:${CONTACTS.email}`} className={styles.contact}>
            {CONTACTS.email}
          </a>
        </div>
      }
    >
      <nav aria-label="Mobile">
        <ul className={styles.list}>
          {HEADER_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </MobileMenu>
  );
}
