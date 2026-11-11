import { useMemo, useState } from 'react';
import type { Vacancy } from '@/entities/vacancy';

export type VacancyFilterValue = 'all' | 'remote' | 'engineering' | 'design' | 'other';

export const FILTER_OPTIONS: { value: VacancyFilterValue; label: string }[] = [
  { value: 'all', label: 'All positions' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'remote', label: 'Remote' },
  { value: 'other', label: 'Other' },
];

const matches = (vacancy: Vacancy, filter: VacancyFilterValue) => {
  switch (filter) {
    case 'remote':
      return vacancy.remote;
    case 'engineering':
      return vacancy.department === 'Product Engineering' || vacancy.department === 'Quality Assurance';
    case 'design':
      return vacancy.department === 'Design';
    case 'other':
      return ['People', 'Marketing'].includes(vacancy.department);
    default:
      return true;
  }
};

export function useVacancyFilter(vacancies: Vacancy[]) {
  const [filter, setFilter] = useState<VacancyFilterValue>('all');

  const filtered = useMemo(() => vacancies.filter((vacancy) => matches(vacancy, filter)), [vacancies, filter]);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTER_OPTIONS.map((option) => [option.value, vacancies.filter((vacancy) => matches(vacancy, option.value)).length]),
      ) as Record<VacancyFilterValue, number>,
    [vacancies],
  );

  return { filter, setFilter, filtered, counts, options: FILTER_OPTIONS };
}
