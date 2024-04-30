import React from 'react'
import './Login.css'
import Button from '@mui/material/Button'

const Login = () => {
  return (
    <div className='container-fluid loginTop'>
        <div className="container-fluid login">
            <h1>Login</h1>
            <div className="d-flex cont">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" id='pass'/>
            </div>
            <div className="button d-flex align-items-center justify-content-center w-100 mb-5">
            <Button className="btn-g btn-lg w-50">Login</Button>
            </div>
        </div>
    </div>
  )
}

export default Login