import { useEffect, useState } from 'react'
import fetchNews from './hooks/news'
import './App.css'
import Input from './components/Input'
import { ArticleCard } from './components/ArticleCard'

function App() {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState('')
  
 
  const news = fetchNews(searchResult)?.articles
   
console.log(news);
 
  return (
  <div className='w-full mx-auto  bg-sky-800 min-h-svh p-5'>
    <Input  setSearch={setSearch} search={search}  setSearchResult={setSearchResult} />
     {searchResult &&  <div className='mt-2 text-left text-lg text-white'>{news?.length > 0 ? `Search results for "${searchResult}"` : `No result found for "${searchResult}"` }</div> }
      <div className={`border-t-2  border-white mb-8 flex gap-3 flex-wrap py-8 justify-center ${!searchResult ? 'mt-9' : ''}`}>
        {news ? news.map((article, id) => (
          <ArticleCard key={id} article={article} />
        )) 
        
        : <div>No Data</div>}
      </div>
  </div>
  )
}

export default App
