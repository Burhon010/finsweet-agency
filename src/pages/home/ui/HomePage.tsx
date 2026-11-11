import { useDocumentTitle } from '@/shared/lib';
import { HomeHero } from '@/widgets/home-hero';
import { PartnersSection } from '@/widgets/partners';
import { CompanyOverview } from '@/widgets/company-overview';
import { ValuesSection } from '@/widgets/values-section';
import { ServicesSection } from '@/widgets/services-section';
import { ProcessSection } from '@/widgets/process-section';
import { TestimonialsSection } from '@/widgets/testimonials';
import { BlogSection } from '@/widgets/blog-section';
import { NewsletterSection } from '@/widgets/newsletter';

export function HomePage() {
  useDocumentTitle();

  return (
    <>
      <HomeHero />
      <PartnersSection variant="dark" />
      <CompanyOverview />
      <ValuesSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
