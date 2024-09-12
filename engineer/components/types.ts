// navigation
export interface Category {
  key: string;
  route: string;
  item: string;
}

// skill
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

// education
export interface Education {
  title: string;
  organization: string;
  period: string;
  status: EducationStatus;
  description?: string[];
  imagePath?: string;
  certification?: Certification[];
}

type EducationStatus = 'Complete' | 'Graduate' | 'Withdrawal';

interface Certification {
  title: string;
  description?: string;
  attachments?: string[];
  credentialId?: string;
  credentialUrl?: string;
}

// experience
export interface Experience {
  company: string;
  companyDescription: string;
  positions: Positions[];
}

export interface Positions {
  position: string;
  period: string;
  descriptions: PositionDescriptions[];
}

export interface PositionDescriptions {
  main: string;
  secondary?: string;
}
