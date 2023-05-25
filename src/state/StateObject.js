import React, { useState } from 'react'

function StateObject() {
    const [obj,setObj] = useState({name:"Amit",gender:"male",age:"30"}) 
    const handleChange = () =>{
        setObj({...obj,["name"]:"Swati",["gender"]:"female",["age"]:"24"})
    }
  return (
    <div>
        <button onClick={handleChange}>Change</button>
        <h1>{obj.name}</h1>
        <h1>{obj.gender}</h1>
        <h1>{obj.age}</h1>
    </div>
  )
}

export default StateObject