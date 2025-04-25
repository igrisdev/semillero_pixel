import { query } from './strapi'

const { STRAPI_HOST } = import.meta.env

export function getHomeArticleCard() {
  return query('articles?populate=publisher_article.image_member').then(
    (res) => {
      const articles = res.data.map((article: any) => {
        const image = `${STRAPI_HOST}${article.publisher_article.image_member.url}`

        const authorName = article.publisher_article.name_member

        return {
          title: article.title_article,
          author: authorName,
          date: article.date_publication_article,
          description: article.description_article,
          link: article.slug_article,
          image_author: image,
        }
      })

      return articles
    }
  )
}
