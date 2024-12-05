import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between px-14 py-5 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-3xl font-bold"><Link to='/'>FusionPixel</Link></p>
      </div>

      <ul className="flex gap-8 text-lg font-medium items-center">
        <li className="cursor-pointer"><Link to='/Home'>Home</Link></li>
        <li
          className="relative cursor-pointer"
          onClick={toggleDropdown}
        >
          Services <i className="fa-solid fa-caret-down"></i>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 text-gray-700 text-sm">
              {["Web Development", "Web Designing","Graphics Designing", "Photo Editing", "Video Editing", "Photo & Video Shoot"].map((service, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)} 
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="cursor-pointer"><Link to='/ContactUsPage'>Contact Us</Link></li>
        <li className="cursor-pointer">About Us</li>
        <li className="border-2 py-2 px-4 border-[#2e2e2e] bg-[#2e2e2e] text-white rounded-full">
          <button><Link to="/AuthPage">Log In</Link></button>
        </li>
        <li className="border-2 py-2 px-3 rounded-full border-[#2e2e2e]">
          <button><Link to="/AuthPage">Sign Up</Link></button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
