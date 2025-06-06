import { events } from 'src/mockups/data'
import type { Event } from 'src/types/data.types'

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

export async function getHomeEventsCard(): Promise<Event[]> {
  return await Promise.resolve(events)
}
