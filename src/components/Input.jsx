import React, { useState } from 'react'


export default function Input({search, setSearch, setSearchResult}) {

        const handleSearch = (value) => {
            value.preventDefault()
 
             setSearchResult(search)   
             setSearch('')  
        }
       
    return (
        <>
            <form onSubmit={handleSearch} className='flex justify-center'>
            <div className=' border-2 rounded-full border-[#0b3809] overflow-hidden'>
                <input className=' border rounded-l-lg px-4 py-2 focus:outline-none' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <input className='px-5 h-full bg-[#0b3809] text-white' type="submit"/>
            </div>
            </form>
        </>
    )
}
