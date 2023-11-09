"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";

export default function Slider({ children }) {
  return (
    <Swiper
      slidesPerView="auto"
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[EffectCreative, Autoplay, Pagination]}
      className=" h-60 w-full"
    >
      {children.map((el, i) => {
        return (
          <SwiperSlide
            key={i}
            className="flex h-full w-full items-center justify-center text-center"
          >
            {el}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
