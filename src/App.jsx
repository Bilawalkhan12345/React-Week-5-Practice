import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { flushSync } from 'react-dom'
import Student from './Components/Students'
import Card from './Components/Card'
import Child from './Components/Child'
import Parent from './Components/Parent'
import GrandChild from './Components/GrandChild'



function App(){
  const studentName = "Ali";

  return(
    <div>
      <h1 style={{textAlign: "center" , fontSize: "3rem" , fontWeight: "bold"}}>React prop drilling Example</h1>

      <Parent studentName = {studentName}/>
    </div>
  );
}


// function App(){
//   return(
//     <>
//        <Card>
//         <h2>Hello from main file</h2>
//        </Card>
//     </>
//   )
// }



// function App(){
//   const name = "Ali";

//   return(
//   <div>
//     <Student age = {20} city = "Lahore"/>
//     <Student name = "Ahmed" age = {25} city = "Islamabad"/>
//     <Student name = "Farhan" age = {23} city = "Karachi"/>
//   </div>
// );

// }



// function App() {
//   return (
//     <>

//     {/* // here <Navbar /> and <Footer /> is another files and we can use these apps here in our this page this is called components. 
//     just to import this file here like "import Footer from './Components/Footer'" and we can use it */}

//       <Navbar />
//       <Header/>

//       <h1 className="text-center font-bold text-5xl">Welcome to my Website</h1>
//       <br></br>

//       <Footer />
//     </>
//   )
// }

export default App
