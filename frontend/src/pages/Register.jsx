import axios from 'axios';
import React, { useState } from 'react';
import { mailIcon, passwordIcon, userIcon } from '../Icons/Icon';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const handlesubmit = () => {
    axios
      .post("http://localhost:8000/register", { username, password, name, email })
      .then(result => console.log(result))
      .catch(error => console.log(error.message))
      .finally(alert("Logged In"))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-semibold text-center mb-6">Register</h2>
        <form onSubmit={(e) => { e.preventDefault(); handlesubmit(); }}>

          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              {mailIcon}
              <input type="email"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </label>
          </div>

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

          <div className="mb-4">
            <label className="flex items-center gap-2 border-b border-gray-300 py-2">
              {userIcon}
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
              {passwordIcon}
              <input
                type="password"
                className="grow bg-transparent outline-none text-black custom-input"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {password.length > 0 && (
            <div className="mb-6">
              <label className="flex items-center gap-2 border-b border-gray-300 py-2">
                {passwordIcon}
                <input
                  type="password"
                  className="grow bg-transparent outline-none text-black custom-input"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>)}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>);
}

export default Register