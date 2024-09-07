import { Category, SkillCategory } from './types';

export const categories: Category[] = [
  {
    key: '1',
    route: '#skills',
    item: 'Skills',
  },
  {
    key: '2',
    route: 'education',
    item: 'Education',
  },
  {
    key: '3',
    route: '#experience',
    item: 'Experience',
  },
  {
    key: '4',
    route: 'contact',
    item: 'Contact',
  },
];

export const skillElements = [];

export const category: SkillCategory[] = [
  'Backend',
  'Frontend',
  'Database',
  'DevOps',
  'Language',
];

export const skills: Record<SkillCategory, string[]> = {
  Language: ['JavaScript', 'TypeScript', 'Python'],
  Backend: ['NodeJS', 'ExpressJS', 'NestJS'],
  Frontend: ['NextJS'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB'],
  DevOps: [
    'Docker',
    'Nginx',
    'PM2',
    'AWS EC2',
    'AWS RDS',
    'AWS ACM',
    'AWS Route53',
  ],
};

// export const elements = [{ position: ['nestjs', 'expressjs', 'ddd'] }];
