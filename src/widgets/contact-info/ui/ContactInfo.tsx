import { Badge, Container, Icon, SectionLabel, SectionTitle } from '@/shared/ui';
import { CONTACTS } from '@/shared/config/constants';
import { SOCIAL_LINKS } from '@/shared/config/navigation';
import { ContactForm } from '@/features/contact-form';
import styles from './ContactInfo.module.css';

export function ContactInfo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <Badge color="peach" size={24} />
            <SectionLabel className={styles.label}>Contact us</SectionLabel>
            <SectionTitle as="h1" size="lg" className={styles.title}>
              Have a Question ?
              <br />
              Let’s Get in Touch with us{' '}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </SectionTitle>
            <p className={styles.text}>Fill up the Form and our team will get back to within 24 hrs</p>
            <ContactForm />
          </div>

          <div className={styles.cardWrap}>
            <span className={styles.topShapes} aria-hidden="true" />
            <span className={styles.sideBar} aria-hidden="true" />
            <div className={styles.card}>
              <dl className={styles.list}>
                <div className={styles.group}>
                  <dt className={styles.term}>Location</dt>
                  <dd className={styles.value}>
                    {CONTACTS.address[0]}
                    <br />
                    {CONTACTS.address[1]}
                  </dd>
                </div>
                <div className={styles.group}>
                  <dt className={styles.term}>Working Hour</dt>
                  <dd className={styles.value}>
                    {CONTACTS.workingDays}
                    <br />
                    {CONTACTS.workingHours}
                    <span className={styles.note}>{CONTACTS.supportNote}</span>
                  </dd>
                </div>
                <div className={styles.group}>
                  <dt className={styles.term}>Contact Us</dt>
                  <dd className={styles.value}>
                    <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                    <a href={`mailto:${CONTACTS.supportEmail}`} className={styles.note}>
                      {CONTACTS.supportEmail}
                    </a>
                  </dd>
                </div>
              </dl>
              <ul className={styles.socials}>
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.network}>
                    <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.network}>
                      <Icon name={link.network} size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            title="Finsweet office on the map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACTS.mapQuery)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
