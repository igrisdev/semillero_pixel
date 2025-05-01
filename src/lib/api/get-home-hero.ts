import { query } from './strapi'

const { STRAPI_HOST_IMG } = import.meta.env

export function getHomeHero() {
  return query('home?populate=image_bg_hero').then((res) => {
    const { title_hero, description_hero, image_bg_hero } = res.data
    const image_hero = `${STRAPI_HOST_IMG}${image_bg_hero.url}`

    return { title_hero, description_hero, image_hero }
  })
}
