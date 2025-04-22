import React from 'react';

const Register = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Image Section */}
      <div
        className="w-2/5 bg-cover bg-center hidden md:block"
       
      >
        {/* Overlay */}
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-semibold">Smart Home Automation</h2>
          
        </div>
      </div>

      {/* Right Register Form Section */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Create Your Account</h2>
          <p className="text-sm text-gray-500 text-center mb-6">Join the future of smart living</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Register
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;