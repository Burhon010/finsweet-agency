import heroImage from '@/shared/assets/images/hero.jpg';
import { Badge, Button, Container, SectionTitle } from '@/shared/ui';
import { openQuestionModal } from '@/shared/lib';
import styles from './HomeHero.module.css';

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={[styles.content, 'fade-up'].join(' ')}>
          <Badge color="muted" size={24} />
          <SectionTitle as="h1" light className={styles.title}>
            Transform Your Idea Into Reality with Finsweet
          </SectionTitle>
          <p className={styles.text}>
            The entire Finsweet team knows what&apos;s good with Webflow and you can too with 1 week and a good attitude.
          </p>
          <Button onClick={openQuestionModal} className={styles.button}>
            Request Quote
          </Button>
        </div>
        <div className={styles.media}>
          <img
            src={heroImage}
            alt="Finsweet team discussing a project in the office"
            className={styles.image}
            width={523}
            height={632}
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}
