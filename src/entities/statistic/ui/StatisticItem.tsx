import type { Statistic } from '../model/types';
import styles from './StatisticItem.module.css';

interface StatisticItemProps {
  statistic: Statistic;
  size?: 'md' | 'lg';
}

export function StatisticItem({ statistic, size = 'md' }: StatisticItemProps) {
  return (
    <div className={[styles.item, styles[size]].join(' ')}>
      <p className={styles.value}>{statistic.value}</p>
      <span className={styles.bar} aria-hidden="true" />
      <p className={styles.label}>{statistic.label}</p>
    </div>
  );
}
