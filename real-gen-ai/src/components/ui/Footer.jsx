import React from 'react'
import logo from "../../assets/Logo.png";
import Button from '../elements/Button';

const Footer = () => {
  return (
    <div className=" bg-[#DDE5FF] flex flex-col  px-4 sm:px-6 lg:px-8 xl:px-28 font-inter ">

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col justify-between items-center p-4 sm:p-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center max-w-7xl mx-auto">
          {/* Logo and Tagline */}
          <div className="text-left mb-8 md:mb-0">
            <img src={logo} alt='logo' className='w-30 h-7 md:w-50 md:h-10'/>
            <p className="text-lg sm:text-xl text-gray-700 mt-2">
              Create your own image !
            </p>
          </div>

          {/* Generate Images Button */}
          <Button value="Generate Images"/>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-indigo-100 text-center text-gray-600 text-sm sm:text-base">
        &copy; RealGen Ai | All Rights Reserved 2025
      </footer>
    </div>
  )
}

export default Footer