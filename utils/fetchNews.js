export const fetchNews = async (keyword) => {
  // 2022 -12 -29
  const today = new Date().toISOString().slice(0, 10)
  const pageSize = '20'
  const language = 'en'
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&from=${today}&sortBy=popular&language=${language}&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}}`,
  )
  const news = res.json()
  return news
}
