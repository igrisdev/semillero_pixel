import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

export function getHomeEventsCard() {
  return query(
    'events?populate=picture_event.images_event&populate=picture_event.publication'
  ).then((res) => {
    const events = res.data.map((event: any) => {
      const events = event.picture_event.map((info: any) => {
        const image_link = `${STRAPI_HOST_IMG}${info.images_event[0].url}`
        const publication = info.publication.slug

        return {
          image: image_link,
          slug: publication,
        }
      })

      return {
        title: event.title_event,
        info: events,
      }
    })

    return events
  })
}
