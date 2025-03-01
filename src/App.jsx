import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './ToDo'
import StudentScore from './StudentScore'
function App() {

 

 

  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height: "100vh"}}>
      {/* <Contact/> */}
      <ToDo/>
      <StudentScore></StudentScore>
    </div>
  )
}

export default App
