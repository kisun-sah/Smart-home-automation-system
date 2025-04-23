import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    token: "",
  });

  useEffect(() => {
    // Retrieve user data from localStorage
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (token && name && email) {
      setUserData({ name, email, token });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-500 mb-6">Here's your profile info</p>

        <div className="text-left space-y-4">
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <p className="text-lg font-semibold text-gray-800">{userData.email}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Token</label>
            <p className="text-sm text-gray-600 break-words bg-gray-100 p-2 rounded-md">
              {userData.token}
            </p>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
