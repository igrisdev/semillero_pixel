import ImageUniAprende from '@assets/images/projects/uniaprende.png'

export interface Project {
  title_project: string
  image_project: string
  link_github: string
  description_project: string
  technology_project: {
    title_technology_project: string
    link_page_technology_project: string
  }[]
  article_content_project: string
  person_name_article_publisher_project: string
  members: string[]
  date_deploy_project: string
  slug: string
  publication: string
}

export const PROJECTS: Project[] = [
  {
    title_project: 'UniAprende',
    image_project: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    link_github: 'https://github.com/igrisdev',
    description_project:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    technology_project: [
      {
        title_technology_project: 'React',
        link_page_technology_project: 'https://reactjs.org/',
      },
      {
        title_technology_project: 'Next.js',
        link_page_technology_project: 'https://nextjs.org/',
      },
      {
        title_technology_project: 'Astro',
        link_page_technology_project: 'https://astro.build/',
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
