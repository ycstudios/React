import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  let myObj={
    username:'yash',
    age:21
  }

  let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username='chai aur code' someObj={myObj}/>
    </>
  )
}

export default App
