import React, { useState } from 'react';
import './style.css';

export default function BannerThree() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className='fixed bottom-0 w-full z-30 bg-cyan-500'>
          <button
            className='absolute top-0 right-0 p-2 cursor-pointer  text-white rounded-full'
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
          <div className='container mx-auto px-4 py-5 text-white flex justify-center items-center gap-3'>
            <h2 className='text-base text-center'>
              Utilities for setting the width of an element.
            </h2>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded'>
              Suscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
}
