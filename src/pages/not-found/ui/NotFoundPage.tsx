import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Button, Container, SectionLabel } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib';
import { ROUTES } from '@/shared/config/navigation';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  useDocumentTitle('Page not found');

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <img src={sectionShape} alt="" width={48} height={48} className={styles.shape} />
        <SectionLabel align="center">Error 404</SectionLabel>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>Oops! This page got lost in the process</h1>
        <p className={styles.text}>
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Button to={ROUTES.home} className={styles.button}>
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
