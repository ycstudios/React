import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const [password,setPassword]=useState()
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{

    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='@!#$%&*'

    for(let i =1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);


    }

    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto text-center p-5 mt-50 justify-center shadow-md rounded-lg px-4 my-8 text-white bg-gray-700">
      <h1 className='text-3xl font-bold p-4'>Password Generator</h1>
      <div className='flex shadow  rounded-lg overlfow-hidden mb-4'>
        <input type="text"
        value={password}
        className='bg-white w-full p-2 text-black font-medium rounded-l-full overflow-x-visible'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
          <button onClick={
            copyPasswordToClip
          } className='outline-none hover:bg-sky-600 cursor-pointer  bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 justify-center'>
        <div className='flex items-center gap-x-1'>
          <input type="range" className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          min={6}
          max={50}
          value={length}
          />
          <label >Lenght : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input type="checkbox" id="numberInput" 
         defaultChecked={numberAllowed}
         onChange={()=>{
          setNumber((prev)=>!prev)
         }}

         />
         <label htmlFor="numberInput" className='font-sans '>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
         <input type="checkbox" id="numberInput" 
         defaultChecked={charAllowed}
         onChange={()=>{
          setChar((prev)=>!prev)
         }}

         />
         <label htmlFor="numberInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
