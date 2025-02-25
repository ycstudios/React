import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter,SetCounter] = useState(5)
  
  // let counter=5



  function addValue(){
    console.log('value added',counter)
    // counter++
    SetCounter(counter+1)
  }

  function removeValue(){
    console.log('value removed',counter)
    // counter--
    SetCounter(counter-1)
  }


  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
