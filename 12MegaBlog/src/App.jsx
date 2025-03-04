import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import './App.css'

function App() {

  const [loading,setLoading]=useState(true)
  const dispatch =useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
      
    }).finally(()=>setLoading(false))
  },[])
  

  return ! loading ? (
    <div className></div>
  ):(null)
}

export default App
