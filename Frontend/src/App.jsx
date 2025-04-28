import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import Features from "./components/Features";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./components/profile";
import UserAuth from "./components/Userauth/UserAuth";
import About from "./components/about";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<UserAuth><Layout/></UserAuth>} />
        <Route path="/features" element={<Features />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;