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
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Rodriguez',
    ],
    date_publication: '2024-10-24',
    description:
      'Al realizar búsquedas sobre estadística, a menudo se presenta el inconveniente de no encontrar material confiable, ya sea para reforzar los conocimientos de los alumnos o el desarrollo de proyectos en los que se requiere el uso de esta área.',
    slug: 'arquitectura-de-la-información-aplicada-en-el-diseño-de-un-repositorio-de-recursos educativos-de-estadística',
    write_all_the_information:
      'Al realizar búsquedas sobre estadística, a menudo se presenta el inconveniente de no encontrar material confiable, ya sea para reforzar los conocimientos de los alumnos o el desarrollo de proyectos en los que se requiere el uso de esta área. ',
    download_file: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    type_publications: ['Articulo Largo'],
  },
]
