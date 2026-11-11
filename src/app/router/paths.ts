export const PATHS = {
  home: '/',
  services: '/services',
  company: '/company',
  career: '/career',
  vacancyDetails: '/career/:id',
  blog: '/blog',
  blogDetails: '/blog/:id',
  employee: '/team/:id',
  contacts: '/contacts',
  privacyPolicy: '/privacy-policy',
  notFound: '*',
} as const;

export type AppPath = (typeof PATHS)[keyof typeof PATHS];
