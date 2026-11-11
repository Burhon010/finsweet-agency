import { Container, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import { HorizontalBlogCard, RECENT_POSTS } from '@/entities/blog-post';
import styles from './RecentPosts.module.css';

export function RecentPosts() {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle>Read Recent Post</SectionTitle>
        <div ref={ref} className={[styles.grid, className].join(' ')}>
          {RECENT_POSTS.map((post) => (
            <HorizontalBlogCard key={post.id} post={post} variant="author" />
          ))}
        </div>
      </Container>
    </section>
  );
}
