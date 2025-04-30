export function parseArticles(articles: any[]) {
  const articlesByYear: any = {}

  articles.forEach((article) => {
    const year = article.date.split('-')[0]

    if (!articlesByYear[year]) {
      articlesByYear[year] = []
    }

    const dateObj = new Date(article.date)
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ]
    const formattedDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${year}`

    articlesByYear[year].push({
      title: article.title,
      author: article.author,
      date: formattedDate,
      description: article.description,
      slug: article.slug,
      image_author: article.image_author,
    })
  })

  const result = Object.keys(articlesByYear)
    .sort((a: any, b: any) => b - a)
    .map((year) => ({
      year,
      articles: articlesByYear[year],
    }))

  return result
}
