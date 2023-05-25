import React from 'react'
import propTypes from 'prop-types'
function CompTest({str,num,arr,boolean,obj}) {
    console.log(str)
  return (
    
    <div>CompTest</div>
  )
}

CompTest.propTypes = {
    str: propTypes.string,
    num:propTypes.number,
    boolean:propTypes.bool,
    arr:propTypes.array,
    obj:propTypes.object,

}

export default CompTest