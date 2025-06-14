import Image1 from '@assets/images/events/v-encuentro-internacional-de-semilleros-de-investigación-prexia-2024/1.jpg'
import Image2 from '@assets/images/events/v-encuentro-internacional-de-semilleros-de-investigación-prexia-2024/2.jpg'

export interface Event {
  events: {
    images_event: string[]
    date_init_event: string
    date_end_event: string
    title_event: string
  }[]
  publication: string
}

export const EVENTS: Event[] = [
  {
    events: [
      {
        images_event: [Image1.src, Image2.src],
        date_init_event: '2024-10-24',
        date_end_event: '2024-10-25',
        title_event:
          'V Encuentro internacional de semilleros de investigación Prexia 2024',
      },
    ],
    publication:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
  },
]
