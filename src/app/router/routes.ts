import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import { PATHS, type AppPath } from './paths';

export interface AppRoute {
  path: AppPath;
  Component: LazyExoticComponent<ComponentType>;
}

const page = <T extends Record<string, ComponentType>>(loader: () => Promise<T>, name: keyof T) =>
  lazy(() => loader().then((module) => ({ default: module[name] })));

export const ROUTES_CONFIG: AppRoute[] = [
  { path: PATHS.home, Component: page(() => import('@/pages/home'), 'HomePage') },
  { path: PATHS.services, Component: page(() => import('@/pages/services'), 'ServicesPage') },
  { path: PATHS.company, Component: page(() => import('@/pages/company'), 'CompanyPage') },
  { path: PATHS.career, Component: page(() => import('@/pages/career'), 'CareerPage') },
  { path: PATHS.vacancyDetails, Component: page(() => import('@/pages/vacancy-details'), 'VacancyDetailsPage') },
  { path: PATHS.blog, Component: page(() => import('@/pages/blog'), 'BlogPage') },
  { path: PATHS.blogDetails, Component: page(() => import('@/pages/blog-details'), 'BlogDetailsPage') },
  { path: PATHS.employee, Component: page(() => import('@/pages/employee'), 'EmployeePage') },
  { path: PATHS.contacts, Component: page(() => import('@/pages/contacts'), 'ContactsPage') },
  { path: PATHS.privacyPolicy, Component: page(() => import('@/pages/privacy-policy'), 'PrivacyPolicyPage') },
  { path: PATHS.notFound, Component: page(() => import('@/pages/not-found'), 'NotFoundPage') },
];
