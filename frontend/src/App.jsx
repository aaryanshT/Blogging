import React from 'react'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBlog from './pages/AddBlog';




function App() {
  return (
    <>
      
      <Navbar />
      {/* <HomePage />
      <Login />
      <Register /> */}
     <AddBlog />
    </>
  )
}

export default App
