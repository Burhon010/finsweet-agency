import { Navigate, useParams } from 'react-router-dom';
import sectionShape from '@/shared/assets/icons/shape-section.svg';
import officeImage from '@/shared/assets/images/office.jpg';
import { Badge, Container, SectionTitle } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib';
import { BlogAuthor, getPostById, type ArticleBlock } from '@/entities/blog-post';
import { NewsletterSection } from '@/widgets/newsletter';
import styles from './BlogDetailsPage.module.css';

const LEAD =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients';

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return block.level === 2 ? (
        <h2 key={index} className={styles.h2}>
          {block.text}
        </h2>
      ) : (
        <h3 key={index} className={styles.h3}>
          {block.text}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className={styles.steps}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p key={index}>{block.text}</p>;
  }
}

export function BlogDetailsPage() {
  const { id = '' } = useParams();
  const post = getPostById(id);
  useDocumentTitle(post?.title ?? 'Blog');

  if (!post) return <Navigate to="/404" replace />;

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <header className={[styles.header, 'fade-up'].join(' ')}>
            <Badge color="peach" size={24} />
            <img src={sectionShape} alt="" width={24} height={24} className={styles.shape} />
            <SectionTitle as="h1" size="lg" className={styles.title}>
              {post.title}
            </SectionTitle>
            <p className={styles.lead}>{LEAD}</p>
            <BlogAuthor author={post.author} date={post.date} variant="inline" className={styles.author} />
          </header>
          <div className={styles.cover}>
            <img src={officeImage} alt="" />
          </div>
        </Container>
      </section>

      <Container size="text" as="article" className={styles.article}>
        {post.content.map(renderBlock)}
      </Container>

      <NewsletterSection />
    </>
  );
}
