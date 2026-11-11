import type { SocialLink } from '@/shared/types/common';

export interface Employee {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  socials: SocialLink[];
}
