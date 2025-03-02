import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Route from './route.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contactUs/Contact.jsx'
import User from './components/user/user.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Route/>,
    children:[
      {
        path:"",
        element:<Home/>

      },
      {
        path:"about",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      },{
        path:"user/:id",
        element:<User/>
      },{
        path: "github",
        element: <Github />,
        loader: githubInfoLoader
     }
     
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
