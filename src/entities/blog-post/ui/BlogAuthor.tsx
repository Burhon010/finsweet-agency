import { Avatar } from '@/shared/ui';
import { formatDate, formatLongDate } from '@/shared/lib';
import type { Author } from '@/shared/types/common';
import styles from './BlogAuthor.module.css';

interface BlogAuthorProps {
  author: Author;
  date: string;
  variant?: 'stacked' | 'inline';
  className?: string;
}

export function BlogAuthor({ author, date, variant = 'stacked', className = '' }: BlogAuthorProps) {
  if (variant === 'inline') {
    return (
      <div className={[styles.author, styles.inline, className].join(' ')}>
        <Avatar src={author.avatar} alt={author.name} size={32} />
        <span className={styles.name}>{author.name}</span>
        <span className={styles.divider} aria-hidden="true" />
        <time className={styles.date} dateTime={date}>
          Posted on {formatLongDate(date)}
        </time>
      </div>
    );
  }

  return (
    <div className={[styles.author, className].join(' ')}>
      <Avatar src={author.avatar} alt={author.name} size={32} />
      <div className={styles.meta}>
        <span className={styles.name}>{author.name}</span>
        <time className={styles.small} dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </div>
  );
}
