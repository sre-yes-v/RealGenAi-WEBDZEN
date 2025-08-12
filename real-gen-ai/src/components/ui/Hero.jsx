import React, { useState, useEffect } from 'react';
import Button from '../elements/Button';

// Hero component with typewriter effect for the input field
const Hero = () => {
  const quotes = [
    "Best text to image generator", 
    "Unleash your creativity", 
    "Transform words into art"
  ]; 
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Speed of typing
    const deleteSpeed = 50; // Speed of deleting
    const delayBetweenQuotes = 1500; // Delay before typing next quote

    const handleTyping = () => {
      const currentFullQuote = quotes[currentQuoteIndex];

      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentFullQuote.length) {
          setDisplayedText(prev => prev + currentFullQuote.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        } else {
          // Finished typing, start deleting after a delay
          setTimeout(() => setIsDeleting(true), delayBetweenQuotes);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayedText(prev => prev.substring(0, prev.length - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next quote
          setIsDeleting(false);
          setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    // Cleanup function to clear the timer when the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [displayedText, charIndex, isDeleting, currentQuoteIndex, quotes]);

  return (
    <div className="min-h-screen sm:min-h-fit xl:min-h-screen bg-gradient-to-b from-[#fff] to-[#DDE5FF] flex flex-col font-inter">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Input Field with Typewriter Effect */}
          <input
            type="text"
            value={displayedText} // Display the animated text
            readOnly // Make it non-editable
            className="w-full max-w-md px-6 py-3 mb-8 text-lg rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 shadow-sm text-center cursor-default"
          />

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Turn text to <span className="text-blue-600">image</span>, in seconds.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-700 mt-6 mb-4 max-w-2xl mx-auto">
            Unleash your creativity with AI. Turn your imagination into visual arts in seconds just type, and watch the magic happen
          </p>

          {/* Generate Images Button */}
          <Button to="/generate">Generate Images</Button>

          {/* Placeholder Image Squares */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-lg shadow-md"></div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-lg shadow-md"></div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-lg shadow-md"></div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-lg shadow-md"></div>
          </div>

          {/* Generated Images Text */}
          <p className="text-sm sm:text-base text-gray-600 mt-6">
            Generated images using RealGen Ai
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
