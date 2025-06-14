export interface Publication {
  title: string
  publisher: string
  work_done_bies: string[]
  date_publication: string
  description: string
  slug: string
  write_all_the_information: string
  download_file: string
  type_publications: string[]
}

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
    publisher: 'Marta Cecilia Camacho Ojeda',
    work_done_bies: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    date_publication: '2022-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    slug: 'lorem-ipsum-dolor-sit-amet',
    write_all_the_information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    download_file: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    type_publications: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
]
