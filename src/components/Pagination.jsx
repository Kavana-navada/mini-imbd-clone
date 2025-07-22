import React from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
function Pagination({previousPage,nextPage,pageNo}) {
  return (
    <div className='bg-gray-700/30 mt-10 p-4 flex justify-center'>
      <div className='px-8  items-center flex '><FaAngleLeft size={20}color='gray' onClick={previousPage}/></div>
      <div className='font-bold text-gray-50'>{pageNo}</div>
      <div className='px-8 items-center flex'><FaAngleRight size={20} color='gray' onClick={nextPage}/></div>
    </div>
  )
}

export default Pagination
