import React from "react";

function MovieCard({ poster_path, title }) {
  return (
    <div
      className="h-[40vh] w-[200px] m-2 bg-cover flex items-end bg-center rounded-xl mb-5 hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="bg-gray-400/60 text-center w-full rounded-b-lg  text-xl font-bold">{title}</div>
    </div>
  );
}

export default MovieCard;
