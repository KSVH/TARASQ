import React from 'react'
import icon from '../../../../images/social/linkedin.png';

export default function FooterTwo() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fec7d7" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,160C384,139,480,149,576,176C672,203,768,245,864,266.7C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <footer className='bg-background-pink'>
        <div className='container mx-auto px-4'>
          <div class="grid grid-cols-2 gap-4 pb-5">
            <div className='flex items-center'>
              <h5 className='font-bold text-paragraph'>Created by Yuna ❤️</h5>
            </div>
            <div>
              <div className='flex justify-end items-center'>
                <div className='flex mr-3'>
                  <a href="/" className='text-paragraph font-bold'>Mentions Légales</a>
                </div>
                <div>
                  <a href="/">
                    <img src={icon} className='h-10 w-10' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
