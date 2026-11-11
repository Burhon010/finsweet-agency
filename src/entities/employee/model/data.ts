import team1 from '@/shared/assets/images/team-1.jpg';
import team2 from '@/shared/assets/images/team-2.jpg';
import team3 from '@/shared/assets/images/team-3.jpg';
import team4 from '@/shared/assets/images/team-4.jpg';
import team5 from '@/shared/assets/images/avatar-1-lg.jpg';
import team6 from '@/shared/assets/images/team-6.jpg';
import team7 from '@/shared/assets/images/team-7.jpg';
import team8 from '@/shared/assets/images/team-8.jpg';
import type { SocialLink } from '@/shared/types/common';
import type { Employee } from './types';

const BIO =
  'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.';

const socials = (handle: string): SocialLink[] => [
  { network: 'facebook', href: `https://facebook.com/${handle}` },
  { network: 'twitter', href: `https://twitter.com/${handle}` },
  { network: 'instagram', href: `https://instagram.com/${handle}` },
  { network: 'linkedin', href: `https://linkedin.com/in/${handle}` },
];

const seeds: Array<Omit<Employee, 'bio' | 'socials'>> = [
  { id: 'daniel-brooks', name: 'Daniel Brooks', role: 'Frontend Developer', photo: team1 },
  { id: 'marcus-reed', name: 'Marcus Reed', role: 'Project Manager', photo: team2 },
  { id: 'javena-melo', name: 'Javena Melo', role: 'CEO', photo: team3 },
  { id: 'adam-castillo', name: 'Adam Castillo', role: 'UI/UX Designer', photo: team4 },
  { id: 'liam-carter', name: 'Liam Carter', role: 'Support Assist', photo: team5 },
  { id: 'jordan-hayes', name: 'Jordan Hayes', role: 'Backend Developer', photo: team6 },
  { id: 'omar-haddad', name: 'Omar Haddad', role: 'QA Engineer', photo: team7 },
  { id: 'lucas-bennett', name: 'Lucas Bennett', role: 'Marketing Lead', photo: team8 },
];

export const EMPLOYEES: Employee[] = seeds.map((seed) => ({
  ...seed,
  bio: BIO,
  socials: socials(seed.id.replace('-', '')),
}));

export const getEmployeeById = (id: string) => EMPLOYEES.find((employee) => employee.id === id);
