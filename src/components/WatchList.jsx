import React, { useEffect, useState } from "react";
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import genreid from "../Utility/genre"

function WatchList({ watchlist,setWatchlist,removeFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList,setGenreList]=useState(["All"])
  const [currentGenre,setCurrentGenere]=useState("All")

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter=(genre)=>{
    setCurrentGenere(genre)
  }

  let sortAscending=()=>{
    let sortedAscending= watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchlist([...sortedAscending])

  }

  let sortDecending=()=>{
    let sortedDecending=watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchlist([...sortedDecending])

  }

  useEffect(()=>{
    let temp=watchlist.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setGenreList(["All",...temp])
    
    
  },[watchlist])
  console.log("genre",genreList)
 
  return (
    <>
      <div className="text-gray-300 flex justify-center flex-wrap m-4">
        {genreList.map((genre,index)=>{
          return <div key={index} onClick={()=>handleFilter(genre)} className={`bg-gray-500/10 w-[9rem] h-[2rem] flex justify-center items-center rounded-2xl m-2 hover:cursor-pointer ${currentGenre===genre?"border-1":""}`}>
          {genre}
        </div>}
        )}
        
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
        <table className=" text-gray-300 w-full ">
          <thead className="border-b border-gray-500  text-center ">
            <tr className="bg-gray-500/10 text-lg ">
              <th className="py-2">Name</th>
              <th className="flex gap-2 py-2 items-center justify-center">
                <FaArrowUp onClick={sortAscending} />
                <span className="text-right">Ratings</span>
                <FaArrowDown onClick={sortDecending} />
              </th>

              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {watchlist.filter((movieObj)=>{
              if (currentGenre=="All"){
                return true
              }else{
                return genreid[movieObj.genre_ids[0]]==currentGenre

              }
              

            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b border-gray-500" key={movieObj.id}>
                    <td className="flex items-center px-4 py-4">
                      <img
                        className="h-[6rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="img"
                      />
                      <div className="mx-4">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreid[movieObj.genre_ids[0]]}</td>
                    <td>
                      <FaTrash color="red" onClick={()=>removeFromWatchlist(movieObj)}/>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
