import supportImage from '@/shared/assets/images/service-support.jpg';
import developmentImage from '@/shared/assets/images/service-development.jpg';
import cloudImage from '@/shared/assets/images/service-cloud.jpg';
import consultingImage from '@/shared/assets/images/service-consulting.jpg';
import itImage from '@/shared/assets/images/service-it.jpg';
import type { Service, ServiceHighlight } from './types';

const SERVICE_TEXT =
  'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.';

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    id: 'technical-support',
    title: 'Technical support',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
    icon: 'headset',
  },
  {
    id: 'testing',
    title: 'Testing Management',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
    icon: 'atom',
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service',
    icon: 'code',
  },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'technical-support',
    name: 'Technical support',
    heading: 'Best in class tech support for your company. We become your tech backbone',
    description: SERVICE_TEXT,
    image: supportImage,
  },
  {
    id: '2',
    slug: 'development',
    name: 'Development',
    heading: 'Bring your ideas to reality with certified team of developers, working with latest technologies',
    description: SERVICE_TEXT,
    image: developmentImage,
  },
  {
    id: '3',
    slug: 'aws-azure',
    name: 'AWS/Azure',
    heading: 'We help you deploy, manage and secure your application on leading web services',
    description: SERVICE_TEXT,
    image: cloudImage,
  },
  {
    id: '4',
    slug: 'consulting',
    name: 'Consulting',
    heading: 'Get advice from world class professionals',
    description: SERVICE_TEXT,
    image: consultingImage,
  },
  {
    id: '5',
    slug: 'information-technology',
    name: 'Information Technology',
    heading: 'We want to get local identification in every corner of the world in this era of global citizenship.',
    description: SERVICE_TEXT,
    image: itImage,
  },
];
