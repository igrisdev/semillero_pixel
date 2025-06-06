import { parseDate } from '@lib/parseDate'
import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

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

import { publications, type Publication } from './get-home-publications-card'

interface PublicationBySlug {
  title: string
  author: string
  date: string
  image_author: string
  content: string
  types: any[]
  work_done_bies: any[]
}

export async function getPublicationBySlug(
  slug: string
): Promise<PublicationBySlug> {
  const publication = publications.find((pub: Publication) => pub.slug === slug)

  const content =
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'

  return {
    title: publication!.title,
    author: publication!.author,
    date: publication!.date,
    image_author: publication!.image_author,
    content: content,
    types: publication!.types,
    work_done_bies: [
      {
        name_member: 'Lorem ipsum dolor sit amet',
      },
      {
        name_member: 'Lorem ipsum dolor sit amet',
      },
      {
        name_member: 'Lorem ipsum dolor sit amet',
      },
    ],
  }
}
