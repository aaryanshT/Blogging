import React from "react";
import Card from "./Card";

const Navbar = () => {
  return (
    <body className="bg-white text-gray-900">
      <div className="w-screen  flex flex-col">
        <div className="flex justify-between items-center py-4 px-8  bg-white shadow-md">
          <h1 className="text-xl font-bold">BLOG</h1>
          <nav className="flex space-x-8">
            <a href="#" className="text-lg hover:text-blue-500">
              HOME
            </a>
            <a href="#" className="text-lg hover:text-blue-500">
              BLOGS
            </a>
            <a href="#" className="text-lg hover:text-blue-500">
              ABOUT
            </a>
          </nav>
          <button className="btn  btn-accent">Register</button>
        </div>
      </div>
    </body>
  );
};

export default Navbar;
