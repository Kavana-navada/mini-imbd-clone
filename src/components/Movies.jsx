import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddToWatchlist,removeFromWatchlist,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo,setPageNo]=useState(1)
  const apiKey = import.meta.env.VITE_API;

  const previousPage=()=>{
    if (pageNo==1){
      setPageNo(1)
    }
    else{
      setPageNo((prev)=>prev-1)
    }
    
  }
  const nextPage=()=>{
    setPageNo((prev)=>prev+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-center text-2xl  text-gray-300 p-5 m-5">
        Trending Movies
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 m-2">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              title={movieObj.title}
              handleAddToWatchlist={handleAddToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              movieObj={movieObj}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination previousPage={previousPage} nextPage={nextPage} pageNo={pageNo}/>
    </div>
  );
}

export default Movies;
