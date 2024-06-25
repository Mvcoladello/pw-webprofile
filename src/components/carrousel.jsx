import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function TechCarousel(){
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => {
        if (prevSlide === 6) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 3000); // Change the interval for faster or slower rotation

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={7}
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      loop={true}
      autoplay={{
        delay: 3000, // Same delay as the interval above
        disableOnInteraction: false, // Keep rotating even if the user interacts
      }}
      className="swiper-container"
    >
      <SwiperSlide>
        <img
          src="https://www.pngfind.com/pngs/m/272-2725991_red-bull-logo-png-transparent-red-bull-logo.png"
          alt="JavaScript"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.pngkey.com/png/full/18-189893_shell-logo-png-transparent-png.png"
          alt="TypeScript"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.pngfind.com/pngs/m/376-3767058_tertz-logo-png-transparent-png.png"
          alt="Flutter"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.freepngimg.com/thumb/tiktok/20562-9-tiktok-logo-png-image-free-download.png"
          alt="Java"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.pngall.com/wp-content/uploads/2017/06/WD-Black-Logo-PNG-Transparent-Image.png"
          alt="PHP"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.freepngimg.com/thumb/youtube/25226-2-youtube-logo-png-image-free-download.png"
          alt="Spring Boot"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.freepngimg.com/thumb/kiwi/11741-5-kiwi-logo-png-image-free-download.png"
          alt="Laravel"
          className="w-24 h-12"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.freepngimg.com/thumb/alexa/1452-8-alexa-logo-png-image-free-download.png"
          alt="React"
          className="w-24 h-12"
        />
      </SwiperSlide>
    </Swiper>
  );
};
