import { useDocumentTitle } from '@/shared/lib';
import { CareerCulture, CareerSection } from '@/widgets/career-section';
import { VacancyList } from '@/widgets/vacancy-list';
import { NewsletterSection } from '@/widgets/newsletter';

export function CareerPage() {
  useDocumentTitle('Career');

  return (
    <>
      <CareerSection positionsAnchor="open-positions" />
      <VacancyList id="open-positions" />
      <CareerCulture />
      <NewsletterSection />
    </>
  );
}
