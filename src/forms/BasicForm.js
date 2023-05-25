import React, { useState } from 'react'

function BasicForm() {

    const [formData,setFormData] = useState({
        username : "",
        email:"",
        password: ""
    })

   const handleChanged = () =>{

   }

   const handleSubmit = (e) =>{
        e.preventDefault()
   }
  return (
    <div className='row'>
        <div className='col-sm-6 m-4'>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="username">Username</label>
                <input name='username' type="email" value={formData.username} class="form-control" id='username' onChange={handleChanged}/>
                <label for="email">Email address</label>
                <input name='email' type="email" value={formData.email} class="form-control" id='email' onChange={handleChanged}/>
                <label for="password">Password</label>
                    <input name='password' type="email" value={formData.password} class="form-control" id='password' onChange={handleChanged}/>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default BasicForm