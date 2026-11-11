import type { Vacancy } from './types';

const DETAILS = [
  'Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).',
  'Design & Create highly engaging industry-related content in both photo, gif & video format',
  'Publish Posts on various social media channels',
  'Promote content on social networks and monitor engagement (e.g. comments and shares)',
  'Research industry-related topics',
  'Editing audio and sound design on projects',
  'Engage in opportunities to develop original content and concepts for web and mobile',
  'Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.',
  'Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels',
];

const REQUIREMENTS = [
  '4+ years of commercial experience in a similar role',
  'Strong portfolio that shows your process, not only the final result',
  'Confident communication in English, both written and spoken',
  'Experience working in cross-functional, distributed teams',
  'Ability to plan your own work and keep stakeholders informed',
  'Attention to detail and a habit of testing what you ship',
];

const RESPONSIBILITIES = [
  'Own features end-to-end: from discovery and estimates to release',
  'Collaborate closely with designers, QA and product managers',
  'Review the work of teammates and share knowledge through documentation',
  'Keep our tools, components and processes healthy and up to date',
  'Take part in client calls and present results of your work',
];

const SUMMARY = 'Through True Rich Attended does no end it his mother since real had half every him case in packages.';

type VacancySeed = Pick<Vacancy, 'id' | 'title' | 'location' | 'employment' | 'remote' | 'salary' | 'extra' | 'department'>;

const seeds: VacancySeed[] = [
  { id: 'full-stack-developer', title: 'Full Stack Developer', location: 'Bengaluru', employment: 'Full Time', remote: false, salary: '$10K - $18K', extra: 'No equity', department: 'Product Engineering' },
  { id: 'testing-engineer', title: 'Testing Engineer', location: 'Remote', employment: 'Full Time', remote: true, salary: '$08K - $10K', extra: 'No equity', department: 'Quality Assurance' },
  { id: 'hr-manager', title: 'Hr Manager', location: 'Mumbai', employment: 'Full Time', remote: false, salary: '$08K - $10K', extra: '4 to 5 Yrs Exp', department: 'People' },
  { id: 'product-designer', title: 'Product Designer', location: 'Mumbai', employment: 'Full Time', remote: false, salary: '$08K - $10K', extra: '4 to 5 Yrs Exp', department: 'Design' },
  { id: 'wordpress-developer', title: 'Wordpress Developer', location: 'Mumbai, India', employment: 'Full Time', remote: false, salary: '$08K - $10K', extra: '4 to 5 Yrs Exp', department: 'Product Engineering' },
  { id: 'jr-qa-tester', title: 'Jr. QA Tester', location: 'California, USA', employment: 'Full Time', remote: false, salary: '$14K - $23K', extra: 'No equity', department: 'Quality Assurance' },
  { id: 'sr-ux-designer', title: 'Sr. UX Designer', location: 'California, USA', employment: 'Full Time', remote: false, salary: '$14K - $23K', extra: 'No equity', department: 'Design' },
  { id: 'social-media-manager', title: 'Social Media Manager', location: 'Kolkata, India', employment: 'Full Time', remote: false, salary: '$5K - $6K', extra: 'Fresher', department: 'Marketing' },
  { id: 'golang-developer', title: 'Golang Developer', location: 'Mumbai', employment: 'Full Time', remote: false, salary: '$08K - $10K', extra: '4 to 5 Yrs Exp', department: 'Product Engineering' },
];

export const VACANCIES: Vacancy[] = seeds.map((seed) => ({
  ...seed,
  experience: seed.extra.includes('Yrs') ? '4 to 5 Years Of Experience' : 'Any level of experience',
  positions: 5,
  summary: SUMMARY,
  details: DETAILS,
  requirements: REQUIREMENTS,
  responsibilities: RESPONSIBILITIES,
}));

export const getVacancyById = (id: string) => VACANCIES.find((vacancy) => vacancy.id === id);
