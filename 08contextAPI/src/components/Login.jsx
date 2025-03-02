import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)


    const handelSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }



  return (
    <div>
        <h2>Login</h2>
        <input type='Text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='usernaem'/>
        <input type='Text' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login