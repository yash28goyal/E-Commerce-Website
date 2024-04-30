import React from 'react'
import Button from '@mui/material/Button'
import './Register.css';

const Register = () => {
  return (
    <div className='container-fluid registerTop'>
        <div className="container-fluid register">
            <h1>Register</h1>
            <div className="d-flex cont">
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="pass">Password</label>
                <input type="password" id='pass'/>
            </div>
            <div className="button d-flex align-items-center justify-content-center w-100 mb-5">
            <Button className="btn-g btn-lg w-50">Register</Button>
            </div>
        </div>
    </div>
  )
}

export default Register