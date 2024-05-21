import React,{useState} from 'react'
import Button from '@mui/material/Button'
import './Register.css';

const Register = () => {
  const [data,setData] = useState({name:"",email:"",password:""});
  const handlechange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }

  const handleSubmit = () =>{
    // console.table(data);
    localStorage.setItem("name",data.name)
    localStorage.setItem("email",data.email)
    localStorage.setItem("password",data.password)
    setData({name:"",email:"",password:""})
  }

  return (
    <div className='container-fluid registerTop'>
        <div className="container-fluid register">
            <h1>Register</h1>
            <div className="d-flex cont">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={data.name} onChange={handlechange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' value={data.email} onChange={handlechange}/>
                <label htmlFor="pass">Password</label>
                <input type="password" id='pass' name='password' value={data.password} onChange={handlechange}/>
            </div>
            <div className="button d-flex align-items-center justify-content-center w-100 mb-5">
            <Button className="btn-g btn-lg w-50" onClick={handleSubmit}>Register</Button>
            </div>
        </div>
    </div>
  )
}

export default Register