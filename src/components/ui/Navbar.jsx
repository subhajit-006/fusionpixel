import React, { useRef, useState, useContext } from "react";
import LoadingBar from 'react-top-loading-bar';
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

// Create an AuthContext to manage authentication state
import { createContext } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

// AuthProvider component to wrap the app and provide authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement your login logic here
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function Navbar() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Use the AuthContext to get authentication state and logout function
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleNavigation = (path) => {
    ref.current.complete();

    setTimeout(() => {
      navigate(path);
      ref.current.complete();
    }, 500);

    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    // Call logout function and navigate to home or login page
    logout();
    navigate('/');
  };

  return (
    <div className="xl:top-0 px-6 lg:px-14 py-3">
      <LoadingBar color="#f11946" ref={ref} height={3} />
      <div className="flex z-50 justify-between items-center">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 lg:w-14 h-12 lg:h-14" />
          <p className="text-3xl lg:text-5xl font-bold text-white font-fontRou">
            <Link to="/">FushionPixellabs</Link>
          </p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? (
              <FiX className="text-3xl text-white" />
            ) : (
              <FiMenu className="text-3xl text-white" />
            )}
          </button>
        </div>

        {/* Middle Section - Navbar Links (Desktop) */}
        <div className="hidden lg:flex border-2 font-fontDyan font-extralight border-gray-300/50 bg-white/30 backdrop-blur-md shadow-md rounded-full px-6 py-2">
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

        {/* Right Section - Auth Buttons (Desktop) */}
        <ul className="hidden lg:flex gap-5 items-center font-fontDyan font-light">
          {!isAuthenticated ? (
            <>
              <li
                className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 bg-gray-300 text-black hover:bg-gray-400 hover:border-gray-400 transition-transform duration-300 transform hover:scale-105"
              >
                <button onClick={() => handleNavigation("/AuthPage")}>Log In</button>
              </li>
              <li
                className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-gray-300 bg-gray-300 hover:bg-gray-400 hover:border-gray-400 transition-transform duration-300 transform hover:scale-105"
              >
                <button onClick={() => handleNavigation("/AuthPage")}>Sign Up</button>
              </li>
            </>
          ) : (
            <li
              className="border-2 h-[6vh] w-[6vw] flex justify-center items-center rounded-full border-red-300 bg-red-300 text-black hover:bg-red-400 hover:border-red-400 transition-transform duration-300 transform hover:scale-105"
            >
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>

      {/* Sidebar Menu for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[70vw] h-full bg-gray-100 bg-opacity-50 backdrop-blur-sm z-50 shadow-lg p-5 flex flex-col gap-5">
          <ul className="flex flex-col gap-5 text-lg font-medium">
            <li
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/Home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/ServicePage")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/ContactUsPage")}
            >
              Contact Us
            </li>
            <li
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition duration-300 ease-in-out"
              onClick={() => handleNavigation("/AboutUsPage")}
            >
              About Us
            </li>
          </ul>
          <ul className="flex flex-col gap-3 font-fontDyan font-light">
            {!isAuthenticated ? (
              <>
                <li
                  className="border-2 py-2 px-4 flex justify-center rounded-lg border-gray-300 bg-gray-300 text-black hover:bg-gray-400 hover:border-gray-400 transition-transform duration-300 transform hover:scale-105"
                >
                  <button onClick={() => handleNavigation("/AuthPage")}>Log In</button>
                </li>
                <li
                  className="border-2 py-2 px-4 flex justify-center rounded-lg border-gray-300 bg-gray-300 hover:bg-gray-400 hover:border-gray-400 transition-transform duration-300 transform hover:scale-105"
                >
                  <button onClick={() => handleNavigation("/AuthPage")}>Sign Up</button>
                </li>
              </>
            ) : (
              <li
                className="border-2 py-2 px-4 flex justify-center rounded-lg border-red-300 bg-red-300 text-black hover:bg-red-400 hover:border-red-400 transition-transform duration-300 transform hover:scale-105"
              >
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;