import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between px-14 py-5 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-3xl font-bold">FusionPixel</p>
      </div>

      <ul className="flex gap-8 text-lg font-medium items-center">
        <li>Home</li>
        <li
          className="relative cursor-pointer"
          onClick={toggleDropdown}
        >
          Services <i className="fa-solid fa-caret-down"></i>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 text-gray-700 text-lg">
              {["Web Development", "App Development", "SEO Services"].map((service, index) => (
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
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
