export function parseEvents(events: any[]) {
  const eventsByYear: any = {}

  events.forEach((event: any) => {
    const year = event.year

    if (!eventsByYear[year]) {
      eventsByYear[year] = []
    }

    eventsByYear[year].push(event)
  })

  const result = Object.keys(eventsByYear)
    .sort((a: any, b: any) => b - a)
    .map((year) => ({
      year,
      events: eventsByYear[year],
    }))

  return result
}
