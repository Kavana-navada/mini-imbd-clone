import React from "react";

function MovieCard({
  poster_path,
  title,
  handleAddToWatchlist,
  removeFromWatchlist,
  watchlist,
  movieObj,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (movieObj.id == watchlist[i].id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[45vh] bg-center bg-cover rounded-xl justify-between flex flex-col items-end hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="bg-gray-400/60 flex justify-center items-center m-2 rounded-xl w-8 h-8"
          onClick={() => removeFromWatchlist(movieObj)}
        >
          ❌
        </div>
      ) : (
        <div
          className="bg-gray-400/60 flex justify-center items-center m-2 rounded-xl w-8 h-8"
          onClick={() => handleAddToWatchlist(movieObj)}
        >
          😍
        </div>
      )}
     
      <div className="bg-gray-400/60 text-center w-full rounded-b-lg  text-xl font-bold">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
// h-[40vh] w-[200px] m-2 bg-cover flex items-end bg-center
