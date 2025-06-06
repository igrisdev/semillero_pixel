import { aboutUs } from 'src/mockups/data'
import type { AboutUs } from 'src/types/data.types'

// import { query } from './strapi'

// export function getAboutUsInfo() {
//   return query('about-us').then((res) => {
//     const { title_about_us, description_about_us } = res.data
//     return { title_about_us, description_about_us }
//   })
// }

export async function getAboutUsInfo(): Promise<AboutUs> {
  return await Promise.resolve(aboutUs[0])
}
