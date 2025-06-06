import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

// export function getHomeHero() {
//   return query('home?populate=image_bg_hero').then((res) => {
//     const { title_hero, description_hero, image_bg_hero } = res.data
//     const image_hero = `${STRAPI_HOST_IMG}${image_bg_hero.url}`

//     return { title_hero, description_hero, image_hero }
//   })
// }

interface Hero {
  title_hero: string
  description_hero: string
  image_hero: string
}

const hero: Hero[] = [
  {
    title_hero: 'Descripción',
    description_hero:
      'Somos un semillero enfocado en la investigación y el desarrollo de proyectos web. Deseamos impactar el mundo de la web y crear soluciones innovadoras para mejorar la experiencia de los usuarios.',
    image_hero: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
  },
]

export async function getHomeHero(): Promise<Hero> {
  return await Promise.resolve(hero[0])
}
