import { useDocumentTitle } from '@/shared/lib';
import { PrivacyContent } from '@/widgets/privacy-content';

export function PrivacyPolicyPage() {
  useDocumentTitle('Privacy Policy');
  return <PrivacyContent />;
}
