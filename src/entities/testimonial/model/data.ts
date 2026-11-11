import avatar1 from '@/shared/assets/images/avatar-1.jpg';
import avatar2 from '@/shared/assets/images/avatar-2.jpg';
import avatar3 from '@/shared/assets/images/avatar-3.jpg';
import type { Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'johnny-andro',
    text: 'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
    name: 'Johnny Andro',
    role: 'Director, Company',
    avatar: avatar1,
  },
  {
    id: 'mathew-jasele',
    text: 'The team understood our product from the very first call. Deadlines were met, communication was clear and the result exceeded what we expected.',
    name: 'Mathew Jasele',
    role: 'Founder, Startup',
    avatar: avatar2,
  },
  {
    id: 'hussen-abakas',
    text: 'Professional, fast and genuinely friendly people. Our new website brings twice as many leads as the old one did. Highly recommend Finsweet!',
    name: 'Hussen Abakas',
    role: 'Marketing Lead, Agency',
    avatar: avatar3,
  },
];
