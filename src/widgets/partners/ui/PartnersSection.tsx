import type { ReactElement } from 'react';
import { Container } from '@/shared/ui';
import styles from './PartnersSection.module.css';

const MARKS: ReactElement[] = [
  <svg key="1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 2h4v6.5L18.6 4l2.8 2.8L16.9 11H23v4h-6.1l4.5 4.2-2.8 2.8L14 17.5V22h-4v-4.5L5.4 22l-2.8-2.8L7.1 15H1v-4h6.1L2.6 6.8 5.4 4 10 8.5V2Z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 2h8a10 10 0 0 1 0 20H3V2Zm5 4v12h3a6 6 0 0 0 0-12H8Z" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M6 16.5 16.5 6M8.5 19 19 8.5" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c4.6 0 8.4 3.1 9.6 7.3-1.2.5-2.4.7-3.6.7-2.7 0-4-1.5-6-1.5S8.7 11 6 11c-1.2 0-2.4-.2-3.6-.7C3.6 6.1 7.4 3 12 3Zm-9.9 9.9c1.3.4 2.6.6 3.9.6 2.7 0 4-1.5 6-1.5s3.3 1.5 6 1.5c1.3 0 2.6-.2 3.9-.6l-.2 1.6c-1.2.4-2.4.5-3.7.5-2.7 0-4-1.5-6-1.5s-3.3 1.5-6 1.5c-1.3 0-2.5-.1-3.7-.5l-.2-1.6Zm1.6 4.4c.8.1 1.5.2 2.3.2 2.7 0 4-1.5 6-1.5s3.3 1.5 6 1.5c.8 0 1.5-.1 2.3-.2A10 10 0 0 1 12 21a10 10 0 0 1-8.3-3.7Z" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 2h20v20H8.5A6.5 6.5 0 0 1 2 15.5V2Zm4 4v9.5A2.5 2.5 0 0 0 8.5 18H18V6H6Zm6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
  </svg>,
];

interface PartnersSectionProps {
  variant?: 'dark' | 'light';
}

export function PartnersSection({ variant = 'light' }: PartnersSectionProps) {
  return (
    <section className={[styles.section, styles[variant]].join(' ')} aria-label="Our clients">
      <Container>
        <div className={styles.inner}>
          {variant === 'dark' && (
            <div className={styles.heading}>
              <p className={styles.caption}>Our Clients</p>
              <p className={styles.title}>We&apos;ve Worked with</p>
            </div>
          )}
          <ul className={styles.logos}>
            {MARKS.map((mark, index) => (
              <li key={index} className={styles.logo}>
                <span className={styles.mark}>{mark}</span>
                <span className={styles.word}>
                  logoipsum{index < 2 && <sup>®</sup>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
