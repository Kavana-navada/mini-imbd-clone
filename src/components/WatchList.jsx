import React from "react";

function WatchList() {
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="text-gray-300 border-gray-500 border-1 h-[2.5rem] w-[18rem] bg-gray-500/10 text-xl pl-2 outline-none" placeholder="Search Movies..."
        />
      </div>
      <div></div>
    </>
  );
}

export default WatchList;
