import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'

async function Homepage() {

  // Fetch news data
  // fetchNews should take certain categories that I want to fetch
  const news: NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>Homepage</div>
  )
}

export default Homepage