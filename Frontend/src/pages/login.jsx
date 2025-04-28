import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/contex/user.context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Access the UserContext to set the user

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if the user is already logged in by verifying the token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to home if token exists
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        alert("Successful Login!");

        // Save token to localStorage
        localStorage.setItem("token", data.token);
        

        // Set user in UserContext
        setUser({
          name: data.name,
          email: formData.email,
          token: data.token,
        });

        // Redirect to the homepage
        navigate("/");
      } else {
        setMessage(data.message || "Invalid credentials!");
        alert("Invalid credentials!");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-2/5 bg-cover bg-center hidden md:block">
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-semibold">
            Smart Home Automation
          </h2>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Join the future of smart living
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {message && (
              <p
                className={`text-sm text-center mt-4 ${
                  message.includes("successful")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            <p className="text-sm text-center text-gray-500 mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
