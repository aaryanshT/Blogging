import React from 'react';
import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AddBlog from './pages/AddBlog';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <><Navbar /><HomePage /></>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/newblog",
    element: <AddBlog />
  }
]);


function App() {
  return (
    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
