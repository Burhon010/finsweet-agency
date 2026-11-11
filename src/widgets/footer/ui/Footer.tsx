import { Link } from 'react-router-dom';
import { Container, Icon } from '@/shared/ui';
import { CONTACTS, COPYRIGHT } from '@/shared/config/constants';
import { ROUTES, SOCIAL_LINKS } from '@/shared/config/navigation';
import footerShape from '@/shared/assets/icons/shape-footer.svg';
import { FooterNavigation } from './FooterNavigation';
import { SocialLinks } from './SocialLinks';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.info}>
          <img src={footerShape} alt="" width={36} height={34} className={styles.shape} />
          <p className={styles.title}>
            Let&apos;s make
            <br />
            something special
          </p>
          <p className={styles.talk}>
            Let&apos;s talk!{' '}
            <span role="img" aria-label="call me">
              🤙
            </span>
          </p>
          <a href={CONTACTS.phoneHref} className={styles.contact}>
            {CONTACTS.phone}
          </a>
          <a href={`mailto:${CONTACTS.email}`} className={styles.contact}>
            {CONTACTS.email}
          </a>
          <address className={styles.address}>
            {CONTACTS.address[0]}
            <br />
            {CONTACTS.address[1]}
          </address>
        </div>

        <div className={styles.side}>
          <FooterNavigation />
          <Link to={ROUTES.contacts} className={styles.cta}>
            <span className={styles.ctaShape} aria-hidden="true" />
            Contact Us
            <Icon name="arrow-right" width={20} height={12} className={styles.ctaArrow} />
          </Link>
        </div>
      </Container>

      <div className={styles.bottom}>
        <Container className={styles.bottomInner}>
          <div className={styles.brand}>
            <Link to={ROUTES.home} className={styles.logo} aria-label="Finsweet — home">
              <span aria-hidden="true">{'{'}</span>Finsweet
            </Link>
            <p className={styles.copyright}>{COPYRIGHT}</p>
          </div>
          <SocialLinks links={SOCIAL_LINKS} />
        </Container>
      </div>
    </footer>
  );
}
