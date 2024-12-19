
import React, { useState } from 'react'



const DataState = () => {

    
        let [state, setState] = useState(
            { id: 1, name: 'John', age: 30 },
        )
      const  ChangeName = ()=>{
        setState({
            ...state,
            name : "Md Shakil Hossain"
        })
       }   
    
    
  return (
    <>
    <h2 className='text-4xl  text-red-500 font-bold text-center mt-5'>My Info : {state.name} </h2>
    <button onClick={ChangeName}  className='py-3 px-6 rounded-full transition-all duration-150 hover:bg-black hover:text-white'>Click to Name & Age Change</button>
    
    </>
  )
}

export default DataState
