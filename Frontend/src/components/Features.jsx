import React, { useState } from 'react';
import {
  FaFan,
  FaTemperatureHigh,
  FaLightbulb,
  FaTv,
  FaLock,
  FaMusic,
  FaDoorOpen,
  FaCamera,
  FaBell,
  FaWater
} from 'react-icons/fa';

const FanControl = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaFan className={`text-7xl text-blue-600 ${isOn ? 'animate-spin-slow' : ''}`} />
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
      >
        Turn {isOn ? 'Off' : 'On'}
      </button>
    </div>
  );
};

const TemperatureControl = () => {
  const [temp, setTemp] = useState(24);
  return (
    <div className="flex flex-col items-center">
      <FaTemperatureHigh className="text-7xl text-orange-500 mb-4" />
      <input
        type="range"
        min="16"
        max="32"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        className="w-full"
      />
      <p className="mt-2 text-lg">{temp}°C</p>
    </div>
  );
};

const LightControl = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaLightbulb className={`text-7xl ${isOn ? 'text-yellow-400' : 'text-gray-400'}`} />
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-4 px-6 py-2 bg-yellow-400 text-white rounded-full shadow hover:bg-yellow-500"
      >
        Turn {isOn ? 'Off' : 'On'}
      </button>
    </div>
  );
};

const SmartTVControl = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaTv className={`text-7xl ${isOn ? "text-purple-600" : "text-gray-400"}`} />
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700"
      >
        Turn {isOn ? "Off" : "On"}
      </button>
    </div>
  );
};

const LockControl = () => {
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <FaLock className={`text-7xl ${isLocked ? "text-red-600" : "text-gray-400"}`} />
      <button
        onClick={() => setIsLocked(!isLocked)}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700"
      >
        {isLocked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
};

const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaMusic className={`text-7xl ${isPlaying ? "text-pink-500" : "text-gray-400"}`} />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

const AutoDoorControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaDoorOpen className={`text-7xl ${isOpen ? "text-green-500" : "text-gray-400"}`} />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600"
      >
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
  );
};

const CameraControl = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaCamera className={`text-7xl ${isActive ? "text-gray-700" : "text-gray-400"}`} />
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800"
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

const BellControl = () => {
  const [isRinging, setIsRinging] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaBell className={`text-7xl ${isRinging ? "text-indigo-500" : "text-gray-400"}`} />
      <button
        onClick={() => setIsRinging(!isRinging)}
        className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600"
      >
        {isRinging ? "Stop" : "Ring"}
      </button>
    </div>
  );
};

const WaterControl = () => {
  const [isFlowing, setIsFlowing] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <FaWater className={`text-7xl ${isFlowing ? "text-cyan-600" : "text-gray-400"}`} />
      <button
        onClick={() => setIsFlowing(!isFlowing)}
        className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full shadow hover:bg-cyan-700"
      >
        {isFlowing ? "Stop" : "Start"}
      </button>
    </div>
  );
};

// Add similar component structure for other controls...

const featuresData = [
  { id: 'fan', title: 'Fan Control', icon: <FaFan className="text-5xl text-blue-600" />, content: <FanControl /> },
  { id: 'temperature', title: 'Temperature', icon: <FaTemperatureHigh className="text-5xl text-orange-500" />, content: <TemperatureControl /> },
  { id: 'lights', title: 'Lights', icon: <FaLightbulb className="text-5xl text-yellow-400" />, content: <LightControl /> },
  { id: 'tv', title: 'Smart TV', icon: <FaTv className="text-5xl text-purple-600" />, content: <SmartTVControl/> },
  { id: 'lock', title: 'Door Lock', icon: <FaLock className="text-5xl text-red-600" />, content: <LockControl/> },
  { id: 'music', title: 'Music System', icon: <FaMusic className="text-5xl text-pink-500" />, content: <MusicControl/>},
  { id: 'door', title: 'Auto Doors', icon: <FaDoorOpen className="text-5xl text-green-500" />, content: <AutoDoorControl/> },
  { id: 'camera', title: 'Security Camera', icon: <FaCamera className="text-5xl text-gray-700" />, content: <CameraControl/> },
  { id: 'bell', title: 'Smart Bell', icon: <FaBell className="text-5xl text-indigo-500" />, content: <BellControl/> },
  { id: 'water', title: 'Water System', icon: <FaWater className="text-5xl text-cyan-600" />, content: <WaterControl />},
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const closeModal = () => setActiveFeature(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">

      <h2 className="text-4xl font-bold mb-10 text-gray-800">Smart Home Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setActiveFeature(feature)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{feature.title}</h3>
          </div>
        ))}
      </div>

      {activeFeature && (
  <div className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex items-center justify-center z-50">

          <div className="bg-gray-100 w-[90%] max-w-xl h-auto rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center relative text-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeFeature.title}</h2>
            <div className="text-gray-600 text-lg w-full">{activeFeature.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
