import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'
import type { PublicationBySlug } from 'src/types/data.types'

// import { parseDate } from '@lib/parseDate'
// import { query } from './strapi'

// const { STRAPI_HOST_IMG } = import.meta.env

// export function getPublicationBySlug(slug: string) {
//   return query(
//     `publications?filters[slug][$eq]=${slug}&populate=publisher.image_member&populate=type_publications&populate=work_done_bies`
//   ).then((res) => {
//     const publication = res.data[0]
//     if (!publication) return null

//     const image = `${STRAPI_HOST_IMG}${publication?.publisher?.image_member.url}`
//     const authorName = publication?.publisher?.name_member
//     const date = parseDate(publication.date_publication)

//     return {
//       title: publication.title,
//       author: authorName,
//       date: date,
//       image_author: image,
//       content: publication.write_all_the_information,
//       types: publication.type_publications,
//       work_done_bies: publication.work_done_bies,
//     }
//   })
// }

export async function getPublicationBySlug(
  slug: string
): Promise<PublicationBySlug> {
  const publication = PUBLICATIONS.find((pub: Publication) => pub.slug === slug)

  return {
    title: publication!.title,
    author: publication!.publisher,
    date: publication!.date_publication,
    image_author: '',
    content: publication!.write_all_the_information,
    types: publication!.type_publications,
    work_done_bies: [
      publication!.work_done_bies.map((name: string) => ({
        name_member: name,
      })),
    ],
  }
}
