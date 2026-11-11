import about1 from '@/shared/assets/images/about-1.jpg';
import about2 from '@/shared/assets/images/about-2.jpg';
import about3 from '@/shared/assets/images/about-3.jpg';
import officeImage from '@/shared/assets/images/office.jpg';
import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Badge, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useDocumentTitle, useScrollAnimation } from '@/shared/lib';
import { STATISTICS, StatisticItem } from '@/entities/statistic';
import { PartnersSection } from '@/widgets/partners';
import { ValuesSection } from '@/widgets/values-section';
import { TeamSection } from '@/widgets/team-section';
import { NewsletterSection } from '@/widgets/newsletter';
import styles from './CompanyPage.module.css';

const GALLERY = [
  { src: about1, alt: 'Team meeting around a long conference table' },
  { src: about2, alt: 'Designers presenting to colleagues' },
  { src: about3, alt: 'Team lead speaking with the team' },
];

export function CompanyPage() {
  useDocumentTitle('Company');
  const story = useScrollAnimation<HTMLDivElement>();
  const vision = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <img src={sectionShape} alt="" width={30} height={30} className={styles.shape} />
          <div className={[styles.heroHead, 'fade-up'].join(' ')}>
            <Badge color="peach" size={24} />
            <SectionLabel className={styles.label}>Company</SectionLabel>
            <SectionTitle as="h1" size="lg" className={styles.title}>
              Award-winning Company seen and used by millions around the world.
            </SectionTitle>
            <p className={styles.lead}>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The Maker is a decentralized.
            </p>
          </div>

          <div className={styles.gallery}>
            <span className={styles.galleryBar} aria-hidden="true" />
            {GALLERY.map((photo) => (
              <div key={photo.src} className={styles.photo}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>

          <div ref={story.ref} className={[styles.story, story.className].join(' ')}>
            <div className={styles.storyText}>
              <Badge />
              <p className={styles.storyLabel}>
                Our Story{' '}
                <span role="img" aria-label="pointing down">
                  👇
                </span>
              </p>
              <SectionTitle as="h2" size="md" className={styles.storyTitle}>
                From Startups to Titans of Industry
              </SectionTitle>
              <p className={styles.storyParagraph}>
                Through True Rich Attended does no end it his mother since favourable real had half every him case in
                packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived
                do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter
                thus as out no passed forming middleton exercise up
              </p>
            </div>
            <div className={styles.stats}>
              {STATISTICS.map((statistic) => (
                <StatisticItem key={statistic.id} statistic={statistic} size="lg" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className={styles.partners}>
        <PartnersSection variant="light" />
      </div>

      <ValuesSection />

      <section className={styles.vision}>
        <Container>
          <div ref={vision.ref} className={[styles.visionText, vision.className].join(' ')}>
            <SectionLabel>Our vision</SectionLabel>
            <SectionTitle as="h2" size="md" className={styles.visionTitle}>
              We want to get local identification in every corner of the world in this era of global citizenship.
            </SectionTitle>
            <p className={styles.visionParagraph}>
              Through True Rich Attended does no end it his mother since real had half every him case in packages
              enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className={styles.visionMedia}>
            <img src={officeImage} alt="Finsweet office with team members" loading="lazy" />
          </div>
        </Container>
      </section>

      <TeamSection />
      <NewsletterSection flush />
    </>
  );
}
