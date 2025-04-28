import React from "react";
import img from "../assets/Tesla-roadsterDelivery-9.png"
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={img}// you can replace it with your own
            alt="About Us"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to <span className="text-blue-600 font-semibold">Smart Home Automation</span> —
            your ultimate destination for intelligent living.
            <br />
            Our mission is to empower your lifestyle with seamless, secure, and smart solutions.
          </p>
          <p className="text-gray-500 text-md">
            With cutting-edge technology, innovative designs, and a passionate team,
            we ensure that your home adapts to you — not the other way around.
            Experience the future with us today.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
