import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import flutter from "../assets/flutter.png";
import java from "../assets/java.png";
import javascript from "../assets/js.png";
import node from "../assets/node.png";  
import php from "../assets/php.png";  
import react from "../assets/react.png";  
import html from "../assets/html-5.png";
import css from "../assets/css.png";

import "swiper/css";

export function TechCarousel(){
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      effect="fade" // Use the fade effect
      className="swiper-container"
    >
      <SwiperSlide>
        <img
          src={javascript}
          alt="JavaScript"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={html}
          alt="html"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={css}
          alt="css"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={react}
          alt="react"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={node}
          alt="node"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={php}
          alt="PHP"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={java}
          alt="Java"
          className="w-16 h-16"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={flutter}
          alt="Flutter"
          className="w-16 h-16"
        />
      </SwiperSlide>
    </Swiper>
  );
};