import { query } from './strapi'

const { STRAPI_HOST } = import.meta.env

export function getArticleBySlug(slug: string) {
  return query(
    `articles?filters[slug][$eq]=${slug}&populate=publisher_article.image_member`
  ).then((res) => {
    const article = res.data[0]
    if (!article) return null

    const image = `${STRAPI_HOST}${article.publisher_article.image_member.url}`
    const authorName = article.publisher_article.name_member

    return {
      title: article.title_article,
      author: authorName,
      date: article.date_publication_article,
      image_author: image,
      content: article.content_article,
    }
  })
}
