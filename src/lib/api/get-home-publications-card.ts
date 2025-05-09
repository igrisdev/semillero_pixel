import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

export function getHomePublicationCard() {
  return query(
    'publications?populate=publisher.image_member&populate=type_publications'
  ).then((res) => {
    const publications = res.data.map((publication: any) => {
      let image
      let authorName

      if (publication.publisher) {
        image = `${STRAPI_HOST_IMG}${publication?.publisher?.image_member?.url}`
        authorName = publication.publisher.name_member
      } else {
        image = `/icons/image-not-found.svg`
        authorName = 'No Author'
      }

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
