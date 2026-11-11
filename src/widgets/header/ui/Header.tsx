import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={[styles.header, isScrolled ? styles.scrolled : ''].join(' ')}>
      <Container className={styles.inner}>
        <Link to={ROUTES.home} className={styles.logo} aria-label="Finsweet — home">
          <span aria-hidden="true">{'{'}</span>Finsweet
        </Link>
        <DesktopNavigation className={styles.desktop} />
        <div className={styles.mobile}>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
