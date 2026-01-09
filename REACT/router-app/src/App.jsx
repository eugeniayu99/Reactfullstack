import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

function App() {
  
  return (
    <>
      <Navbar /><br/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/users" element={<UserList />}/>
        <Route path="/users/:id" element={<UserDetail />}/>
      </Routes> 
    </>
  )
}

export default App
