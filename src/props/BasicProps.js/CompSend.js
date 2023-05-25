import CompRecieve from "./CompRecieve";


function CompSend() {
  const X = 10; 
  const Y = 20;
  const name = "Amit"
  return (
    <div>
      <CompRecieve x={X} name={name} y={Y} />
    </div>
  )
}

export default CompSend