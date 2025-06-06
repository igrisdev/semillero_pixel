import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

// export function getHomeProjects() {
//   return query(
//     'projects?populate=image_project&populate=technology_project&populate=members&populate=publication'
//   ).then((res) => {
//     const projects = res.data.map((project: any) => {
//       const technologies = project.technology_project.map((tech: any) => {
//         return {
//           title: tech.title_technology_project,
//           link: tech.link_page_technology_project,
//         }
//       })

//       const developers = project.members.map((member: any) => {
//         return {
//           name: member.name_member,
//         }
//       })

//       const image_project = `${STRAPI_HOST_IMG}${project.image_project?.url}`

//       return {
//         title: project.title_project,
//         image: image_project,
//         link_github: project.link_github,
//         slug: project?.publication?.slug,
//         id: project.slug,
//         description: project.description_project,
//         technologies: technologies,
//         content: project.article_content_project,
//         author: project.person_name_article_publisher_project,
//         developers: developers,
//         date_deploy: project.date_deploy_project,
//       }
//     })

//     return projects
//   })
// }

interface Project {
  title: string
  image: string
  link_github: string
  slug: string
  id: string
  description: string
  technologies: any[]
  content: string
  author: string
  developers: any[]
  date_deploy: string
}

export const projects: Project[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    slug: 'lorem-ipsum-dolor-sit-amet',
    id: 'lorem-ipsum-dolor-sit-amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technologies: [
      {
        title: 'React',
        link: 'https://reactjs.org/',
      },
      {
        title: 'Next.js',
        link: 'https://nextjs.org/',
      },
      {
        title: 'Astro',
        link: 'https://astro.build/',
      },
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    author: 'Lorem ipsum dolor sit amet',
    developers: [
      {
        name: 'Lorem ipsum dolor sit amet',
      },
      {
        name: 'Lorem ipsum dolor sit amet',
      },
    ],
    date_deploy: '2022-01-01',
  },
]

export async function getHomeProjects(): Promise<Project[]> {
  return await Promise.resolve(projects)
}
