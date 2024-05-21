import React, { useState } from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [data,setData] = useState({email:"",password:""});
  const navigation = useNavigate()
  const HandelChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const handelLogin = ()=>{
    // console.table(data);
    if(localStorage.getItem("email")!=data.email){
      alert("Email Is Not Valid");
    }else if(localStorage.getItem("password")!=data.password){
      alert("Password Is Not Valid");
    }else{
      navigation("/");
      setData({email:"",password:""})
    }
  }
  return (
    <div className='container-fluid loginTop'>
        <div className="container-fluid login">
            <h1>Login</h1>
            <div className="d-flex cont">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' value={data.email} onChange={HandelChange}/>
                <label htmlFor="pass">Password</label>
                <input type="password" id='pass' name='password' value={data.password} onChange={HandelChange}/>
            </div>
            <div className="button d-flex align-items-center justify-content-center w-100 mb-5">
            <Button className="btn-g btn-lg w-50" onClick={handelLogin}>Login</Button>
            </div>
        </div>
    </div>
  )
}

export default Login