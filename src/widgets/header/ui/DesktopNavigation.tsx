import { NavLink } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { HEADER_LINKS } from '@/shared/config/navigation';
import { openQuestionModal } from '@/shared/lib';
import styles from './DesktopNavigation.module.css';

interface DesktopNavigationProps {
  className?: string;
}

export function DesktopNavigation({ className = '' }: DesktopNavigationProps) {
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <nav aria-label="Main">
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
      <button type="button" className={styles.clone} onClick={openQuestionModal}>
        Clone project
        <Icon name="arrow-right" width={20} height={12} className={styles.arrow} />
      </button>
    </div>
  );
}
