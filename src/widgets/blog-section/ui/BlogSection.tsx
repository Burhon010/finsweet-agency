import { Badge, Container, SectionTitle } from '@/shared/ui';
import { useScrollAnimation } from '@/shared/lib';
import { HorizontalBlogCard, LATEST_POSTS, type BlogPost } from '@/entities/blog-post';
import styles from './BlogSection.module.css';

interface BlogSectionProps {
  title?: string;
  posts?: BlogPost[];
}

export function BlogSection({ title = 'Read our latest blogs & news', posts = LATEST_POSTS }: BlogSectionProps) {
  const { ref, className } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <Container>
        <Badge />
        <SectionTitle className={styles.title}>{title}</SectionTitle>
        <div ref={ref} className={[styles.grid, className].join(' ')}>
          {posts.map((post) => (
            <HorizontalBlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
