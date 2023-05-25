import React,{useState} from 'react'

function Conditional() {
  const [toggle,stateToggle] = useState(false)
  console.log(toggle);
    const handleChange = () =>{
      stateToggle(!toggle)
  }

  const style = {
    height:"25vh",
    width:"25vh",
    backgroundColor:"red",
    // display: toggle ? "block" : "none"
  }
  return (
    <div>
        <button onClick={handleChange}>{toggle ? "Hide" : "show"}</button>
        {/* <div style={style}></div> */}
        {toggle ? <div style={style}></div>: null}
    </div>
  )
}

export default Conditional