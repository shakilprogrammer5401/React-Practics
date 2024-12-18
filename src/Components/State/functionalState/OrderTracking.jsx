import React, { useState } from 'react'

const TotalOrder = () => {
   const [orders, setOrders] = useState(0)
   
   let FoodOrder =()=>{
    setOrders(orders + 1)
   }
   let ClearOrder =()=>{
    setOrders(0)
   }
  return (
  <>
<section className='border-2 border-red-500 mt-7'>
<h1 className='text-center text-6xl text-black font-black mt-5'>Food Order Simple Project</h1>
  <h2 className='text-red-600 font-bold text-center mt-[20px] text-4xl '>Total Orders: {orders}</h2>
 <div className='flex justify-center'>
 <button onClick={FoodOrder} className='py-3 px-5 bg-black text-white rounded-full border border-green-400 over:bg-red-600 hover:text-white  transition-all duration-150  text-xl  mt-3 mb-10 '>Order Food</button>
 <button onClick={ClearOrder} className='py-3 px-5 bg-black text-white rounded-full border border-green-400 over:bg-red-600 hover:text-white  transition-all duration-150  text-xl  mt-3 mb-10 ms-3 '>Clear Orders</button>
 </div>
</section>
  </>
  )
}

export default TotalOrder
