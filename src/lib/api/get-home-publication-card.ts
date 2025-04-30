import { query } from './strapi'

const { STRAPI_HOST } = import.meta.env

export function getHomePublicationCard() {
  return query(
    'publications?populate=publisher.image_member&populate=type_publications'
  ).then((res) => {
    const publications = res.data.map((publication: any) => {
      const image = `${STRAPI_HOST}${publication.publisher.image_member.url}`

      const authorName = publication.publisher.name_member

      return {
        title: publication.title,
        author: authorName,
        date: publication.date_publication,
        description: publication.description,
        image_author: image,
        slug: publication.slug,
        types: publication.type_publications,
      }
    })

    return publications
  })
}
