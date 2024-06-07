"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "@nextui-org/react";

export default function SwiperAutoplay({ swiperArr }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={80}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {swiperArr.map((slide) => {
          return (
            <SwiperSlide key={slide.title}>
              <div className=" flex flex-col justify-center items-center gap-8 mx-auto text-center pb-24 px-12">
                <h1 className="text-4xl font-extrabold mx-auto md:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
                  {slide.title}{" "}
                  <span className="bg-gradient-to-t from-light to-foreground text-transparent bg-clip-text border-none">
                    {slide.span}
                  </span>
                </h1>
                <p className="max-w-2xl mx-auto text-foreground/80">{slide.content}</p>
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      as={Link}
                      color="primary"
                      href={slide.link}
                      variant="solid"
                      className="hidden sm:flex"
                    >
                      {slide.button}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 64 64" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          {/* <span ref={progressContent}></span> */}
        </div>
      </Swiper>
    </>
  );
}
