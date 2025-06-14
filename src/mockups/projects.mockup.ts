import ImageUniAprende from '@assets/projects/uniaprende.png'

export interface Project {
  title_project: string
  image_project: string
  link_github: string
  description_project: string
  technology_project: TechnologyProject[]
  article_content_project: string
  person_name_article_publisher_project: string
  members: string[]
  date_deploy_project: string
  slug: string
  publication: string
}

export interface TechnologyProject {
  title_technology_project: string
  link_page_technology_project: string
}

export const PROJECTS: Project[] = [
  {
    title_project: 'UniAprende',
    image_project: ImageUniAprende.src,
    link_github: 'https://github.com/igrisdev/uniaprende.git',
    description_project:
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística.',
    technology_project: [
      {
        title_technology_project: 'Astro',
        link_page_technology_project: 'https://astro.build/',
      },
      {
        title_technology_project: 'Starlight',
        link_page_technology_project: 'https://starlight.astro.build/',
      },
      {
        title_technology_project: 'TypeScript',
        link_page_technology_project: 'https://www.typescriptlang.org/',
      },
    ],
    article_content_project:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    person_name_article_publisher_project: 'Lorem ipsum dolor sit amet',
    members: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'],
    date_deploy_project: '2022-01-01',
    slug: 'lorem-ipsum-dolor-sit-amet',
    publication: 'Lorem ipsum dolor sit amet',
  },
]
