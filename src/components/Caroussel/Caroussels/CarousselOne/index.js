import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { StaticImage } from "gatsby-plugin-image";
import "./style.css";

const CarousselOne = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[340px] h-[300px]">
            <StaticImage
              src="../../../../images/techno/react.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class="rounded-t-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <StaticImage
              src="../../../../images/techno/styled.svg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class="rounded-t-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarousselOne;
