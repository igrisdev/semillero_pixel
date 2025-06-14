import { EVENTS, type Event } from 'src/mockups/events.mockup'
import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'

export interface EventCart {
  year: string
  image: string
  titleEvent: string
  titlePublication: string
  slug: string
}

export async function getHomeEventsCard(): Promise<EventCart[]> {
  const events = EVENTS.flatMap((event: Event) => {
    const newEvent = event.events.map((info: any) => {
      const slug =
        PUBLICATIONS.find(
          ({ title }: { title: string }) => title === event.publication
        )?.slug ?? ''

      return {
        year: info.date_init_event.split('-')[0],
        image: info.images_event[0],
        titleEvent: info.title_event,
        titlePublication: event.publication,
        slug: slug,
      }
    })

    return newEvent
  })

  return Promise.resolve(events)
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
