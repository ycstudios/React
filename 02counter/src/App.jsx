import { useState } from 'react'
import './App.css'

function App() {

 let [counter,SetCounter] = useState(5)
  
  // let counter=5
  function addValue(){
 
    // counter++
    if(counter===20){
      counter=20
      alert('Counter limit Excessed')
      SetCounter(counter)
    }else{
    SetCounter(counter+1)
  }}

  function removeValue(){

    if(counter===0){
      counter=0
      SetCounter(counter)
      alert('Counter Can not be set below')
}else{
  SetCounter(counter-1)
}

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
