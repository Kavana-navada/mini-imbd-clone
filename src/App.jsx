import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  let [watchlist,setWatchlist]=useState([])
  let handleAddToWatchlist=(movieObj)=>{
    let newWatchlist=[...watchlist,movieObj]
    setWatchlist(newWatchlist)
    
  }

  let removeFromWatchlist=(movieObj)=>{
    let filteredWatchlist=watchlist.filter((obj)=>obj.id!=movieObj.id)
    setWatchlist(filteredWatchlist)

  }
  console.log(watchlist)

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><Movies handleAddToWatchlist={handleAddToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist}/></>} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
