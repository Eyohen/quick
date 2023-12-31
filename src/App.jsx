import { useState } from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'


function App() {


  return (
  <Routes>
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/project" element={<Projects/>}/>
  </Routes>
  )
}

export default App
