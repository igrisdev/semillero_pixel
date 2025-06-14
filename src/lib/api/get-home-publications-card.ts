import { MEMBERS } from 'src/mockups/members.mockup'
import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'
import { TYPE_PUBLICATIONS } from 'src/mockups/type_publication.mockup'
import type { PublicationCard } from 'src/types/data.types'

// import { query } from './strapi'

// const { STRAPI_HOST_IMG } = import.meta.env

// export function getHomePublicationCard() {
//   return query(
//     'publications?populate=publisher.image_member&populate=type_publications'
//   ).then((res) => {
//     const publications = res.data.map((publication: any) => {
//       let image
//       let authorName

//       if (publication.publisher) {
//         image = `${STRAPI_HOST_IMG}${publication?.publisher?.image_member?.url}`
//         authorName = publication?.publisher?.name_member
//       } else {
//         image = `/icons/image-not-found.svg`
//         authorName = 'No Author'
//       }

//       return {
//         title: publication.title,
//         author: authorName,
//         date: publication.date_publication,
//         description: publication.description,
//         image_author: image,
//         slug: publication.slug,
//         types: publication.type_publications,
//       }
//     })

//     return publications
//   })
// }

export async function getHomePublicationCard(): Promise<PublicationCard[]> {
  const publications = PUBLICATIONS.map((publication: Publication) => {
    const image = MEMBERS.find(
      ({ name }: { name: string }) => name === publication.publisher
    )?.image

    const typePublications = TYPE_PUBLICATIONS.filter((type) =>
      publication.type_publications.includes(type.title)
    )

    return {
      title: publication.title,
      author: publication.publisher,
      date: publication.date_publication,
      description: publication.description,
      image_author: image,
      slug: publication.slug,
      types: typePublications,
    }
  })

  return await Promise.resolve(publications)
}
