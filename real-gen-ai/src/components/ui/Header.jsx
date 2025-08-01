import React, { useState } from 'react';
import logo from "../../assets/Logo.png";
import Button from '../elements/Button';

// Main App component
function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white   top-0 left-0 w-full py-4 px-4 sm:px-6 lg:px-8 xl:px-28 z-100 shadow-md fixed font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href='/'><img src={logo} alt='logo' className='w-20 h-5 md:w-30 md:h-7'/></a>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Working</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Gallery</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg font-medium">Contact Us</a>
           {/* Login Button */}
            <Button value="Login"/>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-50 rounded-lg shadow-inner py-2">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">Working</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">Gallery</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">Contact Us</a>
          <div className="px-4 py-2">
            {/* Login Button */}
            <Button value="Login"/>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
