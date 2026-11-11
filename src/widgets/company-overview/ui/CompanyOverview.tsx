import about1 from '@/shared/assets/images/about-1.jpg';
import about2 from '@/shared/assets/images/about-2.jpg';
import about3 from '@/shared/assets/images/about-3.jpg';
import { Button, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import { useScrollAnimation } from '@/shared/lib';
import { STATISTICS, StatisticItem } from '@/entities/statistic';
import styles from './CompanyOverview.module.css';

const PHOTOS = [
  { src: about1, alt: 'Team meeting around a long conference table' },
  { src: about2, alt: 'Designers presenting to colleagues' },
  { src: about3, alt: 'Team lead speaking with the team' },
];

export function CompanyOverview() {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <Container>
        <div ref={ref} className={[styles.top, className].join(' ')}>
          <div>
            <SectionLabel>About us</SectionLabel>
            <SectionTitle className={styles.title}>
              The company leads entire webdesign process from concept to delivery.
            </SectionTitle>
          </div>
          <div className={styles.aside}>
            <SectionTitle as="h3">The Era Of Technology.</SectionTitle>
            <p className={styles.text}>
              Through True Rich Attended does no end it his mother since real had half every him case in packages
              enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
        </div>

        <div className={styles.gallery}>
          {PHOTOS.map((photo) => (
            <div key={photo.src} className={styles.photo}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.stats}>
            {STATISTICS.map((statistic) => (
              <StatisticItem key={statistic.id} statistic={statistic} />
            ))}
          </div>
          <Button to={ROUTES.company} variant="link">
            Read about us
          </Button>
        </div>
      </Container>
    </section>
  );
}
