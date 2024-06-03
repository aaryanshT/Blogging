import axios from 'axios';
import React, { useState } from 'react';
const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlesubmit = () => {
    axios
      .post('http://localhost:8000/register', { username, password, name, email })
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handlesubmit}>

          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Naam"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value)
                  setShowConfirmPassword(true)
                }}
              />
            </label>
          </div>


          {showConfirmPassword && (
            <div className="mb-6">
              <label className="flex items-center gap-2 border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow bg-transparent outline-none text-black custom-input"
                  placeholder="Confirm Password"
                />
              </label>
            </div>
          )}

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;

// if (e.target.value.length > 0) {
//   setShowConfirmPassword(true);
// } else {
//   setShowConfirmPassword(false);
// }