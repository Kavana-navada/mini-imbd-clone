import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover flex items-end' style={{backgroundImage:`url(https://www.hdwallpapers.in/download/the_dark_knight_rises_banner-HD.jpg)`}}>
      <div  className='text-2xl  w-full text-center bg-gray-400/60 '>Rise</div>
    </div>
  )
}

export default Banner
