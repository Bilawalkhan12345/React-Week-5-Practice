import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { flushSync } from 'react-dom'


function App() {
  const fruits = ["Apple" , "Banana" , "Mango" , "orange"]

  return(
    <ul className='text-bold'>
      {fruits.map((fruit) => {
        return (
          <li key={fruit} className="text-gray-800 text-5xl mb-2 font-bold text-center">{fruit}</li>
        )
      }

      )}
    </ul>
  )
}
export default App;

