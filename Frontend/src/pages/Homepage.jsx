import React from 'react'
import img from '../assets/blog.png'
import { FaLightbulb, FaLock, FaMobileAlt, FaWifi } from 'react-icons/fa'
import Features from '../components/Features'
import  { createContext, useState, useContext } from 'react';

const SmartHomeContext = createContext();

export const useSmartHome = () => {
  return useContext(SmartHomeContext);
};

export const SmartHomeProvider = ({ children }) => {
  const [featuresState, setFeaturesState] = useState({
    fan: false,
    temperature: 24,
    light: false,
    tv: false,
    lock: true,
    music: false,
    door: false,
    camera: false,
    bell: false,
    water: false,
  });

  const toggleFeature = (feature) => {
    setFeaturesState((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  const setTemperature = (temp) => {
    setFeaturesState((prevState) => ({
      ...prevState,
      temperature: temp,
    }));
  };

  return (
    <SmartHomeContext.Provider value={{ featuresState, toggleFeature, setTemperature }}>
      {children}
    </SmartHomeContext.Provider>
  );
};

const Homepage = () => {
  return (
    <>
  
    <div className="w-full h-screen flex items-stretch m-5">
      
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight text-center md:text-left">
          Smart Home <br /> Automation System
        </h1>
        <p className="text-gray-600 text-lg max-w-md mt-4 mx-auto md:mx-0 text-center md:text-left">
          Control your home with ease. Lights, locks, and more—right from your phone. Make your life smarter and safer.
        </p>
        <button className="mt-6 w-fit px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 mx-auto md:mx-0">
          Get Started
        </button>

        {/* Features with Icons */}
        <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
          <div className="flex items-center gap-3">
            <FaWifi className="text-blue-500 text-2xl" />
            <span className="text-gray-700 font-medium">Wi-Fi Connected</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMobileAlt className="text-green-500 text-2xl" />
            <span className="text-gray-700 font-medium">App Controlled</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-yellow-500 text-2xl" />
            <span className="text-gray-700 font-medium">Smart Lighting</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLock className="text-red-500 text-2xl" />
            <span className="text-gray-700 font-medium">Secure Access</span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white">
        <img
          src={img}
          alt="Smart Home"
          className="rounded-3xl shadow-2xl w-4/5 h-4/5 object-cover"
        />
      </div>


      {/* Features Component  */}
    


  
    </div>
    <Features/>
    </>
    
  )
}

export default Homepage
