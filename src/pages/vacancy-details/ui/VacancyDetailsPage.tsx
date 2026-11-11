import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Button, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib';
import { getVacancyById, type Vacancy } from '@/entities/vacancy';
import { ApplyVacancyForm } from '@/features/apply-vacancy';
import { NewsletterSection } from '@/widgets/newsletter';
import styles from './VacancyDetailsPage.module.css';

type TabKey = 'details' | 'requirements' | 'responsibilities';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'details', label: 'Details' },
  { key: 'requirements', label: 'Requirements' },
  { key: 'responsibilities', label: 'Responsibilities' },
];

const APPLY_ID = 'apply';

export function VacancyDetailsPage() {
  const { id = '' } = useParams();
  const vacancy = getVacancyById(id);
  useDocumentTitle(vacancy?.title ?? 'Vacancy');

  if (!vacancy) return <Navigate to="/404" replace />;
  return <VacancyDetails key={vacancy.id} vacancy={vacancy} />;
}

function VacancyDetails({ vacancy }: { vacancy: Vacancy }) {
  const [tab, setTab] = useState<TabKey>('details');
  const items = vacancy[tab];
  const scrollToForm = () => document.getElementById(APPLY_ID)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className={styles.hero}>
        <Container size="narrow" className={styles.heroInner}>
          <div className={[styles.heroContent, 'fade-up'].join(' ')}>
            <SectionLabel>Career at Ether</SectionLabel>
            <SectionTitle as="h1" size="lg" className={styles.title}>
              {vacancy.title}
            </SectionTitle>
            <p className={styles.summary}>{vacancy.summary}</p>
            <Button onClick={scrollToForm} className={styles.apply}>
              Apply Now
            </Button>
          </div>
          <aside className={styles.card} aria-label="Job description">
            <img src={sectionShape} alt="" width={24} height={24} className={styles.shape} />
            <h2 className={styles.cardTitle}>Job Description</h2>
            <ul className={styles.cardList}>
              <li>
                {vacancy.remote ? 'Remote, India' : vacancy.location} , {vacancy.experience}
              </li>
              <li>Department: {vacancy.department}</li>
              <li>
                {vacancy.employment} {vacancy.positions} Position Available.
              </li>
            </ul>
          </aside>
        </Container>
      </section>

      <section className={styles.tabsSection}>
        <Container>
          <div className={styles.tabsBox}>
            <div className={styles.tabs} role="tablist" aria-label="Vacancy information">
              {TABS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  id={`tab-${item.key}`}
                  aria-selected={tab === item.key}
                  aria-controls="vacancy-panel"
                  className={[styles.tab, tab === item.key ? styles.tabActive : ''].join(' ')}
                  onClick={() => setTab(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div id="vacancy-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className={styles.panel}>
              <ul key={tab} className={styles.bullets}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id={APPLY_ID} className={styles.applySection}>
        <Container>
          <SectionTitle as="h2" size="md">
            Apply Now
          </SectionTitle>
          <div className={styles.form}>
            <ApplyVacancyForm />
          </div>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}
