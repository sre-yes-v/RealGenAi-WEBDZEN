import { useState } from "react";
import gallImg from "../../assets/gall.png";



export default function Gallery() {
  // Define the list of Gallery with their names and imported image paths
  const GalleryList = [
    {
      name: "Img 1",
      image: gallImg,
    },
    {
      name: "Img 2",
      image: gallImg,
    },
    {
      name: "Img 3",
      image: gallImg,
    },
    {
      name: "Img 4",
      image: gallImg,
    },
    {
      name: "Img 5",
      image: gallImg,
    },
    {
      name: "Img 6",
      image: gallImg,
    },
    {
      name: "Img 7",
      image: gallImg,
    },
    
    
  ];

  // State to keep track of the current active index for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next Gallery card
  const nextGallery = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GalleryList.length);
  };

  // Function to move to the previous Gallery card
  const prevGallery = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GalleryList.length) % GalleryList.length);
  };

  const slideTransform = `translateX(-${currentIndex * 264}px)`;

  return (
    <section id="Gallery" className=" py-16 px-4 sm:px-6 lg:px-8 xl:px-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Our Gallery section*/}
        <div className=" bg-gradient-to-r from-[#fff] to-[#DDE5FF] p-8 pb-20 md:pb-8 rounded-3xl  relative"> 


          {/* Carousel container*/}
          <div className="relative overflow-hidden">
            {/* Inner container that slides, containing all Gallery cards */}
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: slideTransform }}
            >
              {GalleryList.map((Gallery, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-60 overflow-hidden group transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Image  */}
                  <img
                    src={Gallery.image}
                    alt={Gallery.name}
                    className="w-full h-[300px] object-cover rounded-3xl"
                    priority
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{Gallery.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-4
                        md:static md:flex md:justify-end md:mt-8 md:translate-x-0 md:left-auto md:bottom-auto">
            <button
                onClick={prevGallery}
                className="cursor-pointer flex items-center justify-center w-9 h-9  md:w-12 md:h-12  rounded-full border border-[#1F3A4D] text-[#1F3A4D]  hover:bg-gray-100 transition-colors duration-300 shadow-md"
                aria-label="Previous Gallery group"
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextGallery}
              className="cursor-pointer flex items-center justify-center w-9 h-9 md:w-12 md:h-12  rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 shadow-md"
              aria-label="Next Gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
