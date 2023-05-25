import React, { useState } from 'react'

function StateString() {
    // var name ="Amit Dhamal"
    const [name,setName] = useState("Amit Dhamal")
    const handleClick = () =>{
        setName("swati")
        console.log(name);
    }
    console.log(name);
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default StateString