import { query } from './strapi'

// export function getAboutUsInfo() {
//   return query('about-us').then((res) => {
//     const { title_about_us, description_about_us } = res.data
//     return { title_about_us, description_about_us }
//   })
// }

interface AboutUs {
  title_about_us: string
  description_about_us: string
}

const aboutUs: AboutUs[] = [
  {
    title_about_us: 'Lorem ipsum dolor sit amet',
    description_about_us:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  },
  {
    title_about_us: 'Lorem ipsum dolor sit amet',
    description_about_us:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  },
]

export async function getAboutUsInfo(): Promise<AboutUs> {
  return await Promise.resolve(aboutUs[0])
}
