export type EmploymentType = 'Full Time' | 'Part Time' | 'Contract';

export interface Vacancy {
  id: string;
  title: string;
  location: string;
  employment: EmploymentType;
  remote: boolean;
  salary: string;
  extra: string;
  experience: string;
  department: string;
  positions: number;
  summary: string;
  details: string[];
  requirements: string[];
  responsibilities: string[];
}
