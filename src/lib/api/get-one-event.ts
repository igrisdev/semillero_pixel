import { EVENTS, type Event } from 'src/mockups/events.mockup'

export interface EventOne {
  images_event: string[]
  data_init_event: string
  data_end_event: string
  title_event: string
  slug_event: string
}

export async function getOneEvent(slug: string): Promise<EventOne> {
  const findEvent = EVENTS.map((event: Event) =>
    event.events.find((event: any) => event.slug_event === slug)
  )

  return Promise.resolve({
    images_event: findEvent[0]!.images_event,
    data_init_event: findEvent[0]!.date_init_event,
    data_end_event: findEvent[0]!.date_end_event,
    title_event: findEvent[0]!.title_event,
    slug_event: findEvent[0]!.slug_event,
  })
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
