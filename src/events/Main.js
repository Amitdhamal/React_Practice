import React, { useState } from 'react'


function Main() {
  // 2
  // function handleClick(e) {
  //   alert('button clicked')
  //   console.log(e)
  // }

  // // 3
  // function handleClick() {
  //   alert('button clicked')
  //   console.log('button clicked')
  // }

  // // 4
  function handleClick(e) {
    alert('button clicked')
    console.log(e)
  }

  //5A
  function handleClick(e) {
    alert('button clicked')
    console.log(e)
  }

   //5B
  //  function handleClick() {
  //   alert('button clicked')
  //   console.log('button clicked')
  // }

  //6
  // function divCliked() {
  //   alert('div Cliked')
  // }

  // function handleClick(e) {
  //   e.stopPropagation();
  //   alert('button clicked')
  //   console.log('button clicked')
  // }

  //7

  const [str , setstr] = useState("")
  const [arr , setarr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setarr([str])
  }

  const handlechange = (e) => {
    console.log(e.target.value);
    setstr(e.target.value)
    console.log(arr);
  }
  

  return (
    <div>
      {/* 1 */}
      {/* <button onClick={()=> console.log('button clicked')}>Button</button> */}

      {/* 2 */}
      {/* <button onClick={()=> handleClick()}>Button</button> */}

      {/* 3 */}
      {/* <button onClick={(event)=> handleClick(event)}>Button</button> */}

      {/* 4 */}
      {/* <button onClick={() => handleClick("hiii")}>Button</button> */}

      {/* 5 */}
      {/* <button onClick={handleClick}>Button</button> */}

      {/* 6 */}
      {/* <div onClick={divCliked}>
        <button onClick={handleClick}>Button</button>
      </div> */}

      {/* 7 */}
      <form  onSubmit={handleSubmit}>
        <input placeholder='Enter text' onChange={handlechange}/>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h1>{str}</h1>
        <ul>
          {arr.map((item,i)=>{
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>

    </div>
  )
}

export default Main