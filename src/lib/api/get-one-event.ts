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
  ).filter((event: any) => event !== undefined)

  console.log('slug', slug)
  console.log('findEvent', findEvent)

  return Promise.resolve({
    images_event: findEvent[0]!.images_event,
    data_init_event: findEvent[0]!.date_init_event,
    data_end_event: findEvent[0]!.date_end_event,
    title_event: findEvent[0]!.title_event,
    slug_event: findEvent[0]!.slug_event,
  })
}
