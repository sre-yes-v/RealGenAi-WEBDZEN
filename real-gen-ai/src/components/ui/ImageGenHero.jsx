import React from 'react'
import Button from '../elements/Button'

const ImageGenHero = () => {
  return (
    <div className="min-h-screen sm:min-h-fit xl:min-h-screen bg-gradient-to-b from-[#fff] to-[#DDE5FF] flex flex-col font-inter">
          {/* Hero Section */}
          <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
              
    
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Turn text to <span className="text-blue-600">image</span>, in seconds.
              </h1>
    
              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-700 mt-6 mb-4 max-w-2xl mx-auto">
                Unleash your creativity with AI. Turn your imagination into visual arts in seconds just type, and watch the magic happen
              </p>
    
              {/* Generate Images Button */}
              <div className='bg-blue-950 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium shadow-xl  transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300'>Scroll Down  &darr;</div>
    
              
            </div>
          </main>
        </div>
  )
}

export default ImageGenHero