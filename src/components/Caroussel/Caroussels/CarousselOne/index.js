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
        <SwiperSlide className="bg-gradient-to-bl to-[#D5BCFF] from-[#FF8EAF]">
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
          <h2 className="mt-10 text-white font-mono text-2xl">React</h2>
          <p className="text-white text-xl">Framework Javascript</p>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-bl to-[#D5BCFF] from-[#FF8EAF]">
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
          <h2 className="mt-10 text-white font-mono text-2xl">Styled Components</h2>
          <p className="text-white text-xl">Framework CSS in JS</p>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-bl to-[#D5BCFF] from-[#FF8EAF]">
          <div className="w-[300px] h-[300px]">
            <StaticImage
              src="../../../../images/techno/bootstrap.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class="rounded-t-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2 className="mt-10 text-white font-mono text-2xl">Bootstrap</h2>
          <p className="text-white text-xl">Bibliothèque CSS</p>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-bl to-[#D5BCFF] from-[#FF8EAF]">
          <div className="w-[300px] h-[300px]">
            <StaticImage
              src="../../../../images/techno/bootstrap.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class="rounded-t-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2 className="mt-10 text-white font-mono text-2xl">Bootstrap</h2>
          <p className="text-white text-xl">Bibliothèque CSS</p>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-bl to-[#D5BCFF] from-[#FF8EAF]">
          <div className="w-[300px] h-[300px]">
            <StaticImage
              src="../../../../images/techno/bootstrap.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class="rounded-t-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2 className="mt-10 text-white font-mono text-2xl">Bootstrap</h2>
          <p className="text-white text-xl">Bibliothèque CSS</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarousselOne;
