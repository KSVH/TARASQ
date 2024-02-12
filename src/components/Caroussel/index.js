import React, { useRef, useState } from 'react';
import CarouOne from '../../images/test/carou1.jpg';
import CarouTwo from '../../images/test/carou2.jpg';
import './caroussel.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={CarouTwo} className='conteneurImage h-screen-minus-navbar w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarouOne} className='conteneurImage h-screen-minus-navbar w-full' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel

