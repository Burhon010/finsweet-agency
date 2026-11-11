import { Button, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { openQuestionModal, useScrollAnimation } from '@/shared/lib';
import { SERVICE_HIGHLIGHTS, ServiceCard } from '@/entities/service';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle className={styles.title}>
            We build software solutions that solve client&apos;s business challenges
          </SectionTitle>
          <Button onClick={openQuestionModal} className={styles.button}>
            Start a Project
          </Button>
        </div>
        <div ref={ref} className={[styles.grid, className].join(' ')}>
          {SERVICE_HIGHLIGHTS.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
