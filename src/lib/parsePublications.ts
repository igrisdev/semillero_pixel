import { parseDate } from './parseDate'

export function parsePublications(publications: any[]) {
  const publicationsByYear: any = {}

  publications.forEach((publication) => {
    const year = publication.date.split('-')[0]

    if (!publicationsByYear[year]) {
      publicationsByYear[year] = []
    }

    const formattedDate = parseDate(publication.date)

    publicationsByYear[year].push({
      title: publication.title,
      author: publication.author,
      date: formattedDate,
      description: publication.description,
      slug: publication.slug,
      image_author: publication.image_author,
      types: publication.types,
    })
  })

  const result = Object.keys(publicationsByYear)
    .sort((a: any, b: any) => b - a)
    .map((year) => ({
      year,
      publications: publicationsByYear[year],
    }))

  return result
}
