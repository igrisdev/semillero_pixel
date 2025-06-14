export interface TypePublication {
  title: string
  description: string
  color_type: string
  publications: string[]
}

export const TYPE_PUBLICATIONS: TypePublication[] = [
  {
    title: 'Articulo Largo',
    description:
      'Articulo largo de 10 páginas, con un estilo de escritura y diseño de alta calidad.',
    color_type: '#F0FFF3',
    publications: [
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
    ],
  },
  {
    title: 'Monografía',
    description:
      'Monografía de 10 páginas, con un estilo de escritura y diseño de alta calidad.',
    color_type: '#F0F0F3',
    publications: [
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
    ],
  },
]
