import React from 'react';
import { useSmartHome } from './SmartHomeContext';  // Import the context

const EventControl = () => {
  const { featuresState, toggleFeature, setTemperature } = useSmartHome();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">
        <FaFan className={`text-7xl ${featuresState.fan ? 'text-blue-600' : 'text-gray-400'}`} />
        <button
          onClick={() => toggleFeature('fan')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Turn {featuresState.fan ? 'Off' : 'On'}
        </button>
      </div>

      <div className="flex flex-col items-center">
        <FaTemperatureHigh className="text-7xl text-orange-500 mb-4" />
        <input
          type="range"
          min="16"
          max="32"
          value={featuresState.temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full"
        />
        <p className="mt-2 text-lg">{featuresState.temperature}°C</p>
      </div>

      {/* Add similar controls for other features like Lights, TV, etc. */}
    </div>
  );
};

export default EventControl;
