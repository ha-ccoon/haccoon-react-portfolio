import { randomUUID } from 'crypto';
import { Category } from './types';

export const categories: Category[] = [
  {
    key: randomUUID(),
    route: 'education',
    item: 'Education',
  },
  {
    key: randomUUID(),
    route: 'experience',
    item: 'Experience',
  },
  {
    key: randomUUID(),
    route: 'skills',
    item: 'Skills',
  },
  {
    key: randomUUID(),
    route: 'contact',
    item: 'Contact',
  },
];
