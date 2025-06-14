import { MEMBERS } from 'src/mockups/members.mockup'
import { PUBLICATIONS, type Publication } from 'src/mockups/publications.mockup'
import { TYPE_PUBLICATIONS } from 'src/mockups/type_publication.mockup'
import type { Member, PublicationBySlug } from 'src/types/data.types'

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

  const author = MEMBERS.find(
    ({ name }: { name: string }) => name === publication!.publisher
  )

  const typePublications = TYPE_PUBLICATIONS.filter((type) =>
    type.publications.includes(publication!.title)
  )

  const workDoneBies = MEMBERS.filter(({ name }: { name: string }) =>
    publication!.work_done_bies.includes(name)
  ).map(({ name }: { name: string }) => ({ name_member: name }))

  return {
    title: publication!.title,
    author: author!.name,
    date: publication!.date_publication,
    image_author: author!.image,
    content: publication!.write_all_the_information,
    types: typePublications,
    work_done_bies: workDoneBies,
  }
}
