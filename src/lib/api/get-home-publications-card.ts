import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

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

interface Publication {
  title: string
  author: string
  date: string
  description: string
  image_author: string
  slug: string
  types: any[]
}

export const publications: Publication[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    author: 'Lorem ipsum dolor sit amet',
    date: '2022-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    image_author: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    slug: 'lorem-ipsum-dolor-sit-amet',
    types: [
      {
        title: 'Lorem ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        title: 'Lorem ipsum ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    author: 'Lorem ipsum dolor sit amet',
    date: '2022-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    image_author: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    slug: 'lorem-ipsum-dolor-sit-amet',
    types: [
      {
        title: 'Lorem ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        title: 'Lorem ipsum ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    author: 'Lorem ipsum dolor sit amet',
    date: '2022-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    image_author: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    slug: 'lorem-ipsum-dolor-sit-amet',
    types: [
      {
        title: 'Lorem ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        title: 'Lorem ipsum ',
        link: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
]

export async function getHomePublicationCard(): Promise<any[]> {
  return await Promise.resolve(publications)
}
