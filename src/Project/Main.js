import React from 'react'
import { data } from './Data'

function Main() {
    console.log(data);
  return (
    <div className='container'>
        <div className='row'>
            {data.map((item) => {
                return (
                    <div className='col-sm-4' style={{marginBottom:"9px"}}>
                    <div class="card shadow-sm"  style={{height: "100%"}}>
                        <img src={item.thumbnail} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.category}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Main