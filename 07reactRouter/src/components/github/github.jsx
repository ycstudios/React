import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom';
function Github() {
    const data=useLoaderData()
// const [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/ycstudios').then((res)=>res.json()).then((data)=>{
//             console.log(data)
//             setData(data)
//         })
//     },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl' >
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
     let response=await fetch('https://api.github.com/users/ycstudios')
     return response.json()
}