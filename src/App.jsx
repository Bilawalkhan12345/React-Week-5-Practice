import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { flushSync } from 'react-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>

    {/* // here <Navbar /> and <Footer /> is another files and we can use these apps here in our this page this is called components. 
    just to import this file here like "import Footer from './Components/Footer'" and we can use it */}

      <Navbar />
      <Header/>

      <h1 className="text-center font-bold text-5xl">Welcome to my Website</h1>
      <br></br>

      <Footer />
    </>
  )
}

export default App
