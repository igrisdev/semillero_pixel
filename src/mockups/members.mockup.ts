import type { Member } from 'src/types/data.types'

// Imagen de miembros
import ImageJohan from '@assets/images/members/johan-manuel-alvarez-pinta.jpg'

// Imagen de redes sociales
import ImageGithub from '@assets/images/socials/github.svg'
import ImageLinkedIn from '@assets/images/socials/linkedIn.svg'

export const members: Member[] = [
  {
    image: ImageJohan.src,
    name: 'Johan Manuel Alvarez Pinta',
    orcid: 'https://orcid.org/0009-0008-0696-5942',
    rol: 'Lider de Proyectos - Programador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2022-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/igrisdev',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/johan-alvarez-pinta/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Juan Diego Eraso Muñoz',
    orcid: 'https://orcid.org/0009-0007-6917-1034',
    rol: 'Investigador - Desarrollador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2023-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/Boli27',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/juan-eraso-485468287/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Gabriela Orozco Vasquez',
    orcid: 'https://orcid.org/=0009-0008-0357-0590',
    rol: 'Lider de Proyectos - Desarrollador',
    career: 'Tecnologia de desarrollo de software',
    state: true,
    date_init: '2024-08-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/gabi-vasquez',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/gabriela-orozco-vasquez-57622736b/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Santiago Torres Morocho',
    orcid: 'https://orcid.org/=0009-0008-1846-1063',
    rol: 'Desarrollador',
    career: 'Tecnologia de desarrollo de software',
    state: true,
    date_init: '2024-08-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/Xhall1',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/santiago-torres-morocho-665011326/',
      },
    ],
  },
]
