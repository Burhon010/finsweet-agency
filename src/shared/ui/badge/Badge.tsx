import styles from './Badge.module.css';

interface BadgeProps {
  color?: 'blue' | 'primary' | 'peach' | 'muted';
  size?: 16 | 24;
  className?: string;
}

export function Badge({ color = 'blue', size = 16, className = '' }: BadgeProps) {
  return (
    <span
      className={[styles.badge, styles[color], className].join(' ')}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
