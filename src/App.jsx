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


function Counter(){
  const [count , setCount] = useState(0);

  return(
    <>
       <div className="flex min-h-screen flex-col items-center justify-center gap-3">
  <h1 className="text-3xl font-bold">{count}</h1>

  <div className="flex gap-2">
    <button onClick={() => setCount(count + 1)} className="border px-4 py-1 text-green-600">+</button>

    <button onClick={() => setCount(count - 1)} className="border px-4 py-1 text-red-600">-</button>

    <button onClick={() => setCount(0)} className="border px-3 py-1">Reset</button>
  </div>
</div>
    </>
  )
}

export default Counter;


// function App(){
//   const [dark , setDark] = useState(false);

//   return(
//     <>
//       <button onClick={() => setDark(!dark)}>Toggle Theme</button>

//       <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
//     </>
//   );
// }


// function App(){
//   const [name , setName] = useState("");

//   return(
//     <>
//       <div className="flex min-h-screen flex-col items-center justify-center gap-3">
//   <input
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     placeholder="Enter your name"
//     className="rounded border border-gray-400 p-2 outline-none focus:border-blue-500"
//   />

//   <h2 className="font-bold , text-red-800">Hello {name}</h2>
// </div>
//     </>
//   )
// }

// function App(){
//   const [count , setCount] = useState(0)

//   return(
//     <>
//   <div className="flex min-h-screen flex-col items-center justify-center gap-4">
//     <h1 className="text-3xl font-bold">{count}</h1>

//     <button
//       onClick={() => setCount(count + 1)}
//       className="rounded bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600"
//     >
//       Increment
//     </button>
//   </div>
// </>
//   )
// }


// function App(){
//   const studentName = "Ali";

//   return(
//     <div>
//       <h1 style={{textAlign: "center" , fontSize: "3rem" , fontWeight: "bold"}}>React prop drilling Example</h1>

//       <Parent studentName = {studentName}/>
//     </div>
//   );
// }



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


