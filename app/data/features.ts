import type { Feature } from '~/types'

/*
  The icon prop is a class name from the selection of Prime Icons. You can find a complete list here:
  https://primefaces.org/primevue/icons
*/

const features: Feature[] = [
  {
    icon: 'pi-database',
    title: 'Full stack',
    description: 'Develop frontend and backend in a single TypeScript code base with the newest technologies!',
  },
  {
    icon: 'pi-bolt',
    title: 'Fast to code',
    description: 'Database, example tests, example components and example pages are all there for you to fill out allowing for quick starts!',
  },
  {
    icon: 'pi-ban',
    title: 'Fewer bugs',
    description: 'Strong data-validation using zod to validate all transferred data, fully typed API-routes, strict DB models via TypeORM.',
  },
  {
    icon: 'pi-heart',
    title: 'Easy to use',
    description: 'We use modern technology to ensure fast build times and a superb developer experience!',
  },
  {
    icon: 'pi-cloud-upload',
    title: 'Ready for launch',
    description: 'Github Actions CI, Dockerfile, easy switch to most popular SQL-databases are all there, out of the box.',
  },
  {
    icon: 'pi-comments',
    title: 'Community support',
    description: 'Post any question or feature requests in our GitHub and we will do our best to support you.',
  },
]

export default features
