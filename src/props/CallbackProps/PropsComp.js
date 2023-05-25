import React, { useState } from 'react'
import PropsSibling1 from './PropsSibling1'
import PropsSibling2 from './PropsSibling2'

function PropsComp() {
    const [data,setData] = useState("a")
    // console.log(data);
    // console.log(setData);
    // console.log(useState( )) 
    const ParentStore = (a) =>{
      setData(a)
    }
  return (
    <div>
      <h1>PropsComp</h1>
      <PropsSibling1 ParentStore = {ParentStore}/>
      <PropsSibling2  data={data}/>
    </div>
  )
}

export default PropsComp