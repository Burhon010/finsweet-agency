import { Pagination } from '@/shared/ui';

interface BlogPaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  scrollTargetId?: string;
}

export function BlogPagination({ page, totalPages, onChange, scrollTargetId }: BlogPaginationProps) {
  const handleChange = (next: number) => {
    onChange(next);
    if (scrollTargetId) {
      document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <Pagination page={page} totalPages={totalPages} onChange={handleChange} />;
}
