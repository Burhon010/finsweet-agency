import avatar1 from '@/shared/assets/images/avatar-1.jpg';
import avatar2 from '@/shared/assets/images/avatar-2.jpg';
import avatar3 from '@/shared/assets/images/avatar-3.jpg';
import { Avatar, Badge, Container, SectionTitle } from '@/shared/ui';
import { TestimonialsSlider } from './TestimonialsSlider';
import styles from './TestimonialsSection.module.css';

const REVIEWERS = [avatar1, avatar2, avatar3];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Badge />
          <SectionTitle className={styles.title}>Our customers love what we do</SectionTitle>
          <p className={styles.lead}>Transform your idea into reality with finsweet</p>
          <p className={styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
          <div className={styles.reviews}>
            <div className={styles.avatars}>
              {REVIEWERS.map((src, index) => (
                <Avatar key={src} src={src} alt={`Customer ${index + 1}`} size={48} />
              ))}
            </div>
            <p className={styles.count}>
              <strong>30</strong>+ Customer Reviews
            </p>
          </div>
        </div>
        <TestimonialsSlider />
      </Container>
    </section>
  );
}
