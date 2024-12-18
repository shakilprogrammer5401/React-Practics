import React from 'react'
import { FaArrowRightToBracket } from "react-icons/fa6";

const IconReact = () => {
  return (
    <>
    <h1 className='text-4xl text-center text-red-600 font-extrabold'>Icon in React</h1>
    <button className='bg-black text-white text-xl font-semibold py-2 px-4 rounded-2xl block mx-auto transition-all delay-150 hover:bg-white hover:text-black mt-3 bg-gradient-b from bg-red-600 to-green-600 hover:border-2 hover:border-green-500 '>
        <FaArrowRightToBracket className='inline-block' /> Click Me
    </button>
    
    </>
  )
}

export default IconReact
