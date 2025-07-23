import React from "react";
import { FaTrash } from "react-icons/fa";

function WatchList() {
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="text-gray-300 border-gray-500 border-1 h-[2.5rem] w-[18rem] bg-gray-500/10 text-xl pl-2 outline-none"
          placeholder="Search Movies..."
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
            <tr className="border-b border-gray-500">
              <td className="flex items-center px-4 py-4">
                <img
                  className="h-[6rem] w-[6rem]"
                  src={`https://m.media-amazon.com/images/I/5151N2hUPiL._UF1000,1000_QL80_.jpg`}
                  alt="img"
                />
                <div className="mx-4">XYZ</div>
              </td>
              <td>7.5</td>
              <td>9</td>
              <td>Action</td>
              <td><FaTrash color="red"/></td>
            </tr>

             <tr className="border-b-1">
              <td className="flex items-center px-4 py-4">
                <img
                  className="h-[6rem] w-[6rem]"
                  src={`https://m.media-amazon.com/images/I/5151N2hUPiL._UF1000,1000_QL80_.jpg`}
                  alt="img"
                />
                <div className="mx-4">XYZ</div>
              </td>
              <td>7.5</td>
              <td>9</td>
              <td>Action</td>
              <td><FaTrash/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
