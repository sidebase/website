import type { Feature } from '~/types'

const features: Feature[] = [
  {
    icon: 'fa-database',
    title: 'A stable frontend',
    description: 'Nuxt3 with Vue3 as the frontend',
  },
  {
    icon: 'fa-truck-fast',
    title: 'Advanced backend features',
    description: 'Data base models, migrations, queries and easy DB-switching via TypeORM',
  },
  {
    icon: 'fa-bug',
    title: 'Amazing typing tools',
    description: 'Strong data-validation using zod to validate all transferred data, fully typed API-routes, strict DB models via TypeORM.',
  },
  {
    icon: 'fa-heart',
    title: 'Data synchronization',
    description: 'Frontend- and Backend data-transformation via nuxt-sidebase-parse and zod',
  },
  {
    icon: 'fa-arrow-up',
    title: 'Built in database',
    description: 'In-memory development SQL-database via sqlite3',
  },
  {
    icon: 'fa-cloud-arrow-up',
    title: 'Correct code formatting',
    description: 'Linting through eslint',
  },
  {
    icon: 'fa-comments',
    title: 'Test your code',
    description: 'Code testing via vitest, test-library/vue and supertest',
  },
  {
    icon: 'fa-comments',
    title: 'We got your back',
    description: 'Code coverage via C8',
  },
  {
    icon: 'fa-comments',
    title: 'We got your back',
    description: 'Component stories via histoire',
  },
  {
    icon: 'fa-comments',
    title: 'We got your back',
    description: 'CSS utiltities via TailwindCSS',
  },
  {
    icon: 'fa-comments',
    title: 'We got your back',
    description: 'CSS components via Ant Design Vue',
  },
  {
    icon: 'fa-comments',
    title: 'We got your back',
    description: 'Type checking in script and template via Volar / vue-tsc',
  },
]

export default features
