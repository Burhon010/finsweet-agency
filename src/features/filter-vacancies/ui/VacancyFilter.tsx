import type { VacancyFilterValue } from '../model/useVacancyFilter';
import styles from './VacancyFilter.module.css';

interface VacancyFilterProps {
  value: VacancyFilterValue;
  options: { value: VacancyFilterValue; label: string }[];
  counts: Record<VacancyFilterValue, number>;
  onChange: (value: VacancyFilterValue) => void;
}

export function VacancyFilter({ value, options, counts, onChange }: VacancyFilterProps) {
  return (
    <div className={styles.filter} role="tablist" aria-label="Filter open positions">
      {options
        .filter((option) => counts[option.value] > 0)
        .map((option) => (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={value === option.value}
            className={[styles.chip, value === option.value ? styles.active : ''].join(' ')}
            onClick={() => onChange(option.value)}
          >
            {option.label}
            <span className={styles.count}>{counts[option.value]}</span>
          </button>
        ))}
    </div>
  );
}
