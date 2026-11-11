import { Button, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { openQuestionModal, useDocumentTitle } from '@/shared/lib';
import { SERVICES } from '@/entities/service';
import { ServicesNavigation } from '@/features/navigate-services';
import { ProcessSection } from '@/widgets/process-section';
import { NewsletterSection } from '@/widgets/newsletter';
import styles from './ServicesPage.module.css';

const ROW_BACKGROUNDS = ['white', 'cyan', 'white', 'lavender', 'white'] as const;

export function ServicesPage() {
  useDocumentTitle('Services');

  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <div className={[styles.heroContent, 'fade-up'].join(' ')}>
            <SectionLabel>Our Services</SectionLabel>
            <SectionTitle as="h1" size="lg" className={styles.heroTitle}>
              We Build Software Solutionthat Solve Clients Business Challenges
            </SectionTitle>
            <p className={styles.heroText}>
              Through True Rich Attended does no end it his mother since favourable real had half every him case in
              packages enquire we up ecstatic.
            </p>
            <Button onClick={openQuestionModal} className={styles.heroButton}>
              Request A Quote
            </Button>
          </div>
          <ServicesNavigation services={SERVICES} />
        </Container>
      </section>

      <ProcessSection background="lavender" />

      {SERVICES.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={[styles.row, styles[ROW_BACKGROUNDS[index % ROW_BACKGROUNDS.length]], index % 2 ? styles.reversed : ''].join(' ')}
        >
          <Container className={styles.rowInner}>
            <div className={styles.rowContent}>
              <p className={styles.rowLabel}>{service.name}</p>
              <SectionTitle as="h2" size="md" className={styles.rowTitle}>
                {service.heading}
              </SectionTitle>
              <p className={styles.rowText}>{service.description}</p>
            </div>
            <div className={styles.rowMedia}>
              <img src={service.image} alt={service.name} loading="lazy" />
            </div>
          </Container>
        </section>
      ))}

      <NewsletterSection flush />
    </>
  );
}
