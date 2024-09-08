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

//
export interface PositionDescriptions {
  main: string;
  secondary?: string;
}
export interface Positions {
  position: string;
  period: string;
  descriptions: PositionDescriptions[];
}

export interface Experience {
  company: string;
  companyDescription: string;
  positions: Positions[];
}
