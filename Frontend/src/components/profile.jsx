import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    token: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.msg || "Failed to fetch profile data.");
          return;
        }

        const data = await response.json();
        setUserData({
          name: data.name,
          email: data.email,
          token: token,
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("An error occurred while fetching profile data.");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-500 mb-6">Here's your profile info</p>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="text-left space-y-4">
            <div>
              <label className="text-sm text-gray-500">Name</label>
              <p className="text-lg font-semibold text-gray-800">
                {userData.name}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-lg font-semibold text-gray-800">
                {userData.email}
              </p>
            </div>

            <div>
              <label className="text-sm text-gray-500">Token</label>
              <p className="text-sm text-gray-600 break-words bg-gray-100 p-2 rounded-md">
                {userData.token}
              </p>
            </div>
          </div>
        )}

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
