import { query } from './strapi'

export function getAboutUsInfo() {
  return query('about-us').then((res) => {
    const { title_about_us, description_about_us } = res.data
    return { title_about_us, description_about_us }
  })
}
