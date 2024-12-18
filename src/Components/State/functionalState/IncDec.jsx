
import React, { useState } from "react";
const IncDecState = () => {
 const [update, setUpdate] = useState(0)

  return (
  <>
    <h2 className="text-5xl text-red-700 mb-10  text-center mt-10 font-bold">Functional Component </h2>

  <h2 className="text-5xl text-red-700 mb-10 mt-10 font-bold">Count : {update} </h2>
  <button onClick={()=>setUpdate(update + 1)} className="py-2 px-4 bg-black text-white rounded-full border border-green-400 hover:bg-red-600 hover:text-white  transition-all duration-150 ms-10 text-xl ">Increment + </button>
  <button onClick={()=>setUpdate(update - 1)} className="py-2 px-4 bg-black text-white rounded-full border border-green-400 hover:bg-red-600 hover:text-white  transition-all duration-150 ms-10 text-xl ">Decrement -  </button>
  
  
  </>
  )
}

export default IncDecState
