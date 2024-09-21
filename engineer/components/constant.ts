import { Category, Education, Experience, SkillCategory } from './types';

// navigation
export const categories: Category[] = [
  {
    route: '#skills',
    item: 'Skills',
  },
  {
    route: '#education',
    item: 'Education',
  },
  {
    route: '#experience',
    item: 'Experience',
  },
  {
    route: '#contact',
    item: 'Contact',
  },
];

// skill
export const skillCategory: SkillCategory[] = [
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

// education
export const educationData: Education[] = [
  {
    title: 'AI workforce development Course Completion (70 hrs)',
    organization: 'KIST (Korea Institute of Science and Technology)',
    period: '2024.07 - 2024.08',
    status: 'Complete',
  },
  {
    title: 'Web Development & IoT Bootcamp (6 months)',
    organization: 'Elice',
    period: '2022.12 - 2023.05',
    status: 'Complete',
  },
  {
    title: 'Business Administration - Supply Chain Management',
    organization: 'Southern Alberta Institute of Technology (SAIT)',
    period: '2018.01 - 2019.12',
    status: 'Graduate',
    description: ['캐나다 캘거리 소재의 대학에서 경영학과 - 유통 전공 졸업'],
  },
  {
    title: 'Display Engineering',
    organization: 'Pukyong National University',
    period: '2014.01 - 2016.06',
    status: 'Withdrawal',
  },
];

// experience
export const experienceData: Experience[] = [
  {
    company: 'Lien Inc.',
    companyDescription: '의료데이터, 디지털 헬스 케어 전문 기업',
    positions: [
      {
        position: 'Software Engineer',
        period: '2023.12 - present',
        descriptions: [
          {
            main: '유방암 생존자 대상 PHR 서비스 개발 및 운영 관리 - 국립암센터',
          },
          {
            main: '자체 서비스 LIMS 정보 수집 및 관리 시스템 확장 개발',
          },
        ],
      },
    ],
  },
  {
    company: 'CoderLand',
    companyDescription: '온라인 코딩 학습 회사',
    positions: [
      {
        position: 'Coding Tutor',
        period: '2023.06 - 2023.10',
        descriptions: [
          {
            main: '초등반 대상으로 스크래치와 파이썬 수업 진행',
          },
          {
            main: '1:1 맞춤형 온라인 코딩 수업',
          },
        ],
      },
    ],
  },
  {
    company: 'Western Refrigeration & Beverage Equipment Ltd.',
    companyDescription: '캐나다 상업용 식음료 장비 유통회사',
    positions: [
      {
        position: 'Jr Project Manager',
        period: '2021.12 - 2022.08',
        descriptions: [
          {
            main: '북미 최대 편의점 회사 Circle K 어카운트 담당',
            secondary:
              '캐나다 전역에서 진행되는 다양한 프로젝트를 전담하여, 구매, 웨어하우스 및 물류등을 전반적으로 관리',
          },
          {
            main: '캐나다 전역에서 진행되는 다양한 프로젝트를 전담하며 구매, 웨어하우스 및 물류 등 전반적으로 관리 (신규 지점 오픈 등)',
          },
          {
            main: '프로젝트 단위의 업무에 능숙하며, 고객 회사 및 여러 협럭 회사와의 협업으로 다양한 팀과의 소통과 협업에 특화',
          },
          {
            main: '기존 지점 설비의 주기적인 교체와 워런티 서비스 담당',
          },
        ],
      },
    ],
  },
  {
    company: 'Fresh Taste Produce Limited',
    companyDescription: '미국과 캐나다에 지사를 둔 캐나다 최대 식자재 유통회사',
    positions: [
      {
        position: 'Sr Inventory Coordinator',
        period: '2020.06 - 2021.12',
        descriptions: [
          {
            main: '주 고객인 월마트와 코스트코 등 캐나다 서부 지역 야채와 과일 유통 담당',
          },
          {
            main: '신입 온보딩 프로세스 구축 및 개선',
            secondary:
              '직접 교육하며 얻은 경험으로 신입 온보딩 프로세스를 체계적으로 문서화하고 효율적으로 운영',
          },
          {
            main: '구매 부서, QA 부서, 웨어하우스 팀과의 상시적인 소통과 협업을 통해 유통 과정에서 발생하는 문제를 신속하게 해결',
          },
        ],
      },
    ],
  },
];
