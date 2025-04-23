
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
import { useState } from 'react';
import { X } from 'lucide-react'; // Lucide icon for cross (❌)
import { motion, AnimatePresence } from 'framer-motion'; // for animations

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

  const selectedFeature = featuresData.find(feature => feature.id === activeFeature);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 relative">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Smart Home Features</h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl z-10">
        {featuresData.map(feature => (
          <div
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Animated Feature Panel */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            key={selectedFeature.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-24 left-6 w-80 h-[80vh] bg-white rounded-2xl shadow-2xl p-6 overflow-auto z-50 border border-blue-100 flex flex-col justify-between"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-700">{selectedFeature.title}</h3>
              <button
                onClick={() => setActiveFeature(null)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Dynamic Status Message */}
            <div className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded shadow text-sm">
              {/* You can pass dynamic messages from each feature */}
              {selectedFeature.message || `Your ${selectedFeature.title.toLowerCase()} is active.`}
            </div>

            {/* Control Content */}
            <div>{selectedFeature.content}</div>

            {/* Alert Section */}
            <div className="mt-4 text-sm text-gray-500 italic text-center">
              ⚠️ Make sure the device is connected properly.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Features;

