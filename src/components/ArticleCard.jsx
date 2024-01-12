import React from 'react'


export function ArticleCard({article}) {
    

    return (
        
           <div className=' w-96 border-2 rounded-lg p-5 shadow-md'>
            <div className='mb-4'> 
            <img className='object-cover h-64 rounded-lg' src={article.urlToImage ? article.urlToImage : null} alt={article.author} /></div>
            <h3 className=' mb-2.5 font-bold text-lg text-white'>{article.title}</h3>
            <p className='mb-2.5 text-gray-300'>{article.description}</p>
             <a href={article?.url} target='_blank'>
                <button className='bg-[#0b3809] py-2 px-4 rounded-lg text-white' >Read more</button></a>
               
             </div> 
       
    )
}
