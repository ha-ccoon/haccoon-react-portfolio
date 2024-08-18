import { randomUUID } from 'crypto';
import { NavigationBar } from './types';

export const navigationItems: NavigationBar[] = [
  {
    key: randomUUID(),
    route: 'about-me',
    item: 'About Me',
  },
  {
    key: randomUUID(),
    route: 'publication',
    item: 'Publication',
  },
  {
    key: randomUUID(),
    route: 'research',
    item: 'Research',
  },
  {
    key: randomUUID(),
    route: 'honors-awards',
    item: 'Honors and Awards',
  },
  {
    key: randomUUID(),
    route: 'contact',
    item: 'Contact',
  },
];
