import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const [password,setPassword]=useState('')

  const passwordGenerator=useCallback(()=>{
    let pass=''
  let  str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  if(charAllowed) str+='123456789'
  if(numberAllowed) str+='@#$%&*!'

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }

  setPassword(pass)

  },[numberAllowed,charAllowed,length,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[numberAllowed,charAllowed,length,setPassword])

  const pasRefs=useRef(null)

  const copypassword=useCallback(()=>{
    pasRefs.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='bg-green-500'>
      <h3 className='bg-green-500'>Password Generator</h3>
      <div>
      <input type="text" placeholder='Password' value={password} ref={pasRefs} readOnly className='bg-white'/>
      <button onClick={copypassword} className='bg-green-500'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"min={6} onChange={(e)=>{setlength(e.target.value)}} max={100} value={length} className='cursor-pointer' />
          <label>Length: {length}</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
            setNumber((prev)=>!prev);
          }}/>
          <label htmlFor="numberInput">Numbers</label>


        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{
            setChar((prev)=>!prev);
          }}/>
          <label htmlFor="charInput">Characters</label>


        </div>
      </div>
    </div>
  )
}

export default App
