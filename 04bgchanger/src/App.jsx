import { useState } from 'react'


function App() {
  const[color, setColor]=useState('olive')
  return (
   
    <div className='w-full h-screen duration-200' 
      style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-2xl'>
            <button onClick={()=>setColor('red')}
            className='outline-none bg-red-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Red</button>

<button onClick={()=>setColor('black')}
            className='outline-none bg-black px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Black</button>

<button onClick={()=>setColor('green')}
            className='outline-none bg-green-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Green</button>

<button onClick={()=>setColor('yellow')}
            className='outline-none bg-yellow-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Yellow</button>
            <button
            onClick={()=>setColor('purple')}
            className='outline-none bg-purple-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Purple</button>

            <button
            onClick={()=>setColor('gray')}
            className='outline-none bg-gray-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Gray</button>

<button
onClick={()=>setColor('blue')}
            className='outline-none bg-blue-500 px-1 rounded-2xl px-3 py-2 shadow-lg' style={{color:'white'}}
            >Blue</button>

            
          </div>
        </div>
    </div>
   
  )
}

export default App
