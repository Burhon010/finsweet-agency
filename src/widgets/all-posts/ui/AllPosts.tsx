import { Container, SectionTitle } from '@/shared/ui';
import { BLOG_PAGE_SIZE } from '@/shared/config/constants';
import { ALL_POSTS, BlogCard } from '@/entities/blog-post';
import { BlogPagination, useBlogPagination } from '@/features/paginate-blog';
import styles from './AllPosts.module.css';

const SECTION_ID = 'all-posts';

export function AllPosts() {
  const { page, totalPages, pageItems, goTo } = useBlogPagination(ALL_POSTS, BLOG_PAGE_SIZE);

  return (
    <section id={SECTION_ID} className={styles.section}>
      <Container>
        <SectionTitle>All posts</SectionTitle>
        <ul key={page} className={styles.grid}>
          {pageItems.map((post) => (
            <li key={post.id} className={styles.item}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
        <BlogPagination page={page} totalPages={totalPages} onChange={goTo} scrollTargetId={SECTION_ID} />
      </Container>
    </section>
  );
}
