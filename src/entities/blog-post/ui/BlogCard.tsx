import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config/navigation';
import type { BlogPost } from '../model/types';
import { BlogAuthor } from './BlogAuthor';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const href = ROUTES.blogPost(post.id);

  return (
    <article className={styles.card}>
      <Link to={href} className={styles.media} tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="lazy" />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={href}>{post.title}</Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <BlogAuthor author={post.author} date={post.date} className={styles.author} />
      </div>
    </article>
  );
}
