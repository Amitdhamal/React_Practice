import React from 'react'
import Comp2 from './Comp2'

function Comp1() {
    const name = "Amit Dhamal"
  return (
    <div>
        <h1>Comp1</h1>
        <Comp2  name={name}/>
    </div>
  )
}

export default Comp1