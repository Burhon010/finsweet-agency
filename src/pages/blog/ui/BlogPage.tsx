import { useDocumentTitle } from '@/shared/lib';
import { FeaturedPost } from '@/widgets/featured-post';
import { RecentPosts } from '@/widgets/recent-posts';
import { AllPosts } from '@/widgets/all-posts';
import { NewsletterSection } from '@/widgets/newsletter';

export function BlogPage() {
  useDocumentTitle('Blog');

  return (
    <>
      <FeaturedPost />
      <RecentPosts />
      <AllPosts />
      <NewsletterSection />
    </>
  );
}
