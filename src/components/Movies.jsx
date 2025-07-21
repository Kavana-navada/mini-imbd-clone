import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div>
        <div className='text-center text-2xl text-bold text-gray-300 p-5 m-5'>
            Trending Movies

        </div>
      <div className='flex flex-row flex-wrap justify-around'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  )
}

export default Movies
