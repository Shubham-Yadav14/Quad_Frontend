import React, { useEffect } from "react";
import Narrow from "../Common/Narrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import img1 from "../Images/logo1.png";
import img2 from '../Images/logo2.png';
import img3 from '../Images/logo3.png';
import img4 from '../Images/logo4.png';
import img5 from '../Images/logo5.png';
import img6 from '../Images/logo6.png';
import img7 from '../Images/logo7.png';

export default function BrandScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-full", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const headingElement = document.getElementById("Heading3");
    const swiperElement = document.getElementById("swiperr");
    if (headingElement) {
      observer.observe(headingElement);
    }
    if (swiperElement) {
      observer.observe(swiperElement);
    }

    return () => {
      if (headingElement) {
        observer.unobserve(headingElement);
      }
      if (swiperElement) {
        observer.unobserve(swiperElement);
      }
    };
  }, []);

  return (
    <div className=" bg-customPurple max-xl:py-5 py-20">
      <div
        id="Heading3"
        className=" mx-auto opacity-0 transform translate-y-full transition-all duration-700 max-xl:opacity-100 max-xl:transform-none max-xl:transition-none"
      >
        <div className="p-2 bg-purpleBg rounded-xl font-semibold text-customPurple text-center mx-auto w-40">
          Brand
        </div>
        <div className="text-center text-white text-5xl font-bold mt-5">
          Automate With 110+ Integrations
        </div>
      </div>

      <Swiper
        id="swiperr"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        className="mt-14"
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
        speed={3000}
      >
        <SwiperSlide className="mb-3">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="swiperr"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        className="mt-5"
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
        speed={3000}
      >
        <SwiperSlide className="mb-3">
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-3">
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
