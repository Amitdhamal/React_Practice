import React, { useState } from 'react'

function StateNum() {
    const [count,setCount] = useState(4)
    // const handleChnage = () =>{
    //     setCount(8)
    // }
    const decrement = () =>{
        // setCount(count-1)
        setCount((PrevState)=> PrevState - 1)
    }
    const increment = () =>{
        // setCount(count+1)
        setCount((PrevState)=> PrevState + 1)
        setCount((PrevState)=> PrevState + 1)
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default StateNum