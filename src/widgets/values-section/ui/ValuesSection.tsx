import { Badge, Container, Icon, SectionLabel, SectionTitle, type IconName } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import styles from './ValuesSection.module.css';

const VALUES: { title: string; text: string; icon: IconName }[] = [
  { title: 'On Time Delivery', text: 'Through True Rich Attended does no end it his mother since real had half every him.', icon: 'rocket' },
  { title: 'Best Quality', text: 'Through True Rich Attended does no end it his mother since real had half every him.', icon: 'atom' },
  { title: 'Support Assist', text: 'Through True Rich Attended does no end it his mother since real had half every him.', icon: 'support' },
];

export function ValuesSection() {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div ref={ref} className={[styles.content, className].join(' ')}>
          <SectionLabel>Our expertise</SectionLabel>
          <SectionTitle className={styles.title}>
            We want to get local identification in every corner of the world in this era of global citizenship
          </SectionTitle>
          <p className={styles.text}>
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire
            we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className={styles.list}>
          <Badge color="primary" className={styles.badge} />
          {VALUES.map((value) => (
            <article key={value.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={value.icon} size={24} />
              </span>
              <div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardText}>{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
