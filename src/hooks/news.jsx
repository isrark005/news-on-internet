import React, {useState, useEffect} from 'react'

export default function fetchNews(searchResult) {
    const [newData, setNewData] = useState({})
  
    useEffect(()=>{
  
        if(searchResult){
      async function data() {
          try {
            await fetch(`https://newsapi.org/v2/everything?q=${searchResult}&language=en&pageSize=30&sortBy=relevancy&apiKey=d87a5d538d504b54872b4115c0e11a3e`)
            .then((res)=> res.json())
            .then((data)=> setNewData(data))
            console.log(newData);
          } catch (error) {
            console.log('error while fetching data: ', error);
          }
      }
      data()
      }
    }, [searchResult])

    return newData
}
