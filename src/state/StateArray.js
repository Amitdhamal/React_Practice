import React, { useState } from 'react'

function StateArray() {
    const [list,setList] = useState([1])
    const handleUpate = () =>{
        setList([...list,list.length+1])
    }
  return (
    <div>
        <button onClick={handleUpate}>Update</button>
        {/* <h1>{String(list)}</h1> */}
        <ul>
            {list.map((item,index)=>{
                if(index <= 19){
                    return <li key={index}>{item}</li>
                }
                else{
                    console.log('Limit Reached');
                }
            })}
        </ul>
    </div>
  )
}

export default StateArray