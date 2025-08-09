import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Registration/>} />
    
  </Routes>
  </>
  
  )
}

export default App