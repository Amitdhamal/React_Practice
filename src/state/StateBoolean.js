import { string } from 'prop-types';
import React, { useState } from 'react'

function StateBoolean() {
    const [toggle,stateToggle] = useState(false)
    console.log(toggle);
    const handleChange = () =>{
        stateToggle(!toggle)
    }
  return (
    <div>
        {String(toggle)}
        <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default StateBoolean