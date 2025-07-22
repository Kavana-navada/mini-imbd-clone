import React, { useEffect,useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
function Movies() {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=26d9c0030f0449cbf3a1339be6d73e97&language=en-US&page=1`).then(function(res){
        setMovies(res.data.results)
        console.log(res.data.results)
      })
},[])
  
  return (
    <div>
        <div className='text-center text-2xl  text-gray-300 p-5 m-5'>
            Trending Movies

        </div>
      <div className='flex flex-row flex-wrap'>
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} title={movieObj.original_title}/>
        })}
        
        
      </div>
    </div>
  )
}

export default Movies
