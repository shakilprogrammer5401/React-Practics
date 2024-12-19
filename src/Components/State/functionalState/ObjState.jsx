import React, { useState } from "react";

const ObjState = () => {
  let [myObj, setMyObj] = useState({
    name: "Shakil",
    age: 20,
    city: "Dhaka",
  });
//*Ami Caile avabe use korte pari 
  //    const ChangeName = ()=>{
  // setMyObj((preData)=>({
  // ...preData,
  // name: 'Md Shakil Hossain'
  // }))
  //    }



//*Ami Caile avabe use korte pari 

  // const ChangeName = ()=>{
  // setMyObj({
  // ...myObj,
  // name: 'Shakil Hossain',
  // age: 19,
  // city: 'Shyamnagar'

  // })

  // }

  const ChangeName = () => {
    setMyObj((preData) => ({
      ...preData,
      name: "Shakil Hossain",
      age: 19,
      city: "Shyamnagar",
    }));
  };

//* Age Increment
  const AgeIncrement = ()=>{
    setMyObj((preAge)=>({
        ...preAge,
        age: preAge.age + 1,
  
    }))
  }

  //* Age Decrement
  const AgeDecrement = ()=>{
    setMyObj({
        ...myObj,
        age: myObj.age - 1,
    })
  }

  return (
    <>
      <h1>Name : {myObj.name}</h1>
      <h1>Name : {myObj.age}</h1>
      <h1>Name : {myObj.city}</h1>
      <button
        onClick={ChangeName}
        className="py-3 px-5 bg-red-500 text-white font-bold text-xl rounded-full"
      >
        Click to change Name
      </button>
      <button 
        onClick={AgeIncrement}
        className="py-3 px-5 bg-red-500 text-white font-bold text-xl rounded-full"
      >
        Age Increment
      </button>





      <button
        onClick={AgeDecrement}
        className="py-3 px-5 ms-5 bg-red-500 text-white font-bold text-xl rounded-full"
      >
        Age Decrement
      </button>
    </>
  );
};

export default ObjState;
