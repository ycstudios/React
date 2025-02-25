import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom app ! </h1>
    </div>
  );
}


// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   childern:'click me to visit Google'
// }


const reactElement=React.createElement(
  'a',
  {
    href:'google.com',
    target:'_blank'
  },
  'Click me to vist Google'
)


const anotherElement=(
  <a href='google.com' target='_blank'>Visit Goolgle</a>
)


createRoot(document.getElementById('root')).render(
 
    <App />
 
)
