import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const [password,setPassword]=useState('')

  const passwordGenerator=useCallback(()=>{
    let pass=''
  let  str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  if(numberAllowed) str+='123456789'
  if(charAllowed) str+='@#$%&*!'

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
    <div className="bg-emerald-950 w-120 mx-auto text-white rounded-xl shadow-lg overflow-hidden mt-10">
    {/* Header */}
    <div className="bg-blue-600 py-3 text-center">
      <h3 className="text-white text-2xl font-bold">Password Generator</h3>
    </div>
    
    {/* Input and Button */}
    <div className="p-5 space-y-4">
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
        <input
          className="w-full px-3 py-2 text-black outline-none"
          type="text"
          placeholder="Password"
          value={password}
          ref={pasRefs}
          readOnly
        />
        <button
          onClick={copypassword}
          className="bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600"
        >
          Copy
        </button>
      </div>
      
      {/* Settings */}
      <div className="flex flex-col space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="cursor-pointer w-full"
          />
          <label className="text-gray-200">Length: {length}</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
