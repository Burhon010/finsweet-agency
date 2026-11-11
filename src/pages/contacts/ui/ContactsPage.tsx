import { useDocumentTitle } from '@/shared/lib';
import { ContactInfo } from '@/widgets/contact-info';

export function ContactsPage() {
  useDocumentTitle('Contact us');
  return <ContactInfo />;
}
