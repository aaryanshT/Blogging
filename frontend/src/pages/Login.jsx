import axios from "axios";
import React, { useState } from "react";
import { emailIcon, passwordIcon, userIcon } from "../Icons/Icons"; // Import all the icons

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { username, password })
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message))
      .finally(alert("User logged in Successfully!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-96 bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-black font-semibold text-center mb-6">
            Login
          </h2>
          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              {userIcon}
              <input
                type="text"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              {passwordIcon} {/* Use passwordIcon here */}
              <input
                type="password"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;