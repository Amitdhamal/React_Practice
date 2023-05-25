//method 1 to access data from Compsend to Comprecive 


// function CompRecieve(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>CompRecieve</h1>
//       <p>{props.x}</p>
//       <p>{props.name}</p>
//       <p>{props.}</p>
//     </div>
//   )
// }


function CompRecieve({x,name,a}) {
  return (
    <div>
      <h1>CompRecieve</h1>
      <p>{x}</p>
      <p>{name}</p>
      <p>{a}</p>
    </div>
  )
}

export default CompRecieve