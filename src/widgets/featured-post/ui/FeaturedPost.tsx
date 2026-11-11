import { Link } from 'react-router-dom';
import sectionShape from '@/shared/assets/icons/shape-section.svg';
import { Badge, Button, Container, SectionLabel, SectionTitle } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import { BlogAuthor, FEATURED_POST, TRENDING_POSTS } from '@/entities/blog-post';
import styles from './FeaturedPost.module.css';

export function FeaturedPost() {
  const post = FEATURED_POST;
  const href = ROUTES.blogPost(post.id);

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <article className={[styles.featured, 'fade-up'].join(' ')}>
          <Badge color="peach" size={24} />
          <SectionLabel className={styles.label}>Trending</SectionLabel>
          <SectionTitle as="h1" size="lg" className={styles.title}>
            <Link to={href}>{post.title}</Link>
          </SectionTitle>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <Button to={href} variant="link" className={styles.more}>
            Read More
          </Button>
          <BlogAuthor author={post.author} date={post.date} variant="inline" className={styles.author} />
          <Link to={href} className={styles.media} tabIndex={-1} aria-hidden="true">
            <img src={post.image} alt="" />
          </Link>
        </article>

        <aside className={styles.sidebar} aria-label="Trending posts">
          <img src={sectionShape} alt="" width={24} height={24} className={styles.shape} />
          <ul className={styles.list}>
            {TRENDING_POSTS.map((item) => (
              <li key={item.id} className={styles.item}>
                <h2 className={styles.itemTitle}>
                  <Link to={ROUTES.blogPost(item.id)}>{item.title}</Link>
                </h2>
                <BlogAuthor author={item.author} date={item.date} />
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  );
}
