import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
  }, []);

  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">SmartHome</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-blue-600">Features</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
          {/* Avatar Icon */}
          <li>
            <Link to="/profile">
              <FaUserCircle className="text-3xl text-blue-600 ml-4 cursor-pointer hover:text-blue-800 transition duration-200" />
            </Link>
          </li>
          {/* Dynamic Button */}
          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/register"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Register
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="block text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/register"
              className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;