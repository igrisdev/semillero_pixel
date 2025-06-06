import type { Member } from 'src/types/data.types'

// import { query } from './strapi'

// const { STRAPI_HOST_IMG } = import.meta.env

// export function getAboutUsMembers() {
//   return query(
//     'members?populate[0]=image_member&populate[1]=red_social_member.logo_red_social'
//   ).then((res) => {
//     const members = res.data.map((member: any) => {
//       const imageMember = `${STRAPI_HOST_IMG}${member.image_member.url}`

//       const imageSocial = member.red_social_member.map((social: any) => ({
//         logo_red_social: `${STRAPI_HOST_IMG}${social.logo_red_social.url}`,
//         name_social_media: social.name_red_social_media,
//         link_red_social_media: social.link_red_social_media,
//       }))

//       return {
//         image: imageMember,
//         name: member.name_member,
//         orcid: member.orcid_member,
//         rol: member.rol_member,
//         career: member.career_member,
//         state: member.state_member,
//         date_init: member.date_init_member,
//         date_end: member.date_end_member,
//         social_media: imageSocial,
//       }
//     })

//     return members
//   })
// }

export const members: Member[] = [
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Lorem ipsum dolor sit amet',
    orcid: 'https://orcid.org/lorem-ipsum-dolor-sit-amet',
    rol: 'Director',
    career: 'Ingeniero de Software',
    state: true,
    date_init: '2022-01-01',
    date_end: '2022-01-01',
    social_media: [
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Lorem ipsum dolor sit amet',
    orcid: 'https://orcid.org/lorem-ipsum-dolor-sit-amet',
    rol: 'Director',
    career: 'Ingeniero de Software',
    state: true,
    date_init: '2022-01-01',
    date_end: '2022-01-01',
    social_media: [
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Lorem ipsum dolor sit amet',
    orcid: 'https://orcid.org/lorem-ipsum-dolor-sit-amet',
    rol: 'Director',
    career: 'Ingeniero de Software',
    state: true,
    date_init: '2022-01-01',
    date_end: '2022-01-01',
    social_media: [
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
      {
        logo_red_social:
          'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
        name_social_media: 'Lorem ipsum dolor sit amet',
        link_red_social_media: 'https://lorem-ipsum-dolor-sit-amet.com',
      },
    ],
  },
]

export async function getAboutUsMembers(): Promise<Member[]> {
  return await Promise.resolve(members)
}
