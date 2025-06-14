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
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística. Los recursos educativos disponibles en línea a menudo son variados y no siempre se ajustan a las necesidades específicas de los estudiantes, lo que dificulta su aprendizaje. Por ello se propone desarrollar un repositorio que agrupe estos recursos de manera coherente y optimice su accesibilidad y usabilidad. Se implementarán principios de arquitectura de la información y se priorizan las necesidades del usuario, esto incluye, una interfaz intuitiva y mecanismos de búsqueda eficientes. Este enfoque proporciona una herramienta adecuada para el aprendizaje de la estadística. La evaluación del sistema se realizará desde la experiencia de usuario, con la participación de estudiantes, docentes y expertos en usabilidad, verificando la relevancia y efectividad del repositorio.',
    person_name_article_publisher_project: 'Marta Cecilia Camacho Ojeda',
    members: [
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Maria Isabel Garcia Fajardo',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Llanten Llanten',
    ],
    date_deploy_project: '2025-01-01',
    slug: 'uniaprende',
    publication:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
  },
]
