import React, { useState } from 'react';

export default function BannerOne() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className='fixed bottom-0 w-full bg-blue-700 z-30'>
          <button
            className='absolute top-0 right-0 p-2 text-gray-300 cursor-pointer'
            onClick={handleCloseBanner}
          >
            {/* Icône de croix (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className='container mx-auto px-4 py-2'>
            <h2 className='text-white text-base text-center'>
              Utilities for setting the width of an element. {''}
              <a href="/" className='text-white text-base text-center underline'>Learn more</a>
            </h2>
          </div>
        </div>
      )}
    </>
  );
}