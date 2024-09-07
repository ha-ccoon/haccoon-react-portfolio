export interface Category {
  key: string;
  route: string;
  item: string;
}

export interface SkillElement {
  category: SkillCategory;
  name: string;
}

export type SkillCategory =
  | 'Backend'
  | 'Frontend'
  | 'Database'
  | 'DevOps'
  | 'Language';
