import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-4 py-2'  >
        <img src="logo.png" alt="logo" className='w-[50px]'/>
        <Link to="/" className='text-red-400 text-2xl font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-red-400 text-2xl font-bold'>Watchlist</Link>
      
    </div>
  )
}

export default Navbar
