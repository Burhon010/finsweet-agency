import sectionShape from '@/shared/assets/icons/shape-section.svg';
import careersTexture from '@/shared/assets/images/about-1.jpg';
import { Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import styles from './CareerSection.module.css';

const BENEFITS = [
  { emoji: '😷', title: 'Covid-19 insurance' },
  { emoji: '⏱️', title: 'Flexible working time' },
  { emoji: '🏡', title: 'Work from home' },
  { emoji: '🎉', title: 'Annual retreats' },
  { emoji: '💰', title: 'Learning stipend' },
  { emoji: '💪', title: 'Gym membership' },
];

const BENEFIT_TEXT = 'Through True Rich Attended does no end it his mother since real had halfdoes no end it';

interface CareerSectionProps {
  positionsAnchor?: string;
}

export function CareerSection({ positionsAnchor = 'open-positions' }: CareerSectionProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroInner}>
        <img src={sectionShape} alt="" width={24} height={24} className={styles.shape} />
        <SectionLabel align="center">Career at Finsweet</SectionLabel>
        <SectionTitle as="h1" size="lg" align="center" className={styles.title}>
          We hired people who are Always Passionate about what they do
        </SectionTitle>
        <p className={styles.text}>
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
          we up ecstatic unsatiable saw .
        </p>
        <p className={styles.word} style={{ backgroundImage: `url(${careersTexture})` }} aria-hidden="true">
          Careers
        </p>
        <a href={`#${positionsAnchor}`} className={styles.positions}>
          See Our open positions
          <span className={styles.pointer} aria-hidden="true">
            👇
          </span>
        </a>
      </Container>
    </section>
  );
}

export function CareerCulture() {
  const { ref, className } = useScrollAnimation<HTMLUListElement>();

  return (
    <section className={styles.culture}>
      <Container>
        <SectionLabel>Our work &amp; culture</SectionLabel>
        <SectionTitle as="h2" size="md" className={styles.cultureTitle}>
          Come and join a team of highly skilled professionals.
        </SectionTitle>
        <p className={styles.cultureText}>
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
          we up ecstatic unsatiable saw his giving Remain expense you position concluded.
        </p>
        <ul ref={ref} className={[styles.benefits, className].join(' ')}>
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className={styles.benefit}>
              <span className={styles.emoji} aria-hidden="true">
                {benefit.emoji}
              </span>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitText}>{BENEFIT_TEXT}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
