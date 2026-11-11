import type { IconName } from '@/shared/ui';

export interface ServiceHighlight {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  heading: string;
  description: string;
  image: string;
}
