import { EVENTS, type Event } from 'src/mockups/events.mockup'
import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'

export interface EventList {
  infoEvent: {
    image: string[]
    slug: string
    year: string
    titleEvent: string
  }[]
}

export async function getHomeEvents(): Promise<EventList[]> {
  const newEvent = EVENTS.map((event: Event) => {
    const events = event.events.map((info: any) => {
      const publication = PUBLICATIONS.find(
        ({ title }: { title: string }) => title === event.publication
      )

      return {
        image: info.images_event[0],
        slug: publication?.slug ?? '',
        year: info.date_init_event.split('-')[0],
        titleEvent: info.title_event,
        titlePublication: publication?.title ?? '',
      }
    })

    return {
      infoEvent: events,
    }
  })

  return Promise.resolve(newEvent)
}

// import { query } from './strapi'

// const { STRAPI_HOST_IMG } = import.meta.env

// export function getHomeEventsCard() {
//   return query(
//     'events?populate=picture_event.images_event&populate=picture_event.publication'
//   ).then((res) => {
//     const events = res.data.map((event: any) => {
//       const newEvent = event.picture_event.map((info: any) => {
//         const image_link = `${STRAPI_HOST_IMG}${info.images_event[0].url}`
//         const publication = info.publication.slug

//         return {
//           image: image_link,
//           slug: publication,
//         }
//       })

//       const year = new Date(event.date_start).getFullYear()

//       return {
//         year,
//         title: event.title_event,
//         infoEvent: newEvent,
//       }
//     })

//     return events
//   })
// }
