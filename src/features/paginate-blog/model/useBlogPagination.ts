import { useMemo, useState } from 'react';

export function useBlogPagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const pageItems = useMemo(() => items.slice((page - 1) * pageSize, page * pageSize), [items, page, pageSize]);

  const goTo = (next: number) => setPage(Math.min(Math.max(next, 1), totalPages));

  return { page, totalPages, pageItems, goTo };
}
