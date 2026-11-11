import { Icon } from '../icon/Icon';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onChange, className = '' }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className={[styles.pagination, className].join(' ')} aria-label="Pagination">
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <Icon name="arrow-left" width={24} height={12} />
      </button>
      <ul className={styles.list}>
        {pages.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={[styles.page, item === page ? styles.active : ''].join(' ')}
              onClick={() => onChange(item)}
              aria-current={item === page ? 'page' : undefined}
            >
              {String(item).padStart(2, '0')}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <Icon name="arrow-right" width={24} height={12} />
      </button>
    </nav>
  );
}
