import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };

  let removeFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((obj) => obj.id != movieObj.id);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));

    setWatchlist(filteredWatchlist);
  };
  console.log(watchlist)
  
  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))

  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                handleAddToWatchlist={handleAddToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} removeFromWatchlist={removeFromWatchlist} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
