import React from 'react'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-4 py-2'  >
        <img src="logo.png" alt="logo" className='w-[50px]'/>
        <a href="/" className='text-red-400 text-2xl font-bold'>Home</a>
        <a href="/watchlist" className='text-red-400 text-2xl font-bold'>Watchlist</a>
      
    </div>
  )
}

export default Navbar
