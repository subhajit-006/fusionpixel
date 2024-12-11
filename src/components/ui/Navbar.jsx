import React, { useRef } from "react";
import LoadingBar from 'react-top-loading-bar';
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const ref = useRef(null); // Ref for the LoadingBar
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Start the loading bar
    ref.current.complete();

    // Simulate loading delay (Optional, but makes the bar more noticeable)
    setTimeout(() => {
      navigate(path);
      ref.current.complete(); // Finish the loading bar
    }, 500); // Adjust delay as needed
  };

  return (
    <div className="xl:sticky xl:top-0 px-14 py-3">
      <LoadingBar
        color="#f11946"
        ref={ref}
        height={3}
      />
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
            <li
              className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/Home")}
            >
              Home
            </li>
            <li
              className="relative cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/ServicePage")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/ContactUsPage")}
            >
              Contact Us
            </li>
            <li
              className="cursor-pointer hover:bg-white hover:text-gray-700 rounded-full p-2 px-4 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/AboutUsPage")}
            >
              About Us
            </li>
          </ul>
        </div>

        {/* Right Section - Auth Buttons */}
        <ul className="flex gap-5 items-center font-semibold">
          <li
            className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 bg-gray-300 text-black hover:bg-gray-400 hover:border-gray-400 transition duration-300"
          >
            <button onClick={() => handleNavigation("/AuthPage")}>Log In</button>
          </li>
          <li
            className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 hover:bg-gray-400 hover:border-gray-400 transition duration-300"
          >
            <button onClick={() => handleNavigation("/AuthPage")}>Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
