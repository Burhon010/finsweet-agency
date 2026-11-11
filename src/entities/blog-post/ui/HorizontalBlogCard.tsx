import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { formatDate } from '@/shared/lib';
import { ROUTES } from '@/shared/config/navigation';
import type { BlogPost } from '../model/types';
import { BlogAuthor } from './BlogAuthor';
import styles from './HorizontalBlogCard.module.css';

interface HorizontalBlogCardProps {
  post: BlogPost;
  variant?: 'meta' | 'author';
}

export function HorizontalBlogCard({ post, variant = 'meta' }: HorizontalBlogCardProps) {
  const href = ROUTES.blogPost(post.id);

  return (
    <article className={[styles.card, styles[variant]].join(' ')}>
      <Link to={href} className={styles.media} tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="lazy" />
      </Link>
      <div className={styles.body}>
        {variant === 'meta' && (
          <time className={styles.date} dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        )}
        <h3 className={styles.title}>
          <Link to={href}>{post.title}</Link>
        </h3>
        {variant === 'meta' ? (
          <Button to={href} variant="link" className={styles.more}>
            Read More
          </Button>
        ) : (
          <BlogAuthor author={post.author} date={post.date} className={styles.more} />
        )}
      </div>
    </article>
  );
}
