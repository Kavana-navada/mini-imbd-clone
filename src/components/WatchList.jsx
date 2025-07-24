import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function WatchList({ watchlist }) {
  const [search,setSearch]=useState("");
  let handleSearch=(e)=>{
    setSearch(e.target.value)

  }
  return (
    <>
      <div className="text-gray-300 flex justify-center flex-wrap m-4">
        <div className="bg-gray-500/10 w-[9rem] h-[2rem] flex justify-center items-center rounded-2xl m-2">
          Action
        </div>
        <div className="border-1 bg-gray-500/10 w-[9rem] h-[2rem] flex justify-center items-center rounded-2xl m-2">
          Comedy
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          className="text-gray-300 border-gray-500 border-1 h-[2.5rem] w-[18rem] bg-gray-500/10 text-xl pl-2 outline-none"
          placeholder="Search Movies..."
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="m-8 border border-gray-500 overflow-hidden rounded-lg ">
        <table className=" text-gray-300 w-full text-center">
          <thead className="border-b border-gray-500 ">
            <tr className="bg-gray-500/10 text-xl ">
              <th className="py-2">Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return <tr className="border-b border-gray-500" key={movieObj.id}>
                <td className="flex items-center px-4 py-4" >
                  <img
                    className="h-[6rem] w-[6rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    alt="img"
                  />
                  <div className="mx-4">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>Action</td>
                <td>
                  <FaTrash color="red" />
                </td>
              </tr>;
            
            })}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
