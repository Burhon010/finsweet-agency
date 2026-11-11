import cornerShape from '@/shared/assets/icons/shape-corner.svg';
import { Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import { SubscribeForm } from '@/features/subscribe-newsletter';
import styles from './NewsletterSection.module.css';

interface NewsletterSectionProps {
  flush?: boolean;
}

export function NewsletterSection({ flush = false }: NewsletterSectionProps) {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={[styles.section, flush ? styles.flush : ''].join(' ')} aria-labelledby="newsletter-title">
      <Container>
        <div ref={ref} className={[styles.box, className].join(' ')}>
          <img src={cornerShape} alt="" className={styles.shape} />
          <div className={styles.content}>
            <SectionLabel light>Newsletter</SectionLabel>
            <SectionTitle as="h3" light id="newsletter-title" className={styles.title}>
              Subscribe our News Letter to get Latest Updates.
            </SectionTitle>
          </div>
          <SubscribeForm />
        </div>
      </Container>
    </section>
  );
}
