import React from 'react'

function PropsSibling1({ParentStore}) {
    const name = "Amit Dhamal"
    ParentStore(name)
  return (
    <div>PropsSibling1</div>
  )
}

export default PropsSibling1