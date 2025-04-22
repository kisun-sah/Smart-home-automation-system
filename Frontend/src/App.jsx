import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Features from './components/Features'
import Register from './pages/register'
import Login from './pages/login'


function App() {
  return (

    <Router>
    
        <Routes>
          {/* Route for the Homepage */}
          <Route path="/" element={<Layout />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
    
    </Router>
  )
}

export default App