import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { useBodyLock } from '@/shared/lib';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  children: ReactNode;
  footer?: ReactNode;
}

export function MobileMenu({ children, footer }: MobileMenuProps) {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  useBodyLock(isOpen);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Icon name="menu" size={28} />
      </button>
      <div
        className={[styles.backdrop, isOpen ? styles.visible : ''].join(' ')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={[styles.panel, isOpen ? styles.open : ''].join(' ')}
        aria-hidden={!isOpen}
      >
        <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Close menu">
          <Icon name="close" size={24} />
        </button>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </aside>
    </>
  );
}
