import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Badge, Container, SectionTitle } from '@/shared/ui';
import { formatLongDate } from '@/shared/lib';
import styles from './PrivacyContent.module.css';

const UPDATED_AT = '2021-01-27';

const LONG =
  "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeto Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages.";

const SHORT =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeto Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.';

const DISCLOSURES = [
  {
    title: 'Business partners, suppliers and sub-contractors (“Affiliates”)',
    text: "Affiliates may use this information to help provide, understand, and improve our services and Affiliate's own services for the performance of any contract we enter into",
  },
  {
    title: 'Financial Institutions and Auditors',
    text: 'In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.',
  },
  {
    title: 'Advertisers and Advertising Networks',
    text: 'To provide you with select and serve relevant advertisements to you and others, we may share your data with advertisers and advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them with aggregate information about our users (for example, we may inform them that any given number of participants in a specified age group who clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target.',
  },
];

export function PrivacyContent() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <Badge color="peach" size={24} />
          <img src={sectionShape} alt="" width={24} height={24} className={styles.shape} />
          <SectionTitle as="h1" size="lg" className={styles.title}>
            Privacy Policy
          </SectionTitle>
          <p className={styles.updated}>
            Last Updated &nbsp;on <time dateTime={UPDATED_AT}>{formatLongDate(UPDATED_AT)}</time>
          </p>
        </header>

        <div className={styles.box}>
          <article className={styles.article}>
            <h2 className={styles.h2}>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
            <p>{LONG}</p>
            <p>{SHORT}</p>
            <p>{SHORT}</p>
            <p>{LONG}</p>

            <h3 className={styles.h3}>We disclose your information in the following manner:</h3>
            {DISCLOSURES.map((item) => (
              <p key={item.title}>
                {item.title}: {item.text}
              </p>
            ))}
          </article>
        </div>
      </Container>
    </section>
  );
}
