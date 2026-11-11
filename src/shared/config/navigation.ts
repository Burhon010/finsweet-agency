import type { NavLinkItem, SocialLink } from '../types/common';

export const ROUTES = {
  home: '/',
  services: '/services',
  service: (slug: string) => `/services#${slug}`,
  company: '/company',
  career: '/career',
  vacancy: (id: string) => `/career/${id}`,
  blog: '/blog',
  blogPost: (id: string) => `/blog/${id}`,
  employee: (id: string) => `/team/${id}`,
  contacts: '/contacts',
  privacy: '/privacy-policy',
} as const;

export const HEADER_LINKS: NavLinkItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Service', to: ROUTES.services },
  { label: 'Company', to: ROUTES.company },
  { label: 'Career', to: ROUTES.career },
  { label: 'Blog', to: ROUTES.blog },
  { label: 'Contact us', to: ROUTES.contacts },
];

export const FOOTER_MAIN_LINKS: NavLinkItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Service', to: ROUTES.services },
  { label: 'Company', to: ROUTES.company },
  { label: 'Career', to: ROUTES.career },
  { label: 'News', to: ROUTES.blog },
];

export const FOOTER_SERVICE_LINKS: NavLinkItem[] = [
  { label: 'Technical support', to: ROUTES.service('technical-support') },
  { label: 'Testing', to: ROUTES.service('testing') },
  { label: 'Development', to: ROUTES.service('development') },
  { label: 'AWS/Azure', to: ROUTES.service('aws-azure') },
  { label: 'Consulting', to: ROUTES.service('consulting') },
  { label: 'Information Technology', to: ROUTES.service('information-technology') },
];

export const FOOTER_RESOURCE_LINKS: NavLinkItem[] = [
  { label: 'About Us', to: ROUTES.company },
  { label: 'Testimonial', to: `${ROUTES.home}#testimonials` },
  { label: 'Privacy Policy', to: ROUTES.privacy },
  { label: 'Terms of use', to: ROUTES.privacy },
  { label: 'Blog', to: ROUTES.blog },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { network: 'facebook', href: 'https://facebook.com' },
  { network: 'twitter', href: 'https://twitter.com' },
  { network: 'instagram', href: 'https://instagram.com' },
  { network: 'linkedin', href: 'https://linkedin.com' },
];
