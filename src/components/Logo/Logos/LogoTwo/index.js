import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import CSS file
import './logoTwo.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const LogoTwo = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-5 mb-5 flex justify-center flex-col items-center'>
        <h2 className='text-center font-semibold text-2xl text-gray-800 mb-3'>Ils nous font confiance</h2>
        <hr className='w-[200px]' />
      </div>
      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
      >
        <SwiperSlide className='custom-slide'>
          <div className="h-20 w-20 bg-cover">
            <StaticImage
              src="../../../../images/logo/logo1.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='custom-slide'>
          <div className="h-20 w-20 bg-cover">
            <StaticImage
              src="../../../../images/logo/logo2.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='custom-slide'>
          <div className="h-20 w-20 bg-cover">
            <StaticImage
              src="../../../../images/logo/logo3.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='custom-slide'>
          <div className="h-20 w-20 bg-cover">
            <StaticImage
              src="../../../../images/logo/logo1.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default LogoTwo
