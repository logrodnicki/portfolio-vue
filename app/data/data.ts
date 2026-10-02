import type { ISkill } from '~/types/skillsTypes';
import type { IJobPosition } from '~/types/experienceTypes';
import type { IProject } from '~/types/projectsTypes';
import type { IHeaderButton } from '~/types/commonTypes';

export const headerButtons: IHeaderButton[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Experience',
    to: '/experience',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

export const skills: ISkill[] = [
  {
    label: 'JavaScript',
    logoSrc: '/images/javascript.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'TypeScript',
    logoSrc: '/images/typescript.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'React',
    logoSrc: '/images/react.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'Vue',
    logoSrc: '/images/vue.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'HTML',
    logoSrc: '/images/html.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'CSS',
    logoSrc: '/images/css.png',
    id: crypto.randomUUID(),
  },
  {
    label: 'Next.js',
    logoSrc: '/images/next.png',
    id: crypto.randomUUID(),
    addImageBackground: true,
  },
  {
    label: 'Node.js',
    logoSrc: '/images/node.png',
    id: crypto.randomUUID(),
    addImageBackground: false,
  },
  {
    label: 'Go',
    logoSrc: '/images/go.svg',
    id: crypto.randomUUID(),
    addImageBackground: true,
  },
  {
    label: 'Tailwind',
    logoSrc: '/images/tailwind.png',
    id: crypto.randomUUID(),
  },
];

export const experience: IJobPosition[] = [
  {
    name: 'E Net Production',
    position: 'Frontend developer',
    startDate: '09/2023',
    endDate: 'present',
    duties: [
      'Developing main online store',
      'Implementing new features',
      'Refactoring code',
      'Writing documentations',
      'Improving performance',
      'Building administrator panel',
    ],
  },
  {
    name: 'Future Processing',
    position: 'Frontend developer',
    startDate: '08/2023',
    endDate: '03/2021',
    duties: [
      'Implementing new features based on product owner requirements',
      'Maintaining application and fixing bugs',
      'Refactoring code',
      'Improving performance',
      'Participation in design application',
      'Writing unit tests',
    ],
  },
  {
    name: '3E Software House',
    position: 'Frontend developer',
    startDate: '09/2020',
    endDate: '02/2021',
    duties: [
      'Product development and maintaining existing applications',
      'Maintaining application and fixing bugs',
      'Building administrator panel',
    ],
  },
  {
    name: 'Net Innovation Software',
    position: 'Fullstack developer',
    startDate: '07/2017',
    endDate: '08/2020',
    duties: [
      'Developing main online store',
      'Designing and implementing backend',
      'Designing database',
      'Writing E2E tests',
    ],
  },
  {
    name: 'Kwadra',
    position: 'Control engineer',
    startDate: '06/2016',
    endDate: '06/2017',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
  {
    name: "Bialystok's Waterworks",
    position: 'Control engineer',
    startDate: '09/2013',
    endDate: '05/2016',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
  {
    name: 'Aquard',
    position: 'Control engineer',
    startDate: '09/2012',
    endDate: '08/2013',
    duties: ['Programming PLC', 'Creating data visualizations'],
  },
];

export const projects: IProject[] = [
  {
    name: 'Media Expert',
    subtitle: 'Online store',
    description: 'Online store online store online store online store online',
    link: 'https://www.mediaexpert.pl',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Media Expert - Multi-bank sales platform',
    subtitle: 'Installments form',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
      {
        name: 'Mercure',
        logoUrl: '/images/mercure.svg',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
  {
    name: 'Media Expert - Services and installments manager',
    subtitle: 'Administrator panel',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Blis',
    subtitle: 'Marketing data visualization',
    technologies: [
      {
        name: 'React',
        logoUrl: '/images/react.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
      {
        name: 'Google Maps',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Ordering Stack',
    subtitle: 'Application for restaurant ordering',
    technologies: [
      {
        name: 'React',
        logoUrl: '/images/react.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
      {
        name: 'React Saga',
        logoUrl: '/images/redux-saga.png',
      },
      {
        name: 'Styled Components',
        logoUrl: '/images/typescript.png',
      },
    ],
  },
  {
    name: 'Museum Online',
    subtitle: 'Website with museum collection',
    technologies: [
      {
        name: 'React',
        logoUrl: '/images/react.png',
      },
      {
        name: 'Typescript',
        logoUrl: '/images/typescript.png',
      },
      {
        name: 'Next.js',
        logoUrl: '/images/next.png',
      },
    ],
  },
  {
    name: 'Stationary store manager',
    subtitle: 'Administrator panel',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Vuex',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Twig',
        logoUrl: '/images/twig.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
  {
    name: 'Piotr i Paweł',
    subtitle: 'Online store',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
  {
    name: 'Netis - tasks manager',
    subtitle: 'Internal tasks manager',
    technologies: [
      {
        name: 'Vue',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Vuex',
        logoUrl: '/images/vue.png',
      },
      {
        name: 'Twig',
        logoUrl: '/images/twig.png',
      },
      {
        name: 'PHP',
        logoUrl: '/images/php.png',
      },
      {
        name: 'Postgres',
        logoUrl: '/images/postgres.png',
      },
    ],
  },
];

export default {};
