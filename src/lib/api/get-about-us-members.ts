import { MEMBERS } from 'src/mockups/members.mockup'
import type { Member } from 'src/types/data.types'

export async function getAboutUsMembers(): Promise<Member[]> {
  return await Promise.resolve(MEMBERS)
}

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
