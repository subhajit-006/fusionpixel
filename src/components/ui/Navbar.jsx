import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="xl:sticky xl:top-0 px-14 py-3">
      <div className="flex z-10 justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <p className="text-3xl font-bold">
            <Link to="/">FushionPixellabs</Link>
          </p>
        </div>

        {/* Middle Section - Dynamic Island */}
        <div className="border-2 border-gray-300/50 bg-white/30 backdrop-blur-md shadow-md rounded-full px-6 py-2">
          <ul className="flex gap-10 text-lg font-medium items-center">
            <li className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out">
              <Link to="/Home">Home</Link>
            </li>
            <li
              className="relative cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out">
              <Link to='/ServicePage'>Services</Link>
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out">
              <Link to="/ContactUsPage">Contact Us</Link>
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out">
              <Link to="/AboutUsPage">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Auth Buttons */}
        <ul className="flex gap-5 items-center font-semibold">
          <li className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 bg-gray-300 text-black hover:bg-gray-400 hover:border-gray-400 transition duration-300">
            <button><Link to="/AuthPage">Log In</Link></button>
          </li>
          <li className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 hover:bg-gray-400 hover:border-gray-400 transition duration-300">
            <button><Link to="/AuthPage">Sign Up</Link></button>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;
